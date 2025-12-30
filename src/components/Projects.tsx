import { GitHub, Launch } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Grid, Typography } from '@mui/material';

import brentmoorCreateTenant from '../assets/brentmoor-create-tenant.png';

interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const Projects = () => {
  // Replace with your actual projects
  const projects: Project[] = [
    {
      title: 'Brentmoor Parking Management Portal',

      description: "Full-stack serverless parking management system built for Brentmoor apartment complex. Features dual portals: tenants can register vehicles and request guest parking passes, while administrators manage tenant accounts, approve vehicle registrations, and oversee all parking activity.Key features include multi-step tenant onboarding, vehicle registration with state-specific validation, guest parking workflow, role-based access control separating tenant and admin views, and Excel bulk import for tenant data management.Built with React and TypeScript for type-safe development, AWS Lambda for serverless API functions, DynamoDB for scalable data storage, Cognito for authentication and role management, and CloudFront for global content delivery.",

      image: brentmoorCreateTenant,
      technologies: ['React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'Cognito','CloudFront'],
    },
    {
      title: 'PontRx Health Technology Platform',
      description: 'Frontend development for venture-backed prescription discount platform serving 1,000+ healthcare providers nationwide. Built patient-facing interfaces for real-time pharmacy price comparison, prescription search, and medication management tools using React and TypeScript. Contributed to EHR integrations and HIPAA-compliant patient data workflows on AWS infrastructure, enabling cost savings averaging $200+ monthly for users.',
      technologies: ['React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'Cognito','CloudFront'],
      liveUrl: 'https://pontrx.com',
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
                  height="auto"
                  image={project.image} // Show first image by default
                  alt= {project.image ? project.title : ''}
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
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      color: '#667eea',
                      fontSize: '0.875rem',
                    }}
                  >
                    <GitHub fontSize="small" />
                    Private Repository
                  </Box>
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
            href="https://github.com/karson-kelley-dev" 
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
