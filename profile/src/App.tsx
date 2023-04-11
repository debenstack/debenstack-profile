import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Avatar, Box, Card, CardContent, Container, Grid, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
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

function App() {
  return (
    <Container maxWidth="lg">
      <Stack spacing={2}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                  <Grid item xs={12} zeroMinWidth>
                    <Typography variant='h1' align='center'>
                      Hi! I'm Ben
                    </Typography>
                    
                  </Grid>
                  
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                  <Stack spacing={2}>
                    
                    <Container>
                      <Avatar
                        alt="Ben Soer"
                        src="DSC_5839-1.jpg"
                        sx={{ width: 200, height: 200}}
                      />
                      <List>
                          <ContactEntryComponent listItemText='ben@soernet.ca'>
                            <AlternateEmailIcon/> 
                          </ContactEntryComponent>
                          <ContactEntryComponent listItemText='604.842.2274'>
                            <TagIcon/>
                          </ContactEntryComponent>
                      </List>
                    </Container>
                    

                  </Stack>
              </Grid>
              <Grid item xs={8} zeroMinWidth>
                <Container>
                  <Stack spacing={2}>
                    

                    <Typography >
                      I'm a software developer, musician, photographer and outdoor enthusiast. I like living a life with
                      meaning and building and creating things with meaning. With that, I also like teaching and showing the many things I have 
                      learned along the way with others!
                    </Typography>


                    <Typography variant='h6'>
                      Learn More About Me:
                    </Typography>

                    <ListEntryComponent elevation={1} listItemText={'Github'} >
                      <GitHubIcon/>
                    </ListEntryComponent>
                    <ListEntryComponent elevation={1} listItemText={'LinkedIn'} >
                      <LinkedInIcon/>
                    </ListEntryComponent>
                    <ListEntryComponent elevation={1} listItemText={'Technical Blog'} >
                      <BookIcon/>
                    </ListEntryComponent>
                    <ListEntryComponent elevation={1} listItemText={'Wiki'} >
                      <InfoIcon/>
                    </ListEntryComponent>
                    <ListEntryComponent elevation={1} listItemText={'Photography'} >
                      <PhotoCameraIcon/>
                    </ListEntryComponent>
                    
                  </Stack>
                </Container>
                


                
              </Grid>
            </Grid>
          </Stack>
    </Container>
    
    
  );
}

export default App;
