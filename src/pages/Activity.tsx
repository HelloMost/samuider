import './Activity.css'
import { Box, createTheme, responsiveFontSizes, ThemeProvider, Typography, Card, CardMedia, CardActionArea, CardContent } from '@mui/material'

export default function Activity() {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return(
        <div>
            <ThemeProvider theme={theme}>
                <div className="activity-banner"></div>  
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography variant='h1' gutterBottom>Activity</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem'}}>
                    <Card sx={{maxWidth:'400px'}}>
                        <CardActionArea href='/Atv'>
                            <CardMedia component='img' src='../src/assets/Activity/ATV/index.jpg' />
                        </CardActionArea>
                        <CardContent>
                            <Typography variant='h5' align='center'>ATV</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{maxWidth:'400px'}}>
                        <CardActionArea href='...'>
                            <CardMedia component='img' src='../src/assets/Activity/Zip-line/index.jpg' />
                        </CardActionArea>
                    </Card>
                    <Card sx={{maxWidth:'400px'}}>
                        <CardActionArea href='...'>
                            <CardMedia component='img' src='../src/assets/Activity/WaterSport/index.jpg' />
                        </CardActionArea>
                    </Card>
                    <Card sx={{maxWidth:'400px'}}>
                        <CardActionArea href='...'>
                            <CardMedia component='img' src='../src/assets/Activity/ElephantKingdom/index.png' />
                        </CardActionArea>
                    </Card>
                    <Card sx={{maxWidth:'400px'}}>
                        <CardActionArea href='...'>
                            <CardMedia component='img' src='../src/assets/Activity/Insea/Angthong/index.jpg' />
                        </CardActionArea>
                    </Card>
                </Box>
            </ThemeProvider>
        </div>
    )
}