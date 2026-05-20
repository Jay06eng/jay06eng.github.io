import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import DynamicTyping from '../../components/DynamicTyping';
import About from '../../components/About';
import Timeline from '../../components/Timeline/Timeline';
import Seo from '../../components/Seo';
import homeConfig from '../../assets/configs/homeConfig';
import Hero from '../../components/Hero';
import { useLang } from '../../utils/i18n';

export default function Home() {
  const [lang] = useLang();
  const canonical = typeof window !== 'undefined' ? window.location.href : undefined;

  const titles = homeConfig.titles_i18n?.[lang] || homeConfig.titles || ['Data Scientist'];
  const about = homeConfig.about_i18n?.[lang] || homeConfig.about || { start: '', exit: '' };

  const timelineItems = (homeConfig.workTimeline || []).map((it) => ({
    ...it,
    title: it.title_i18n?.[lang] || it.title,
    description: it.description_i18n?.[lang] || it.description,
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Javier Bonilla',
    url: canonical,
    jobTitle: titles?.[0] || 'Data Scientist',
  };

  // greeting may be a JSX node (from config) or a string; handle both
  const greetingNode = homeConfig.greeting_i18n?.[lang] || homeConfig.greeting;
  const ExperienceLabel = lang === 'es' ? 'Experiencia' : 'Experience';

  return (
    <section>
      <Seo
        title="Javier Bonilla Website"
        description={
          lang === 'es'
            ? 'TPM con más de 10 años en Amazon, Pinterest y CommonDevOps. Especializado en entrega de productos AI/ML, modernización de plataformas y operaciones.'
            : '10+ years at Amazon, Pinterest, and CommonDevOps. TPM driving AI/ML product delivery, platform modernization, and $100M+ in business outcomes.'
        }
        canonical={canonical}
        jsonLd={jsonLd}
      />

      <Container maxWidth="lg" sx={{ py: 6, textAlign: 'center' }}>
        {React.isValidElement(greetingNode) ? (
          <Box sx={{ mb: 1 }}>{greetingNode}</Box>
        ) : (
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
            {greetingNode}
          </Typography>
        )}
        <Box sx={{ color: 'text.secondary', fontSize: 18, mb: 3 }}>
          <DynamicTyping titles={titles} />
        </Box>
        <About about={about} />
      </Container>

      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Box sx={{ width: '100%', maxWidth: '960px', mx: 'auto' }}>
          <Timeline items={timelineItems} />
        </Box>
      </Container>
    </section>
  );
}


