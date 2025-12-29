import { Box, Chip, Container, Grid, Paper, Typography } from '@mui/material';

const Skills = () => {
  const skillCategories = {
    Frontend: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Handlebars'],
    Backend: ['Node.js', 'AWS Lambda', 'DynamoDB', 'REST APIs', 'Python'],
    'Systems & Languages': ['C', 'C++', 'Assembly'],
    'Tools & Platforms': ['Git', 'AWS', 'npm/yarn']
  };

  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        bgcolor: '#f5f5f5',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 2 }}>
          Skills & Technologies
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 6, fontSize: '1.1rem', color: 'text.secondary' }}>
          Technologies I work with
        </Typography>

        <Grid container spacing={4}>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <Grid size={{xs: 12, md: 6, lg: 3}} key={category}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                }}
              >
                <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mb: 3, color: '#667eea' }}>
                  {category}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      variant="outlined"
                      sx={{
                        justifyContent: 'flex-start',
                        borderColor: '#667eea',
                        color: '#667eea',
                        '&:hover': {
                          bgcolor: 'rgba(102, 126, 234, 0.1)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;