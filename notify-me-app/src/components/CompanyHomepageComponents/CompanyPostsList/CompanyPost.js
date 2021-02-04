import React from 'react'
import { Card, CardHeader, CardContent, CardActions } from "@material-ui/core"
import { Typography, Button, IconButton } from "@material-ui/core"
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { deletePost } from "../../../helpers/databaseRemove";

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
        minHeight: '4em',
        height: '6em',
        whiteSpace: 'wrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    deleteButton: {
        width: 28,
        height: 28,
        marginLeft: '.2em'
    },
    editButton: {
        width: 25,
        height: 25,
        color: '#666'
    },
    detailsButton: {
        padding: '1em'
    },
    avatar: {
        backgroundColor: blue[900],
        width: 50,
        height: 50
    },
}))

function CompanyPost({post}) {
    const classes = useStyles();

    const postDate = new Date(post["created_on"].toDate());
    const postTimestamp = postDate.toLocaleString();

    const deleteCompanyPost = () => {
        deletePost(post["post_id"]);
    }

    return (
        <div className="posts-list-post-container">
            <Card className={classes.root}>
                <CardHeader
                    title={
                        <Typography
                        variant="body1" color="textPrimary"
                        style={{
                            fontSize: '1.2rem',
                            whiteSpace: 'wrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                                {post.title}
                        </Typography>
                    }
                    subheader={<Typography 
                            style={{color: '#888', fontSize: '0.9rem'}} variant="subtitle2">
                            {postTimestamp}
                        </Typography>
                }
                />

                <CardContent className={classes.cardContent}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.content}
                    </Typography>
                </CardContent>
                <br/>                
                <CardActions className={classes.actions}>

                    <Button size="small" color="primary" className={classes.detailsButton}>
                        Details
                    </Button>

                    <div style={{padding: '.6em'}}>
                        <IconButton color="primary" 
                        style={{padding: "0.1em"}}>
                            <BorderColorRoundedIcon
                            className={classes.editButton} />
                        </IconButton>

                        <IconButton color="primary"
                        onClick={() => deleteCompanyPost()}
                        style={{padding: "0.1em"}}>
                            <DeleteRoundedIcon color="secondary" 
                                className={classes.deleteButton}/>
                        </IconButton>
                    </div>

                </CardActions>
            </Card>
        </div>
    )
}

export default CompanyPost
