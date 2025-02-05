import { Container, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BookIcon from '@mui/icons-material/Book';
import InfoIcon from '@mui/icons-material/Info';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TagIcon from '@mui/icons-material/Tag';
import ListEntryComponent from './components/ListEntryComponent';
import ContactEntryComponent from './components/ContactEntryComponent';
import ExploreIcon from '@mui/icons-material/Explore';
import ContactSectionComponent from './components/ContactSectionComponent';
import ResponsiveAvatarComponent from './components/ResponsiveAvatarComponent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { BsMedium } from 'react-icons/bs';
import ArticleIcon from '@mui/icons-material/Article';

function App() {
  return (
      <Container maxWidth="lg" sx={{ marginTop: '50px'}}>
            <Stack spacing={2} >
                  <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item xs={12} zeroMinWidth>
                          <Typography variant='h1' align='center'>
                            Heyo, I'm Ben
                          </Typography>
                        </Grid>
                        
                  </Grid>
                  <Grid container rowGap={3}>
                    <Grid item xs={12} md={4} zeroMinWidth>
                      <Container>
                        <Stack spacing={4}>

                            <ResponsiveAvatarComponent 
                              alt="Ben Soer"
                              src="DSC_5839-1-250.jpg"
                              sx={{  
                                width: {
                                    xs: '250px',
                                },
                                height: {
                                    xs: 'auto',
                                },
                                border: '4px solid black'
                              }}
                            />

                            <ContactSectionComponent>
                              <ContactEntryComponent text='ben@soernet.ca'>
                                <AlternateEmailIcon color='action'/> 
                              </ContactEntryComponent>
                              <ContactEntryComponent text='604.842.2274'>
                                <TagIcon color='action' /> 
                              </ContactEntryComponent>
                            </ContactSectionComponent>

                        </Stack>
                      </Container>
                    </Grid>
                    <Grid item xs={12} md={8} zeroMinWidth>
                      <Container>
                        <Stack 
                          spacing={{
                            xs: 2,
                            md: 2
                          }} >
                          <Typography></Typography>
                          <Typography>
                            I'm a DevOps Engineer, Musician, Photographer, Wannabe Car Guy and Outdoor Enthusiast.
                            I love to learn, explore and create things that make life easier, fun, and bring more value and purpose to it. Along with that, 
                            I enjoy teaching others of my findings, leading and providing guidance for others to grow and explore.
                          </Typography>
                          
                          <Typography variant='h6'>
                            Learn More About Me:
                          </Typography>

                          <ListEntryComponent listItemText={'Online Resume'} url='https://resume.bensoer.com' testDomain='resume.bensoer.com'>
                            <ArticleIcon/>
                          </ListEntryComponent>
                          <ListEntryComponent listItemText={'LinkedIn'} url='https://www.linkedin.com/in/ben-soer-24a541b0'>
                            <LinkedInIcon/>
                          </ListEntryComponent>
                          <ListEntryComponent listItemText={'Github'} url='https://github.com/bensoer'>
                            <GitHubIcon/>
                          </ListEntryComponent>
                          <ListEntryComponent listItemText={'Technical Blog'}  url='https://blog.bensoer.com' testDomain='blog.bensoer.com'>
                            <BookIcon/>
                          </ListEntryComponent>
                          <ListEntryComponent listItemText={'Medium Blog'} url='https://medium.com/@bensoer'>
                            <BsMedium/>
                          </ListEntryComponent>
                          <ListEntryComponent listItemText={'Wiki'} url='https://wiki.bensoer.com' testDomain='wiki.bensoer.com'>
                            <InfoIcon/>
                          </ListEntryComponent>
                          <ListEntryComponent listItemText={'Photography Portfolio'} url='https://photos.bensoer.com' testDomain='photos.bensoer.com'>
                            <PhotoCameraIcon/>
                          </ListEntryComponent>
                          <ListEntryComponent listItemText={'Mountain Adventure House Wiki'} url='https://mac.projectterris.com' testDomain='mac.projectterris.com'>
                            <ExploreIcon/>
                          </ListEntryComponent>

                          
                          
                        </Stack>
                      </Container>
                      
                    </Grid>
                  </Grid>
                </Stack>
                <Stack marginTop={'30px'} alignItems={{ xs: 'center', md: 'left', lg: 'left'}}>
                  <Typography variant="caption">
                    Copyright © {new Date().getFullYear()}. Ben Soer
                  </Typography>
                  <Typography variant="caption">
                    Made with <FavoriteBorderIcon/> React v18 | MUI v5
                  </Typography>
                </Stack>
                
          </Container>
  );
}

export default App;
