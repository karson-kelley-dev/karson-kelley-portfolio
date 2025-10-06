import { GitHub, Launch } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Grid, Typography } from '@mui/material';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const Projects = () => {
  // Replace with your actual projects
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with product management, shopping cart, and secure checkout. Built with React, Node.js, and PostgreSQL.',
      image: 'https://via.placeholder.com/400x250?text=Project+1', // Replace with actual image
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com/yourusername/project1',
      liveUrl: 'https://project1.demo.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team workspaces, and productivity analytics.',
      image: 'https://via.placeholder.com/400x250?text=Project+2',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      githubUrl: 'https://github.com/yourusername/project2',
      liveUrl: 'https://project2.demo.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides real-time weather data, forecasts, and interactive maps using weather APIs.',
      image: 'https://via.placeholder.com/400x250?text=Project+3',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
      githubUrl: 'https://github.com/yourusername/project3',
    },
    {
      title: 'Portfolio CMS',
      description: 'A headless CMS for managing portfolio content with a custom admin dashboard and REST API.',
      image: 'https://via.placeholder.com/400x250?text=Project+4',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
      githubUrl: 'https://github.com/yourusername/project4',
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        bgcolor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 2 }}>
          Projects
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 6, fontSize: '1.1rem', color: 'text.secondary' }}>
          Some of my recent work
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid sx={{xs: 12, md: 4}} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {project.technologies.map((tech, idx) => (
                      <Chip
                        key={idx}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: '#667eea',
                          color: 'white',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button
                    size="small"
                    startIcon={<GitHub />}
                    href={project.githubUrl}
                    target="_blank"
                    sx={{ color: '#667eea' }}
                  >
                    Code
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="small"
                      startIcon={<Launch />}
                      href={project.liveUrl}
                      target="_blank"
                      sx={{ color: '#667eea' }}
                    >
                      Live Demo
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            size="large"
            startIcon={<GitHub />}
            href="https://github.com/yourusername" // Replace with your GitHub profile
            target="_blank"
            sx={{
              borderColor: '#667eea',
              color: '#667eea',
              '&:hover': {
                borderColor: '#667eea',
                bgcolor: 'rgba(102, 126, 234, 0.04)',
              },
            }}
          >
            View More on GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
