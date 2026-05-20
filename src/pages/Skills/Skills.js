import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SkillsItems from './SkillsItems';
import skillsConfig from '../../assets/configs/skillsConfig';
import { useLang } from '../../utils/i18n';
import blackBeltImg from '../../assets/images/Black Belt cert.jpg';

const UI = {
  en: {
    main: 'Main Skills & Tools',
    complementary: 'Complementary Skills & Tools',
    certifications: 'Certifications',
  },
  es: {
    main: 'Habilidades y herramientas principales',
    complementary: 'Habilidades y herramientas complementarias',
    certifications: 'Certificaciones',
  },
};

const Section = ({ title, children }) => (
  <Box
    sx={(theme) => ({
      textAlign: 'center',
      py: 4,
      backgroundColor: theme.palette.background.paper,
      borderRadius: 3,
      boxShadow: '0 6px 20px rgba(15,18,32,0.08), 0 1px 2px rgba(15,18,32,0.04)',
      border: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Typography variant="h3" component="h1" sx={{ color: 'text.primary', py: 2, fontWeight: 900, letterSpacing: -0.4 }}>
      <strong>{title}</strong>
    </Typography>
    {children}
  </Box>
);

export default function Skills() {
  const [lang] = useLang();
  const t = UI[lang] || UI.en;

  return (
    <section id="skills">
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Section title={t.main}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SkillsItems config={skillsConfig.mainSkills} noWrap />
          </Box>
        </Section>
      </Container>

      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Section title={t.complementary}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SkillsItems config={skillsConfig.complementarySkills} />
          </Box>
        </Section>
      </Container>

      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Section title={t.certifications}>
          <Typography
            variant="caption"
            sx={(th) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              color: th.palette.text.disabled,
              mb: 1,
            })}
          >
            <OpenInNewIcon sx={{ fontSize: 13 }} />
            Click any certificate to view credentials
          </Typography>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            justifyContent="center"
            sx={{ px: 4, pb: 2, mt: 2 }}
          >
            {skillsConfig.certifications.map((cert) => {
              const href = cert.url || blackBeltImg;
              return (
                <Box
                  key={cert.id}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={(th) => ({
                    flex: 1,
                    maxWidth: 320,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    p: 3,
                    borderRadius: 3,
                    border: `1px solid ${th.palette.divider}`,
                    bgcolor: th.palette.background.default,
                    textDecoration: 'none',
                    transition: 'transform .2s, box-shadow .2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(15,18,32,0.10)',
                      cursor: 'pointer',
                    },
                  })}
                >
                  <WorkspacePremiumIcon sx={(th) => ({ fontSize: 40, color: th.palette.secondary.main })} />
                  <Typography variant="subtitle1" fontWeight={800} textAlign="center">
                    {cert.name}
                  </Typography>
                  {cert.issuer && (
                    <Typography variant="body2" color="text.secondary" textAlign="center">
                      {cert.issuer}
                    </Typography>
                  )}
                </Box>
              );
            })}
          </Stack>
        </Section>
      </Container>
    </section>
  );
}



