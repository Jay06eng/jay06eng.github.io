import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useLang } from '../utils/i18n';

const LINKEDIN_URL = 'https://www.linkedin.com/in/javierbonillab/';

const UI = {
  en: {
    h1_a: 'From ',
    h1_b: 'Strategy to AI/ML ',
    h1_c: 'Delivery',
    sub: '10+ years at Amazon, Pinterest, and CommonDevOps. TPM driving AI/ML product delivery, platform modernization, and $100M+ in business outcomes.',
    ctaPrimary: 'Connect on LinkedIn',
    ctaPrimaryHref: LINKEDIN_URL,
    ctaSecondary: 'See Projects',
    seenIn: 'Experience at',
  },
  es: {
    h1_a: 'De ',
    h1_b: 'Estrategia a Entrega AI/ML',
    h1_c: '',
    sub: 'Más de 10 años en Amazon, Pinterest y CommonDevOps. TPM impulsando entrega de productos AI/ML, modernización de plataformas y más de $100M en resultados.',
    ctaPrimary: 'Conectar en LinkedIn',
    ctaPrimaryHref: LINKEDIN_URL,
    ctaSecondary: 'Ver proyectos',
    seenIn: 'Experiencia en',
  },
};

export default function Hero() {
  const [lang] = useLang();
  const t = UI[lang] || UI.en;

  return (
    <Box
      sx={(theme) => ({
        position: 'relative',
        color: '#fff',
        py: { xs: 8, md: 12 },
        // Layered gradients for a premium look
        background: `radial-gradient(1200px 600px at 20% -10%, ${theme.palette.secondary.main}33, transparent 60%),
                     linear-gradient(180deg, ${theme.palette.primary.main} 0%, #0b1220 60%, #08101a 100%)`,
        overflow: 'hidden',
      })}
    >
      {/* subtle glow ornament */}
      <Box sx={{
        position: 'absolute',
        width: 280,
        height: 280,
        right: -80,
        top: -80,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.35) 0%, rgba(6,182,212,0) 60%)',
        filter: 'blur(6px)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          {/* Headline with gradient-highlight */}
          <Typography variant="h1" sx={{ fontWeight: 900, letterSpacing: -1, lineHeight: 1.1, fontSize: { xs: 36, md: 56 } }}>
            {t.h1_a}
            <Box component="span" sx={{
              background: (th) => `linear-gradient(90deg, ${th.palette.secondary.main}, #7dd3fc)`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 24px rgba(125,211,252,.25)'
            }}>
              {t.h1_b}
            </Box>
            {t.h1_c}
          </Typography>

          {/* Subheadline */}
          <Typography sx={{ maxWidth: 900, fontSize: { xs: 16, md: 18 }, color: 'rgba(255,255,255,.86)' }}>
            {t.sub}
          </Typography>

{/* CTAs */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button href={t.ctaPrimaryHref} target="_blank" rel="noopener noreferrer" variant="contained" color="secondary" size="large" aria-label={t.ctaPrimary}>
              {t.ctaPrimary}
            </Button>
            <Button component="a" href="/projects" variant="outlined" size="large" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}>
              {t.ctaSecondary}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

