import { Box, Container, Typography, Grid, Paper, IconButton } from '@mui/material';
import { Email, GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: <GitHub sx={{ fontSize: 40 }} />,
      label: 'GitHub',
      value: 'github.com/yourusername',
      link: 'https://github.com/yourusername',
    },
    {
      icon: <LinkedIn sx={{ fontSize: 40 }} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com/in/yourprofile',
    },
  ];

  const socialLinks = [
    { icon: <Email />, link: 'mailto:your.email@example.com', label: 'Email' },
    { icon: <GitHub />, link: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <LinkedIn />, link: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: <Twitter />, link: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 2 }}>
          Get In Touch
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 6, fontSize: '1.1rem', opacity: 0.95 }}>
          I'm currently available for freelance work. Let's build something great together!
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {contactInfo.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  bgcolor: 'rgba(255, 255, 255, 0.95)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <Box sx={{ color: '#667eea', mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" gutterBottom fontWeight="bold" color="text.primary">
                  {item.label}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="a"
                  href={item.link}
                  sx={{
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#667eea',
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
          <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
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
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'white',
                    color: '#667eea',
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 8, pt: 4, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Karson Kelley. Built with React, TypeScript, and Material-UI.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
