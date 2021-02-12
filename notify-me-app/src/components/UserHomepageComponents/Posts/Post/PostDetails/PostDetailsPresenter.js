import "../../../styles/style.css";
import React from 'react'
import { Typography, Grid, Button, Card, CardContent, CardHeader, Avatar } from "@material-ui/core";
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import CakeRoundedIcon from '@material-ui/icons/CakeRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import { makeStyles } from "@material-ui/core/styles";
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles({
    detailsCardRoot: {
        background: 'transparent',
        border: 'none',
        margin: '2em 0',
        boxShadow: 'none',
    },
    header: {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: 0,
        marginTop: 0,
        paddingBottom: 0,
        paddingTop: 0
    },
    avatar: {
        backgroundColor: blue[900],
        width: 90,
        height: 90,
        margin: '0 auto',
    },
    avatarImg: {
        display: 'block',
        objectFit: 'contain'
    },
    postCreator: {
        fontSize: '1.5rem',
        fontWeight: '500',
        color: 'whitesmoke'
    },
    postType: {
        fontSize: '1.2rem',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    postTitle: {
        fontSize: '1.7rem',
        fontWeight: '500',
        color: 'whitesmoke'
    },
    postTimestamp: {
        color: '#888',
        fontSize: '1rem',
        fontWeight: 'normal',
    },
    postCities: {
        fontSize: '1.2rem',
        fontWeight: '400',
        color: 'whitesmoke'
    },
    postContent: {
        fontSize: '1rem',
        fontWeight: '300',
        color: 'whitesmoke'
    },
    button: {
        padding: '.5em 0',
        fontSize: '1.1rem'
    }
})

function PostDetailsPresenter({post, postCreator, postTimestamp, postCreatorProfileUrl, handleClose}) {
    const classes = useStyles();

    const defaultAvatar = (
        <Avatar aria-label="recipe" className={classes.avatar}>
            {postCreator}
        </Avatar>
    );

    const profilePicAvatar = (
        <Avatar
            className={classes.avatar}
            classes={{img: classes.avatarImg}}
            src={postCreatorProfileUrl}
        />
    );

    const postTypeColor = (type) => {
        switch (type) {
            case "Warning":
                return "#F50057"
            case "Info":
                return "whitesmoke"
            case "Promo":
                return "#3f51b5"
            default:
                return 'black'
        }
    }

    const postTypeIcon = (type) => {
        switch (type) {
            case "Warning":
                return <WarningRoundedIcon style={{color: "#F50057", marginRight: '.1em'}} />
            case "Info":
                return <InfoRoundedIcon style={{color: "whitesmoke", marginRight: '.1em'}} />
            case "Promo":
                return <CakeRoundedIcon 
                        style={{color: "#3f51b5", marginRight: '.1em', transform: 'translateY(-2px)'}} />
            default:
                return null
        }
    }

    const citiesPostAppliesList = () => {
        let list = ""
        const cities = post["cities_affected"]
        cities.forEach(city => {
            list += (city + ", ")
        })

        list = list.trim();
        list = list.slice(0, list.length - 1);
        list += ".";
        return list;
    }

    return (
        <div className="details-post-container">
            <div className="details-post-dialog">
                <div className="details-post-dialog-container">
                            
                        <Grid item xs={12} sm={12} style={{alignSelf: 'center'}}>
                            <Typography variant="h4">
                                Post Details
                            </Typography>
                        </Grid>


                        <div className="post-details-post-container">
                            <Card className={classes.detailsCardRoot}>
                                
                                <CardHeader className={classes.header}
                                    avatar={
                                        postCreatorProfileUrl.length
                                        ?   profilePicAvatar
                                        :   defaultAvatar
                                    }
                                    title={
                                        <Typography variant="body1" className={classes.postCreator}>
                                            {postCreator}
                                        </Typography>
                                    }
                                    subheader={
                                        <Typography variant="subtitle2" className={classes.postTimestamp}>
                                            {postTimestamp}
                                        </Typography>
                                    }
                                />

                                <CardContent >
                                    <Typography style={{color: postTypeColor(post.type)}}
                                        variant="body1" className={classes.postType}>
                                            {postTypeIcon(post.type)}
                                            {post.type}
                                    </Typography>

                                    <Typography className={classes.postTitle}
                                                variant="body1">
                                                {post.title} 
                                            </Typography>


                                    <Typography variant="body2" className={classes.postCities}>
                                        Cities affected: {citiesPostAppliesList()}
                                    </Typography>

                                    <Typography variant="body2" className={classes.postContent} component="div">
                                        <hr/>
                                        <br/>
                                        <br/>
                                        {post.content}
                                    </Typography>
                                </CardContent>
                            
                            </Card>
                        </div>
                    
                        <Grid container spacing={2} justify="center">
                            
                            <Grid item xs={12}>
                                <Button onClick={() => handleClose()}
                                variant="contained" fullWidth color="default" className={classes.button}>
                                    Close
                                </Button>
                            </Grid>

                        </Grid>

                </div>

            </div>
        </div>
    )
}

export default PostDetailsPresenter
