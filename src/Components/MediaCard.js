import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      width: 390,
    },
    media: {
      height: 400,
    },
});

function MediaCard({title, body, image}) {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                View Code
                </Button>
            </CardActions>
        </Card>
    )
}

export default MediaCard