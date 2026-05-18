import { School } from '@mui/icons-material';
import { Box, Chip, Container, Paper, Typography } from '@mui/material';

const coursework = [
  'Generative AI',
  'Data Mining',
  'Algorithms',
  'Introduction to Robotics',
  'Data Science & Probability',
  'Database Systems & Architecture',
  'Computer Systems',
  'Software Development Tools & Methods',
  'Human-Computer Interaction',
];

const Education = () => {
  return (
    <Box id="education" sx={{ py: 14 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          textAlign="center"
          fontWeight="bold"
          sx={{ mb: 2, color: '#e8e8ed' }}
        >
          Education
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 8, fontSize: '1.1rem', color: '#8888a0' }}
        >
          Where I'm building my foundation
        </Typography>

        <Box sx={{ maxWidth: 700, mx: 'auto' }}>
          <Paper
            sx={{
              p: { xs: 3, md: 4 },
              transition: 'border-color 0.3s ease',
              '&:hover': { borderColor: '#00d4aa' },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
              <School sx={{ fontSize: 36, color: '#00d4aa', mt: 0.5 }} />
              <Box>
                <Typography variant="h5" fontWeight="bold" sx={{ color: '#e8e8ed' }}>
                  University of Colorado Boulder
                </Typography>
                <Typography variant="body1" sx={{ color: '#00d4aa' }}>
                  Bachelor of Science in Computer Science
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.8rem',
                    color: '#8888a0',
                    mt: 0.5,
                  }}
                >
                  Jan 2025 — May 2027 · GPA: 3.6
                </Typography>
              </Box>
            </Box>

            <Typography variant="body2" sx={{ color: '#8888a0', mb: 2, fontWeight: 600 }}>
              Relevant Coursework
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {coursework.map((course) => (
                <Chip
                  key={course}
                  label={course}
                  size="small"
                  variant="outlined"
                  sx={{
                    borderColor: '#2a2a40',
                    color: '#e8e8ed',
                    fontSize: '0.75rem',
                    '&:hover': {
                      borderColor: '#00d4aa',
                      bgcolor: 'rgba(0, 212, 170, 0.05)',
                    },
                  }}
                />
              ))}
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Education;
