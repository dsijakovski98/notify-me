import React from 'react'
import { Card, CardHeader, CardContent, CardActions } from "@material-ui/core"
import { Typography, Button, IconButton } from "@material-ui/core"
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import CakeRoundedIcon from '@material-ui/icons/CakeRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { deletePost } from "../../../helpers/databaseRemove";
import moment from "moment";
import { dateTimeFormat } from "../../../helpers/validators";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        height: '100%',
        borderRadius: '0.2em'
    },
    actions: {
        justifyContent: 'space-between',
        padding: '0.3em 0.1em'
    },
    cardContent: {
        minHeight: '4em',
        height: '10em',
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
}));

const maxContentLength = 180;


function CompanyPost({post}) {
    const classes = useStyles();

    const postDate = new Date(post["created_on"].toDate());
    const postTimestamp = moment(postDate).format(dateTimeFormat);

    const deleteCompanyPost = () => {
        deletePost(post["post_id"]);
    }

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
                return <WarningRoundedIcon style={{color: "#F50057", marginRight: '.1em'}} />
            case "Info":
                return <InfoRoundedIcon style={{color: "#2F303A", marginRight: '.1em'}} />
            case "Promo":
                return <CakeRoundedIcon style={{color: "#3f51b5", marginRight: '.1em'}} />
            default:
                return null
        }
    }

    return (
        <div className="posts-list-post-container">
            <Card className={classes.root}>
                
                <CardHeader
                    title={
                        <>
                    <Typography variant="body1"
                        
                        style={{
                            color: postTypeColor(post.type),
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            marginBottom: '.5em'}}>
                        {postTypeIcon(post.type)}
                        {post.type}
                    </Typography>
                    <div style={{
                        width: '10em',
                    }}>

                        <Typography 
                            variant="body1" color="textPrimary"
                            maxLines="1"
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: '500',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            }}>
                            {post.title}
                        </Typography>
                    </div>

                    </>
                    }
                    subheader={<Typography variant="subtitle2"
                            style={{color: '#888', fontSize: '0.9rem', fontWeight: 'normal'}}>
                            {postTimestamp}
                            <hr/>
                        </Typography>
                }
                />

                <CardContent className={classes.cardContent}>
                
                    <Typography variant="body2" color="textSecondary" component="p">
                        {
                            post.content.slice(0, maxContentLength) + 
                            (post.content.length > maxContentLength ? "..." : "")
                        }
                    </Typography>
                </CardContent>
                <hr/>
                <CardActions className={classes.actions} >

                    <Button size="small" color="primary" className={classes.detailsButton}>
                        Details
                    </Button>

                    <div style={{padding: '.3em'}}>
                        <IconButton color="primary" 
                        style={{padding: "0.2em"}}>
                            <BorderColorRoundedIcon
                            className={classes.editButton} />
                        </IconButton>

                        <IconButton color="primary"
                        onClick={() => deleteCompanyPost()}
                        style={{padding: "0.2em"}}>
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
