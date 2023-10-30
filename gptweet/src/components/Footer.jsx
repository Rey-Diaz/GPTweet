import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box component="footer" className="fixed inset-x-0 bottom-0 bg-gray-800 text-white">
      <Container maxWidth="lg" className="py-4">
        <Typography variant="body1" className="text-center">
          &copy; {new Date().getFullYear()} My React App
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
