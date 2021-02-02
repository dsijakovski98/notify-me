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
    },
    actions: {
        justifyContent: 'space-between',
        padding: '0.3em 0.1em'
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
        height: 50
    },
}))

function Post({post}) {
    const classes = useStyles();

    const [read, setRead] = React.useState(false);
    const [stared, setStared] = React.useState(false);

    return (
        <div className="posts-list-post-container">
            <Card className={classes.root}>
                <CardHeader
                    avatar={<Avatar aria-label="recipe" className={classes.avatar}>R</Avatar>}
                    // SETTINGS BUTTON
                    // action={
                    //   <IconButton aria-label="settings">
                    //     <MoreVertIcon />
                    //   </IconButton>
                    // }
                    title={<Typography style={{fontWeight: read ? 'normal' : 'bold'}} variant="title">
                        Company title
                        </Typography>
                    }
                    subheader={<Typography 
                            style={{fontWeight: read ? 'normal' : 'bold', color: '#888'}} variant="subtitle2">
                            Timestamp of post
                        </Typography>
                }
                />

                <CardContent>
                    <Typography variant="body1" color="textPrimary"
                        style={{fontWeight: read ? 'normal' : 'bold', fontSize: '1.2rem'}} >
                        Post title
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p"
                    style={{fontWeight: read ? 'normal' : 'bold'}} >
                    Post content. Post content. Post content. Post content. Post content.
                    Post content. Post content. Post content. Post content. Post content.
                    Post content. Post content. Post content. Post content. Post content.
                    </Typography>
                </CardContent>
                
                <CardActions className={classes.actions}>

                    <div style={{padding: '.6em'}}>
                        <IconButton onClick={() => setRead(!read) } color="primary" 
                        style={{padding: "0.1em"}}>
                            {
                                read
                                ? <BookmarkBorderIcon className={classes.readButton}/>
                                : <BookmarkIcon className={classes.readButton}/>
                            }
                        </IconButton>

                        <IconButton onClick={() => setStared(!stared) } color="primary" 
                        style={{padding: "0.1em"}}>
                            {
                                stared
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

export default Post
