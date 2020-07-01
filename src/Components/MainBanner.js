import React from 'react';
import { Box, Typography, Container, makeStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles(theme => ({
    clickableIcon: {
      '&:hover': {
      opacity: 0.5,
      },
    },
}));

function MainBanner() {

    const classes = useStyles();

    return (
        <Container maxWidth="md">
          <Box pt={15}>
            <Box mb={2}>
              <Typography variant="h2">👋 , I'm</Typography>
              <Typography variant="h1"><strong>Su Min</strong></Typography>
            </Box>
            <Typography variant="h5">I'm an aspiring software engineer and mobile app developer</Typography>
            <Typography variant="h5">with an avid interest in design.</Typography>
            <Box mt={2}>
              <Typography variant="h5" color="secondary">@ Rutgers University - New Brunswick</Typography>
            </Box>
            <Box 
              mt={4} 
              mb={15}
              flexDirection="row"
              display="flex"
              alignItems="flex-start"
            >
              <Box pr={5}>
                <GitHubIcon 
                    className={classes.clickableIcon}
                    fontSize="large" 
                    onClick={event =>  window.location.href='https://github.com/suminkimm'}
                />
              </Box>
              <Box pr={5}>
                <LinkedInIcon 
                    className={classes.clickableIcon}
                    fontSize="large" 
                    onClick={event =>  window.location.href='https://linkedin.com/in/su-min-kim'}
                />
              </Box>  
              {/* <Box pr={5}>
                <DescriptionIcon 
                    className={classes.clickableIcon}
                    fontSize="large" 
                    onClick={event =>  window.location.href='./'}
                />
              </Box>   */}
            </Box>
          </Box>
        </Container>
    )
}

export default MainBanner;