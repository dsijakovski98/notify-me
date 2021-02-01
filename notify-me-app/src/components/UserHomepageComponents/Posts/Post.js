import React from 'react'
import { Card, CardHeader, CardContent, CardActions } from "@material-ui/core"
import { Avatar, Typography, Button, IconButton } from "@material-ui/core"
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
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
        height: 28
    },
    detailsButton: {
        marginRight: '1em'
    },
    avatar: {
        backgroundColor: blue[900],
    },
}))

function Post({post}) {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);
    const [read, setRead] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

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
        <Typography variant="body2" color="textSecondary" component="p"
         style={{fontWeight: read ? 'normal' : 'bold'}} >
          Post content. Post content. Post content. Post content. Post content.
          Post content. Post content. Post content. Post content. Post content.
          Post content. Post content. Post content. Post content. Post content.
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>

        <IconButton onClick={() => setRead(!read) } color="primary">
            {
                !read
                ? <BookmarkBorderIcon className={classes.readButton}/>
                : <BookmarkIcon className={classes.readButton}/>

            }
        </IconButton>


        <Button size="small" color="primary" className={classes.detailsButton}>
          Details
        </Button>

        

      </CardActions>
    </Card>
        </div>
    )
}

export default Post
