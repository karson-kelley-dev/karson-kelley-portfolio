import { Box, Chip, Container, Grid, Paper, Typography } from '@mui/material';

const Skills = () => {
  const skillCategories: Record<string, string[]> = {
    'Languages': ['JavaScript', 'TypeScript', 'Python', 'C', 'C++', 'HTML', 'CSS', 'SQL'],
    'Frameworks & Libraries': ['React', 'Vue.js', 'FeathersJS', 'Vite', 'Node.js', 'EmailJS'],
    'Cloud & Infrastructure': ['AWS DynamoDB', 'AWS Cognito', 'AWS S3', 'AWS Lambda'],
    'Developer Tools': ['Git', 'GitHub', 'VS Code', 'Figma', 'REST APIs'],
    'AI & Automation': ['GoHighLevel', 'OpenAI API', 'Prompt Engineering', 'Workflow Automation'],
  };

  return (
    <Box id="skills" sx={{ py: 14 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          textAlign="center"
          fontWeight="bold"
          sx={{ mb: 2, color: '#e8e8ed' }}
        >
          Skills & Technologies
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 8, fontSize: '1.1rem', color: '#8888a0' }}
        >
          Technologies I work with
        </Typography>

        <Grid container spacing={4}>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={category}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  transition: 'border-color 0.3s ease',
                  '&:hover': {
                    borderColor: '#00d4aa',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  fontWeight="bold"
                  sx={{
                    mb: 3,
                    color: '#00d4aa',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.95rem',
                  }}
                >
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
                        borderColor: '#2a2a40',
                        color: '#e8e8ed',
                        '&:hover': {
                          borderColor: '#00d4aa',
                          bgcolor: 'rgba(0, 212, 170, 0.05)',
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
