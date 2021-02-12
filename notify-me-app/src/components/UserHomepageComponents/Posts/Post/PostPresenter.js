import React from 'react'
import { Card, CardHeader, CardContent, CardActions } from "@material-ui/core"
import { Avatar, Typography, Button, IconButton } from "@material-ui/core"
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import CakeRoundedIcon from '@material-ui/icons/CakeRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        height: '100%',
        borderRadius: '0.2em',
    },
    actions: {
        justifyContent: 'space-between',
        padding: '0.3em 0.1em'
    },
    cardContent: {
        height: '14em',
        whiteSpace: 'wrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    readButton: {
        width: 28,
        height: 28,
    },
    starButton: {
        width: 28,
        height: 28,
        color: '#E9BA1E'
    },
    detailsButton: {
        marginRight: '1em'
    },
    avatar: {
        backgroundColor: blue[900],
        width: 50,
        height: 50,
        margin: '0 auto',
    },
    avatarImg: {
        display: 'block',
        objectFit: 'contain'
      },
}));

const maxContentLength = 180;

function PostPresenter(props) {
    const classes = useStyles();

    const {
        post,
        postTimestamp,
        postCreator,
        postCreatorProfileUrl,
        toggleReadPost,
        toggleStarPost
    } = props;

    const postTypeColor = (type) => {
        switch (type) {
            case "Warning":
                return "#F50057"
            case "Info":
                return "#2F303A"
            case "Promo":
                return "#3f51b5"
            default:
                return 'black'
        }
    }

    const postTypeIcon = (type) => {
        switch (type) {
            case "Warning":
                return <WarningRoundedIcon 
                style={{color: "#F50057", marginRight: '.1em', width: 20, height: 20}} />
            case "Info":
                return <InfoRoundedIcon 
                style={{color: "#2F303A", marginRight: '.1em', width: 20, height: 20}} />
            case "Promo":
                return <CakeRoundedIcon 
                style={{color: "#3f51b5", marginRight: '.1em', width: 20, height: 20}} />
            default:
                return null
        }
    }

    const defaultAvatar = (
        <Avatar aria-label="recipe" className={classes.avatar}>
            {postCreator[0]}
        </Avatar>
    );

    const profilePicAvatar = (
        <Avatar
            className={classes.avatar}
            classes={{img: classes.avatarImg}}
            src={postCreatorProfileUrl}
        />
    )

    return (
        <div className="posts-list-post-container">
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        postCreatorProfileUrl.length
                        ?   profilePicAvatar
                        :   defaultAvatar
                    }
                    // SETTINGS BUTTON
                    // action={
                    //   <IconButton aria-label="settings">
                    //     <MoreVertIcon />
                    //   </IconButton>
                    // }
                    title={
                        <Typography style={{fontWeight:'bold'}} variant="body1">
                            {postCreator}
                        </Typography>
                    }
                    subheader={<Typography 
                            style={{fontWeight: 'normal', color: '#888'}} variant="subtitle2">
                            {postTimestamp}
                             <hr/>
                        </Typography>
                }
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="body1" 
                            style={{
                                color: postTypeColor(post.type),
                                fontSize: '.95rem',
                                fontWeight: post.read ? 'normal' : 'bold',
                                cursor: 'default',
                                display: 'flex'}}>

                            {postTypeIcon(post.type)}
                            {post.type}

                    </Typography>

                    <div style={{width: '15em'}}>
                        <Typography variant="body1" color="textPrimary"
                            style={{
                                fontWeight: post.read ? 'normal' : 'bold',
                                fontSize: '1.2rem',
                                lineHeight: '1.5em',
                                marginBottom: '.5em',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',}} >

                            {post.title}

                        </Typography>
                    </div>
                
                    <Typography variant="body2" color="textSecondary" component="p"
                    style={{fontWeight: post.read ? 'normal' : 'bold'}} >
                        {
                            post.content.slice(0, maxContentLength) + 
                            (post.content.length > maxContentLength ? "..." : "")
                        }
                    </Typography>
                </CardContent>
                
                <hr/>

                <CardActions className={classes.actions}>
                    <div>
                        <IconButton onClick={() => toggleReadPost() } color="primary" 
                        style={{padding: "0.1em", margin: '0.5em'}}>
                            {
                                post.read
                                ? <BookmarkBorderIcon className={classes.readButton}/>
                                : <BookmarkIcon className={classes.readButton}/>
                            }
                        </IconButton>

                        <IconButton onClick={() => toggleStarPost() } color="primary" 
                        style={{padding: "0.1em"}}>
                            {
                                post.starred
                                ? <StarRoundedIcon className={classes.starButton}/>
                                : <StarOutlineRoundedIcon className={classes.starButton}/>
                            }
                        </IconButton>
                    </div>

                    <Button size="small" color="primary" className={classes.detailsButton}>
                        Details
                    </Button>

                    

                </CardActions>
            </Card>
        </div>
    )
}

export default PostPresenter
