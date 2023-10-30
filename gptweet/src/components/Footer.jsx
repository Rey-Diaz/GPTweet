import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        color: 'text.secondary',
        pt: 3,
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Company
            </Typography>
            <List>
              <ListItem>
                <Link href="#" color="inherit">About Us</Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="inherit">Careers</Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="inherit">Press</Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Resources
            </Typography>
            <List>
              <ListItem>
                <Link href="#" color="inherit">Blog</Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="inherit">Help Center</Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="inherit">Contact Us</Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <IconButton aria-label="Facebook" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="Instagram" color="inherit">
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          &copy; {new Date().getFullYear()} My React App. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
