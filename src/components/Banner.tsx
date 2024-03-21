import './Banner.css'
import { Container, Typography, Box, Button, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Banner() {
    return (
        <div className="banner-bg">
            <ThemeProvider theme={theme}>
            <Container>
                <Box sx={{display:'flex', flexDirection:'column', mt:'10rem'}}>
                        <Typography sx={{ typography: {xs: 'h2', md: 'h1'}}} gutterBottom>WELCOME TO SAMUIDER.COM</Typography>
                        <Typography variant='h4' gutterBottom>Have a good time with discounts</Typography>
                        <Typography variant='h4' gutterBottom>food, play, relax on Koh Samui!</Typography>
                        <Typography variant='h4' gutterBottom>Travel Koh Samui with samuider.com save up to 25%</Typography>
                </Box>
                <Button variant='contained'>About Us</Button>
            </Container>
            </ThemeProvider>
        </div>
    )
}

export default Banner