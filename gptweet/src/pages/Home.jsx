import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <Box className="bg-brand-light text-brand-dark transition-colors duration-500 min-h-screen">
      <Container maxWidth="lg" className="pt-8 pb-10">
        <Typography variant="h2" component="h1" className="text-center mb-6">
          Welcome to My React App
        </Typography>

        <Grid container spacing={4}>
          {/* Success */}
          <Grid item xs={12}>
            <Paper className="p-4" style={{ backgroundColor: 'var(--brand-success)' }}>
              <Typography variant="h5" component="h3" className="mb-3">
                Success
              </Typography>
              <Typography>
                This is a success message, indicating a positive action or result.
              </Typography>
            </Paper>
          </Grid>

          {/* Danger */}
          <Grid item xs={12}>
            <Paper className="p-4" style={{ backgroundColor: 'var(--brand-danger)' }}>
              <Typography variant="h5" component="h3" className="mb-3">
                Danger
              </Typography>
              <Typography>
                This is an error message, indicating a problem that needs attention.
              </Typography>
            </Paper>
          </Grid>

          {/* Warning */}
          <Grid item xs={12}>
            <Paper className="p-4" style={{ backgroundColor: 'var(--brand-warning)' }}>
              <Typography variant="h5" component="h3" className="mb-3">
                Warning
              </Typography>
              <Typography>
                This is a warning message, cautioning about potential issues.
              </Typography>
            </Paper>
          </Grid>

          {/* Info */}
          <Grid item xs={12}>
            <Paper className="p-4" style={{ backgroundColor: 'var(--brand-info)' }}>
              <Typography variant="h5" component="h3" className="mb-3">
                Info
              </Typography>
              <Typography>
                This is an informational message, providing useful details or insights.
              </Typography>
            </Paper>
          </Grid>

          {/* Primary */}
          <Grid item xs={12}>
            <Paper className="p-4" style={{ backgroundColor: 'var(--brand-primary)' }}>
              <Typography variant="h5" component="h3" className="mb-3">
                Primary
              </Typography>
              <Typography>
                This section uses the primary brand color to highlight key features or actions.
              </Typography>
            </Paper>
          </Grid>

          {/* Secondary */}
          <Grid item xs={12}>
            <Paper className="p-4" style={{ backgroundColor: 'var(--brand-secondary)' }}>
              <Typography variant="h5" component="h3" className="mb-3">
                Secondary
              </Typography>
              <Typography>
                This section uses the secondary brand color for less prominent features or information.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
