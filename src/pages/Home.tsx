import Banner from "../components/Banner";
import { Box, Typography, Button, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'
import MySliderComponent from "../components/HomeSlider";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function home() {
    return(
        <div>
            <ThemeProvider theme={theme}>
                <Banner />
                <Box sx={{display:'flex', flexDirection: {xs: 'column' , md: 'row'}, justifyContent:'space-around', mt: '10rem'}}>
                    <Box sx={{display: 'flex',}} component='img' src="./src/assets/picture/activities.jpg" title="activities" width='640px' />
                    <Box sx={{display: 'flex', flexDirection: 'column', maxWidth:'500px'}}>
                        <Typography variant="h1" gutterBottom>Activity</Typography>
                        <Typography variant="subtitle1"  gutterBottom>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe provident aspernatur ad dolor, commodi recusandae illum aliquam dolorem asperiores quas ratione aperiam ab reiciendis qui unde mollitia quos sint! Dolor?</Typography>
                        <Box>
                            <Button href="./Activity" variant="contained">more</Button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection: {xs: 'column' , md: 'row'}, justifyContent:'space-around', mt: '10rem', background:''}}>
                <Box sx={{display: 'flex', flexDirection: 'column', maxWidth:'500px', order: {xs: 2, md: 1 } }}>
                        <Typography variant="h1" gutterBottom>Eat</Typography>
                        <Typography variant="subtitle1"  gutterBottom>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe provident aspernatur ad dolor, commodi recusandae illum aliquam dolorem asperiores quas ratione aperiam ab reiciendis qui unde mollitia quos sint! Dolor?</Typography>
                        <Box>
                            <Button variant="contained">more</Button>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', order: {xs: 1, md: 2}}} component='img' src="./src/assets/picture/eat.jpg" title="activities" width='640px' />
                </Box>
                <Box sx={{display:'flex', flexDirection: {xs: 'column' , md: 'row'}, justifyContent:'space-around', mt: '10rem', background:''}}>
                    <Box sx={{display: 'flex'}} component='img' src="./src/assets/picture/relax.jpg" title="activities" width='640px' />
                    <Box sx={{display: 'flex', flexDirection: 'column', maxWidth:'500px' }}>
                        <Typography variant="h1" gutterBottom>Relax</Typography>
                        <Typography variant="subtitle1"  gutterBottom>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe provident aspernatur ad dolor, commodi recusandae illum aliquam dolorem asperiores quas ratione aperiam ab reiciendis qui unde mollitia quos sint! Dolor?</Typography>
                        <Box>
                            <Button variant="contained">more</Button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ mt: '10rem'}}>
                    <MySliderComponent />
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default home;