import { GitHub, Launch } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, Chip, Container, Grid, Typography } from '@mui/material';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Integrity Towing Solutions',
      description:
        'Architected and built a complete business platform including public-facing site, client portal, and regional and property manager dashboards. Implemented role-based access across four distinct portal types with differentiated permissions and views. Integrated transactional email service for automated client and operations communications.',
      technologies: ['Vue.js', 'FeathersJS', 'JavaScript', 'EmailJS'],
      liveUrl: 'https://integritytow.com',
    },
    {
      title: 'PontRx Health Technology Platform',
      description:
        'Frontend development for venture-backed prescription discount platform serving 1,000+ healthcare providers nationwide. Built patient-facing interfaces for real-time pharmacy price comparison, prescription search, and medication management tools. Contributed to EHR integrations and HIPAA-compliant patient data workflows on AWS infrastructure.',
      technologies: ['React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'Cognito'],
      liveUrl: 'https://pontrx.com',
    },
    {
      title: 'TrueNorth AR',
      description:
        'Designed and built a professional website with integrated email service for a vehicle repossession company. Clean, mobile-responsive frontend delivered within a 2-month engagement.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'EmailJS'],
      liveUrl: 'https://truenorthar.com',
    },
    {
      title: 'NutriTeen',
      description:
        'HCI research project designing a nutrition and recipe application targeting teen users. Conducted structured user performance studies, collected and analyzed usability data to iterate on design. Applied HCI principles to optimize information architecture and interaction flows.',
      technologies: ['HCI Research', 'User Testing', 'Figma', 'Prototyping'],
    },
    {
      title: 'MatchFlix',
      description:
        'Tinder-style movie discovery app where users swipe through personalized movie recommendations. Integrates with an external movie API to serve dynamic content with swipe gesture logic and preference-based matching.',
      technologies: ['React', 'JavaScript', 'REST API', 'CSS'],
    },
  ];

  return (
    <Box id="projects" sx={{ py: 14 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          textAlign="center"
          fontWeight="bold"
          sx={{ mb: 2, color: '#e8e8ed' }}
        >
          Projects
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 8, fontSize: '1.1rem', color: '#8888a0' }}
        >
          Some of my recent work
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: '#141420',
                  border: '1px solid #2a2a40',
                  borderRadius: 3,
                  backgroundImage: 'none',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    borderColor: '#00d4aa',
                    boxShadow: '0 0 20px rgba(0, 212, 170, 0.1)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" sx={{ color: '#e8e8ed' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" paragraph sx={{ color: '#8888a0', lineHeight: 1.7 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {project.technologies.map((tech, idx) => (
                      <Chip
                        key={idx}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: '#00d4aa',
                          color: '#00d4aa',
                          fontWeight: 500,
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ px: 3, pb: 2 }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      color: '#8888a0',
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
                      sx={{ color: '#00d4aa' }}
                    >
                      Live Site
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button
            variant="outlined"
            size="large"
            startIcon={<GitHub />}
            href="https://github.com/karson-kelley-dev"
            target="_blank"
            sx={{
              borderColor: '#2a2a40',
              color: '#e8e8ed',
              '&:hover': {
                borderColor: '#00d4aa',
                bgcolor: 'rgba(0, 212, 170, 0.05)',
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
