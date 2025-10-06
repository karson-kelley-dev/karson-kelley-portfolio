import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

const Skills = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 95, category: 'Frontend' },
    { name: 'HTML/CSS', level: 90, category: 'Frontend' },
    { name: 'Material-UI', level: 85, category: 'Frontend' },

    // Backend
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Express', level: 80, category: 'Backend' },
    { name: 'REST APIs', level: 90, category: 'Backend' },
    { name: 'PostgreSQL', level: 75, category: 'Backend' },
    { name: 'MongoDB', level: 70, category: 'Backend' },

    // Tools & Others
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'Docker', level: 70, category: 'Tools' },
    { name: 'Vite', level: 80, category: 'Tools' },
    { name: 'npm/yarn', level: 90, category: 'Tools' },
  ];

  const categories = ['Frontend', 'Backend', 'Tools'];

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
          {categories.map((category) => (
            <Grid item xs={12} md={4} key={category}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                }}
              >
                <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mb: 3, color: '#667eea' }}>
                  {category}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <Box key={index}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" fontWeight="medium">
                            {skill.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            bgcolor: 'rgba(102, 126, 234, 0.1)',
                            '& .MuiLinearProgress-bar': {
                              bgcolor: '#667eea',
                              borderRadius: 4,
                            },
                          }}
                        />
                      </Box>
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
