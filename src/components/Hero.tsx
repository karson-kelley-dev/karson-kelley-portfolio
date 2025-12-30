import { Email, GitHub } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import headshotImage from '../assets/headshot.jpg';


const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Avatar
            src={headshotImage}
            alt="Profile Photo"
            sx={{
              width: { xs: 200, md: 300 },
              height: { xs: 200, md: 300 },
              border: '5px solid white',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
              Hi, I'm Karson Kelley
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
              Full Stack Developer | TypeScript Specialist
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', opacity: 0.95 }}>
              I build modern, scalable web applications with a focus on clean code and great user experiences.
              Available for freelance projects.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<GitHub />}
                sx={{
                  bgcolor: 'white',
                  color: '#667eea',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                }}
                href="https://github.com/karson-kelley-dev" 
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Email />}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
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
