import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Avatar, Card, CardContent, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';

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
            <Grid container spacing={2}>
              <Grid item xs={4} zeroMinWidth>
                <Avatar
                  alt="Ben Soer"
                  src="DSC_5839-1.jpg"
                  sx={{ width: 200, height: 200, margin: 'auto'}}
                />
              </Grid>
              <Grid item xs={8} zeroMinWidth>
                <Paper elevation={1}>
                  <Typography align='center'>
                    Im a software developer, musician, photographer, outdoor enthusiast and a pretty philosophical guy. I like living a life with
                    meaning and building and creating things with meaning. With that, I also like teaching and showing the many things I have 
                    learned along the way with others!
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText>
                        Github
                      </ListItemText>
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Stack>
    </Container>
    
    
  );
}

export default App;
