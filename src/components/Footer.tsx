import { Box, Typography, Button, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import './Footer.css'

export default function Footer() {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return(
        <div className='footer-picture' style={{ marginTop: '10rem'}}>
            <ThemeProvider theme={theme}>
            <Box sx={{display: 'flex', justifyContent: 'space-around', mt: '5rem'}}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant='h3' gutterBottom>About Us</Typography>
                    <Typography variant='h4' gutterBottom>xxxx</Typography>
                    <Typography variant='h4' gutterBottom>xxxx</Typography>
                    <Typography variant='h4' gutterBottom>xxxx</Typography>
                    <Box>
                        <Button variant='contained'>More</Button>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant='h3' gutterBottom>Get In Touch</Typography>
                    <Typography variant='h4' gutterBottom>xxxx</Typography>
                    <Typography variant='h4' gutterBottom>xxxx</Typography>
                    <Typography variant='h4' gutterBottom>xxxx</Typography>
                    <Box>
                        <Button variant='contained'>More</Button>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant='h3' gutterBottom>Drop By</Typography>
                    <Typography variant='h4' gutterBottom>xxxx</Typography>
                    <Typography variant='h4' gutterBottom>xxxx</Typography>
                    <Typography variant='h4' gutterBottom>xxxx</Typography>
                    <Box>
                        <Button variant='contained'>More</Button>
                    </Box>
                </Box>
            </Box>
            </ThemeProvider>
        </div>
    )
}