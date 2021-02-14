import "../../../styles/style.css"
import React from 'react'
import { Grid, Typography, Card, CardHeader, CardContent, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from '@material-ui/core/colors';
import moment from "moment";
import { dateFormat } from "../../../../../helpers/validators";

const useStyles = makeStyles({
    detailsCardRoot: {
        background: 'transparent',
        border: 'none',
        margin: '2em 0',
        boxShadow: 'none',
    },
    header: {
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
    companyName: {
        fontSize: '1.8rem',
        fontWeight: '500',
        color: 'whitesmoke',
        padding: 0,
        marginBottom: 0,
        lineHeight: '2.2rem'
    },
    companyCeo: {
        fontSize: '1.2rem',
        fontWeight: '400',
        color: 'whitesmoke',
        paddingBottom: 0,
        marginBottom: 0,
        lineHeight: '1.4rem'
    },
    companyTimestamp: {
        fontSize: '1rem',
        fontWeight: 'normal',
        color: 'whitesmoke',
        paddingBottom: 0,
        marginBottom: 0,
    },
    companyService: {
        fontSize: '1.1rem',
        fontWeight: '300',
        color: 'whitesmoke'
    },
    companyHeadquarters: {
        fontSize: '1.1rem',
        fontWeight: '300',
        color: 'whitesmoke'
    },
    
    postCities: {
        fontSize: '1.1rem',
        fontWeight: '300',
        color: 'whitesmoke'
    },
    postContent: {
        fontSize: '1.1rem',
        fontWeight: '300',
        color: 'whitesmoke'
    },
    button: {
        padding: '.5em 0',
        fontSize: '1.1rem'
    }
})

function CompanyDetailsModalPresenter({company, handleClose}) {
    console.log(company);

    const classes = useStyles();
    const companyTimestamp = moment(company["date_of_creation"].toDate()).format(dateFormat);

    const defaultAvatar = (
        <Avatar aria-label="recipe" className={classes.avatar}>
            <Typography variant="h3">
                {company.name[0]}
            </Typography>
        </Avatar>
    );

    const profilePicAvatar = (
        <Avatar
            className={classes.avatar}
            classes={{img: classes.avatarImg}}
            src={company["profile_url"]}
        />
    );

    const branchesList = () => {
        let list = ""
        const cities = company.branches
        cities.forEach(city => {
            list += (city + ", ")
        })

        list = list.trim();
        list = list.slice(0, list.length - 1);
        return list;
    }
    
    const mail = "mailto: " + company.email;
    const link =    company.website === "Not Provided" 
                    ? company.website
                    :   <a style={{color: '#547CA6'}} href={`https://${company.website}`}>
                            {company.website}
                        </a>

    return (
        <div className="details-company-container">
            <div className="details-company-dialog">
                <div className="details-company-dialog-container">

                    <Grid item xs={12} sm={12} style={{alignSelf: 'center'}}>
                        <Typography variant="h4">
                            Company Details
                        </Typography>
                    </Grid>
                    <div className="post-details-post-container">
                            <Card className={classes.detailsCardRoot}>
                                
                                <CardHeader className={classes.header}
                                    avatar={
                                        company["profile_url"].length
                                        ?   profilePicAvatar
                                        :   defaultAvatar
                                    }
                                    title={
                                        <>
                                            <Typography variant="caption" className={classes.companyName}>
                                                {company.name}
                                            </Typography>
                                            <Typography variant="body1" className={classes.companyCeo}>
                                                CEO: {company["ceo_first"] + " " + company["ceo_last"]}
                                            </Typography>
                                            <Typography variant="body1" className={classes.companyTimestamp}>
                                                Founded: {companyTimestamp}   
                                            </Typography>
                                        </>
                                    }
                                />
                                <br/>
                                <hr/>
                                <CardContent >
                                <Typography variant="h5" 
                                style={{color: 'whitesmoke', marginBottom: '.5em'}}>
                                        General information
                                    </Typography>

                                    <Typography className={classes.companyService} variant="body1">
                                        Service type: {company.service}
                                    </Typography>
                                    
                                    <Typography variant="body2" className={classes.companyHeadquarters}>
                                        Headquarters: {company["city_head"]}
                                    </Typography>

                                    <Typography variant="body2" className={classes.postCities}>
                                        Branches: {branchesList()}
                                    </Typography>

                                    <br/>

                                    <hr/>
                                    
                                    <br/>
                                    
                                    <Typography variant="h5" style={{color: 'whitesmoke', marginBottom: '.5em'}} component="div">
                                        Contact information
                                    </Typography>


                                    <Typography variant="body2" className={classes.postContent} component="div">
                                        Email: <a style={{color: '#547CA6'}} href={mail}>{company.email}</a>
                                    </Typography>

                                    <Typography variant="body2" className={classes.postContent} component="div">
                                        Website: {link}
                                    </Typography>

                                    <Typography variant="body2" className={classes.postContent} component="div">
                                        Phone number: {company["phone_number"]}
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

export default CompanyDetailsModalPresenter
