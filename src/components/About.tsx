import { Code, Lightbulb, Speed } from '@mui/icons-material';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const About = () => {
  const highlights = [
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: 'Clean Code',
      description: 'I write maintainable, well-documented code that follows best practices and design patterns.',
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: 'Fast Delivery',
      description: 'Efficient development workflow ensures timely delivery without compromising quality.',
    },
    {
      icon: <Lightbulb sx={{ fontSize: 40 }} />,
      title: 'Problem Solver',
      description: 'I love tackling complex challenges and finding elegant solutions to technical problems.',
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 10,
        bgcolor: '#f5f5f5',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 2 }}>
          About Me
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 6, fontSize: '1.1rem', color: 'text.secondary' }}>
          A passionate developer committed to delivering high-quality solutions
        </Typography>

       <Grid container spacing={4} sx={{ mb: 6 }}>
        {highlights.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                textAlign: 'center',
                height: '100%',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                },
              }}
            >
                <Box sx={{ color: '#667eea', mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            I'm a full stack developer with a passion for building modern web applications using TypeScript, React, and Node.js.
            With several years of experience, I've worked on projects ranging from small business websites to large-scale enterprise applications.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            I believe in writing clean, maintainable code and creating intuitive user experiences. When I'm not coding, I enjoy
            contributing to open source projects and staying up-to-date with the latest web technologies.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Currently available for freelance projects. Let's work together to bring your ideas to life!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
