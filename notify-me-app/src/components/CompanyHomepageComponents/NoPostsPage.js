import React from 'react'
import AddPost from "./CompanyAddPost/AddPost";
import { Typography } from "@material-ui/core"
import PanToolRoundedIcon from '@material-ui/icons/PanToolRounded';


function NoPostsPage({currentCompanyData}) {
    return (
        <>
            <div className="company-homepage-no-posts-container">
                <PanToolRoundedIcon 
                style={{width: 100, height: 100, color: "whitesmoke", marginRight: '2em'}}/>

                <div className="company-homepage-no-posts-message" >
                    <Typography variant="h3" align="center" >
                        You have not made any posts!
                    </Typography>
                    <br/>
                    <Typography variant="h6" align="center" style={{color: '#ccc'}} >
                        Lets change that. Click on the bottom right button to create a post!
                    </Typography>
                </div>
            </div>

            <AddPost currentCompanyData={currentCompanyData}/>
        </>
    )
}

export default NoPostsPage
