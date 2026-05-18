import { Description, Email, GitHub } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import headshotImage from '../assets/headshot.jpg';

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 212, 170, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 6 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Avatar
            src={headshotImage}
            alt="Karson Kelley"
            sx={{
              width: { xs: 200, md: 280 },
              height: { xs: 200, md: 280 },
              border: '3px solid #00d4aa',
              boxShadow: '0 0 40px rgba(0, 212, 170, 0.15)',
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.85rem',
                color: '#00d4aa',
                mb: 1.5,
              }}
            >
              // hello world
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              fontWeight="bold"
              sx={{ color: '#e8e8ed' }}
            >
              Hi, I'm Karson Kelley
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                mb: 3,
                color: '#8888a0',
                fontWeight: 400,
              }}
            >
              Full-Stack Developer & AI Automation Engineer
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: '1.1rem',
                color: '#8888a0',
                maxWidth: 560,
              }}
            >
              I build modern web applications and intelligent automation systems.
              Open to full-time opportunities and select freelance projects.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<GitHub />}
                sx={{
                  bgcolor: '#00d4aa',
                  color: '#0a0a0f',
                  fontWeight: 600,
                  '&:hover': { bgcolor: '#00b894' },
                }}
                href="https://github.com/karson-kelley-dev"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Description />}
                sx={{
                  borderColor: '#2a2a40',
                  color: '#e8e8ed',
                  '&:hover': {
                    borderColor: '#00d4aa',
                    bgcolor: 'rgba(0, 212, 170, 0.05)',
                  },
                }}
                href="/resume.pdf"
                target="_blank"
              >
                Resume
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Email />}
                sx={{
                  borderColor: '#2a2a40',
                  color: '#e8e8ed',
                  '&:hover': {
                    borderColor: '#00d4aa',
                    bgcolor: 'rgba(0, 212, 170, 0.05)',
                  },
                }}
                href="#contact"
              >
                Contact
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
