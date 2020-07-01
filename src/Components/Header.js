
import React from 'react';
import { AppBar, Toolbar, Button, Grid, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    hyperlinks: {
        fontSize: 20, 
        textDecoration: "none", 
        color: "black", 
        paddingTop: 10, 
    },
    rightHyperlinks: {
        fontSize: 20, 
        textDecoration: "none", 
        color: "black", 
        paddingTop: 10, 
        paddingLeft: 15
    }
}); 


function Header() {

    const classes = useStyles();

    return (
        <AppBar position="sticky" color="clear" elevation={0}>
            <Container maxWidth="lg">
                <Toolbar>
                    <Grid
                        justify="space-between" // Add it here :)
                        container 
                        spacing={24}
                    >
                        {/* <Button style={{fontSize: 20}} size="large"><strong>SU MIN KIM</strong></Button> */}
                        <a href="App.js#Main" className={classes.hyperlinks}><strong>SU MIN KIM</strong></a>
                        <Grid item>
                            <a href="App.js#Projects" className={classes.hyperlinks}>Projects</a>
                            <a href="App.js#About" className={classes.rightHyperlinks}>About</a>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;