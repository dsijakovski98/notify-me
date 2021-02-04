import React from 'react'
import { Card, CardHeader, CardContent, CardActions } from "@material-ui/core"
import { Avatar, Typography, Button, IconButton } from "@material-ui/core"
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        height: '100%',
        borderRadius: '0'
    },
    actions: {
        justifyContent: 'space-between',
        padding: '0.3em 0.1em'
    },
    cardContent: {
        height: '10em',
        whiteSpace: 'wrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
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

const maxContentLength = 150;

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
                        <Typography style={{fontWeight: post.read ? 'normal' : 'bold'}} variant="body1">
                            {postCreator}
                        </Typography>
                    }
                    subheader={<Typography 
                            style={{fontWeight: post.read ? 'normal' : 'bold', color: '#888'}} variant="subtitle2">
                            {postTimestamp}
                        </Typography>
                }
                />

                <CardContent className={classes.cardContent}>
                    <Typography variant="body1" color="textPrimary"
                        style={{fontWeight: post.read ? 'normal' : 'bold', fontSize: '1.2rem'}} >
                        {post.title.slice(0, 40)}
                    </Typography>
                    
                    <Typography variant="body2" color="textSecondary" component="p"
                    style={{
                            fontWeight: post.read ? 'normal' : 'bold',
                        }} >
                        {
                            post.content.slice(0, maxContentLength) + 
                            (post.content.length > maxContentLength ? "..." : "")
                        }
                    </Typography>
                </CardContent>
                
                <CardActions className={classes.actions}>

                    <div style={{padding: '.6em'}}>
                        <IconButton onClick={() => toggleReadPost() } color="primary" 
                        style={{padding: "0.1em"}}>
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
