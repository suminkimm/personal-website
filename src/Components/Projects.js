import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import MediaCard from './MediaCard';
import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss';

function Projects() {

    const [isOpen, setIsOpen] = React.useState(false);
    const [videoId, setVideoId] = React.useState("");

    const modalOpen = (isOpen, videoId) => {
        setIsOpen(isOpen)
        setVideoId(videoId)
    }

    const projectsArray = [
        {
            title: "SocialTracker",
            body: "A React Native mobile app that allows the user to monitor his/her social time and social circle.",
            image: "socialTrackerMainPic",
            codeURL: "https://github.com/suminkimm/socialTrackerPublicApp",
            isVideo: true,
            demo: "890lO-UDxJA"
        }, 
        {
            title: "Bloom",
            body: "A Swift mobile application that lets you classify a flower by taking its picture and test your flower knowledge.",
            image: "Bloom",
            codeURL: "https://github.com/suminkimm/Bloom",
            isVideo: true,
            demo: "pHk3TvWhmfA"
        },
        {
            title: "The Recipe Book",
            body: "A PHP web app that allows users to create and share their favorite recipes with an online community.",
            image: "RecipeBook",
            codeURL: "https://github.com/suminkimm/TheRecipeBook",
            isVideo: false,
            demo: "http://suminkimm.com/TheRecipeBook/index.php"
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
                                var codeURL = projectsArray[index].codeURL;
                                var isVideo = projectsArray[index].isVideo;
                                var demo = projectsArray[index].demo;
                                return (
                                    <Grid key={index} item>
                                        <MediaCard 
                                            title={title} 
                                            body={body} 
                                            image={image} 
                                            codeURL={codeURL} 
                                            isVideo={isVideo}
                                            demo={demo}
                                            modalOpen={modalOpen}
                                        />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId={videoId} onClose={() => setIsOpen(false)} />
        </Container>
    )
}

export default Projects;