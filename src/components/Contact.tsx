import { Email, GitHub } from '@mui/icons-material';
import { Box, Container, Grid, IconButton, Paper, Typography } from '@mui/material';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      label: 'Email',
      value: 'karson-kelley-dev@outlook.com',
      link: 'mailto:karson-kelley-dev@outlook.com',
    },
    {
      icon: <GitHub sx={{ fontSize: 40 }} />,
      label: 'GitHub',
      value: 'github.com/karson-kelley-dev',
      link: 'https://github.com/karson-kelley-dev',
    },
  ];

  const socialLinks = [
    { icon: <Email />, link: 'mailto:karson-kelley-dev@outlook.com', label: 'Email' },
    { icon: <GitHub />, link: 'https://github.com/karson-kelley-dev', label: 'GitHub' },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 14,
        bgcolor: '#141420',
        borderTop: '1px solid #2a2a40',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          textAlign="center"
          fontWeight="bold"
          sx={{ mb: 2, color: '#e8e8ed' }}
        >
          Get In Touch
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 8, fontSize: '1.1rem', color: '#8888a0' }}
        >
          Open to full-time opportunities and select freelance projects. Let's build something great together!
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {contactInfo.map((item, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Paper
                sx={{
                  p: 4,
                  textAlign: 'center',
                  bgcolor: '#1c1c2e',
                  transition: 'border-color 0.3s ease',
                  '&:hover': {
                    borderColor: '#00d4aa',
                  },
                }}
              >
                <Box sx={{ color: '#00d4aa', mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ color: '#e8e8ed' }}>
                  {item.label}
                </Typography>
                <Typography
                  variant="body2"
                  component="a"
                  href={item.link}
                  sx={{
                    color: '#8888a0',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#00d4aa',
                    },
                  }}
                >
                  {item.value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, color: '#e8e8ed' }}>
            Connect with me
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                sx={{
                  bgcolor: 'rgba(0, 212, 170, 0.1)',
                  color: '#00d4aa',
                  '&:hover': {
                    bgcolor: '#00d4aa',
                    color: '#0a0a0f',
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 8, pt: 4, borderTop: '1px solid #2a2a40' }}>
          <Typography variant="body2" sx={{ color: '#8888a0' }}>
            &copy; {new Date().getFullYear()} Karson Kelley. Built with React, TypeScript, and Material-UI.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
