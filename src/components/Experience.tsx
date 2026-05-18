import { Box, Container, Typography } from '@mui/material';

interface ExperienceEntry {
  company: string;
  role: string;
  date: string;
  location: string;
  bullets: string[];
}

const Experience = () => {
  const experiences: ExperienceEntry[] = [
    {
      company: 'PontRx',
      role: 'Junior Software Engineer',
      date: 'Jun 2024 — May 2025',
      location: 'Miami, FL / Remote',
      bullets: [
        'Built and maintained frontend interfaces for a healthcare SaaS platform integrating real-time prescription pricing into physician EHR workflows',
        'Developed REST API routes connecting frontend clients to AWS DynamoDB, handling prescription event tracking and patient data at scale',
        'Implemented OAuth 2.0 authentication flows using AWS Cognito to secure patient and provider-facing portals',
        'Contributed to multi-portal architecture including regional, property, internal, and client-facing dashboards built with Vue.js and FeathersJS',
      ],
    },
    {
      company: 'Freelance Web Developer',
      role: 'Independent',
      date: 'Feb 2025 — Present',
      location: 'Remote',
      bullets: [
        'Designed and developed integritytow.com end-to-end — full frontend build with integrated email service, regional and property manager portals, and internal client dashboard',
        'Built truenorthar.com for TrueNorth AR — static frontend with integrated email service delivered within a 2-month engagement',
        'Designed and deployed personal portfolio at karson-kelley.com showcasing full-stack projects and client work',
      ],
    },
  ];

  return (
    <Box id="experience" sx={{ py: 14 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          textAlign="center"
          fontWeight="bold"
          sx={{ mb: 2, color: '#e8e8ed' }}
        >
          Experience
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 8, fontSize: '1.1rem', color: '#8888a0' }}
        >
          Where I've worked and what I've built
        </Typography>

        <Box sx={{ maxWidth: 800, mx: 'auto', position: 'relative' }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 12, md: 16 },
              top: 8,
              bottom: 8,
              width: '2px',
              bgcolor: '#2a2a40',
              display: { xs: 'none', sm: 'block' },
            }}
          />

          {experiences.map((exp, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                pl: { xs: 0, sm: 6 },
                pb: index < experiences.length - 1 ? 6 : 0,
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 6, md: 10 },
                  top: 8,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: '#00d4aa',
                  boxShadow: '0 0 12px rgba(0, 212, 170, 0.4)',
                  display: { xs: 'none', sm: 'block' },
                }}
              />

              <Box
                sx={{
                  border: '1px solid #2a2a40',
                  borderRadius: 3,
                  p: { xs: 3, md: 4 },
                  bgcolor: '#141420',
                  transition: 'border-color 0.3s ease',
                  '&:hover': {
                    borderColor: '#00d4aa',
                  },
                }}
              >
                <Typography variant="h5" fontWeight="bold" sx={{ color: '#e8e8ed', mb: 0.5 }}>
                  {exp.company}
                </Typography>
                <Typography variant="body1" sx={{ color: '#00d4aa', mb: 1 }}>
                  {exp.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.8rem',
                    color: '#8888a0',
                    mb: 2,
                  }}
                >
                  {exp.date} · {exp.location}
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {exp.bullets.map((bullet, idx) => (
                    <Box
                      component="li"
                      key={idx}
                      sx={{
                        color: '#8888a0',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        mb: 1,
                        '&::marker': {
                          color: '#00d4aa',
                        },
                      }}
                    >
                      {bullet}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
