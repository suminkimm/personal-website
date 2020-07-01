import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import MediaCard from './MediaCard';


function Projects() {

    const projectsArray = [
        {
            title: "socialTracker",
            body: "A React Native mobile app that allows the user to monitor his/her social time and social circle.",
            image: ""
        }, 
        {
            title: "TBD",
            body: "An iOS mobile app...",
            image: ""
        },
        {
            title: "The Recipe Book",
            body: "A PHP web app that allows users to create and share their favorite recipes with an online community.",
            image: ""
        }
    ]

    return (
        <Container maxWidth="md">
            <Typography variant="h3">Projects</Typography>
            <Box mt={5} mb={15}>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justify="space-between" spacing={5}>
                            {projectsArray.map((value, index) => {
                                var title = projectsArray[index].title;
                                var body = projectsArray[index].body;
                                var image = projectsArray[index].image;
                                return (
                                    <Grid key={index} item>
                                        <MediaCard title={title} body={body} image={image} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Projects;