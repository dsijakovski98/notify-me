import React from 'react'
import { Grid, TextField, Button, Typography, CircularProgress } from "@material-ui/core";
import ChipInput from 'material-ui-chip-input';
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const postTypes = [
    "Warning", // Defekt
    "Info", // Opshto izvestuvanje
    "Promo", // Promocija
];

const useStyles = makeStyles({
    button: {
        padding: '.5em 0',
        fontSize: '1rem'
    }
})

function CompanyPostEditPresenter
({formData, updatePost, cancelUpdatePost, handleBranchAdd, handleBranchRemove, progressBar}) {
    const classes = useStyles();

    return (
        <div className="edit-post-container">
            <div className="edit-post-dialog">
                <div className="edit-post-dialog-container">

                    <Grid container spacing={2} alignItems="flex-end" justify="flex-start">
                        
                        <Grid item xs={12} sm={12} style={{alignSelf: 'center'}}>
                            <Typography variant="h4">
                                Edit Post
                            </Typography>
                            <br/>
                        </Grid>


                        {/* POST TYPES SELECT */}
                        <Grid item xs={8} sm={3}>
                            <FormControl>
                                <InputLabel htmlFor="genders">Post type</InputLabel>
                                <Select margin="dense" variant="standard" id="post_type"
                                value={formData.postType}
                                onChange={(e) => formData.setPostType(e.target.value)}
                                style={{color: '#f5f5f5', padding: '0.5em 0.8em'}}>

                                    {
                                        postTypes.map(type => {
                                            return (
                                                <MenuItem key={type} value={type}>
                                                    {type}
                                                </MenuItem>
                                            )
                                        })
                                    }

                                </Select>
                            </FormControl>
                        </Grid>  

                        {/* CITIES POST APPLIES TO */}
                        <Grid item xs={8} sm={6}>
                            <>
                                <ChipInput
                                    fullWidth
                                    allowDuplicates={false}
                                    error={formData.citiesPostAppliesErr.length ? true : false}
                                    helperText={formData.citiesPostAppliesErr}
                                    value={formData.citiesPostApplies}
                                    placeholder="Cities post applies to  -  ⤵  to add"
                                    onAdd={(city) => handleBranchAdd(city)}
                                    onDelete={
                                        (city, index) => handleBranchRemove(city, index)
                                    }
                                />
                            </>
                        </Grid> 
                        
                        {/* POST TITLE */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                variant="standard"
                                required
                                fullWidth
                                type="text"
                                label="Title"
                                error={formData.postTitleErr.length ? true : false}
                                helperText={formData.postTitleErr}
                                value={formData.postTitle}
                                onChange={(e) => formData.setPostTitle(e.target.value)}
                            />
                        </Grid>
                        
                        <Grid item xs={false} sm={6}></Grid>
                        
                        {/* POST CONTENT */}
                        <Grid item xs={12} sm={12}>

                                <TextField 
                                variant="outlined"
                                placeholder="Content"
                                multiline
                                rows={6}
                                rowsMax={8}
                                fullWidth
                                error={formData.postContentErr.length ? true : false}
                                helperText={formData.postContentErr}
                                value={formData.postContent}
                                onChange={(e) => formData.setPostContent(e.target.value)}
                                />

                        </Grid>

                    </Grid>


                    {
                    progressBar
                    ?   <CircularProgress className="edit-post-progress-bar"
                        style={{width: 60, height: 60}} />
                    :   <><br/><br/></>
                    
                    }
                    
                    <div className="login-form-submit">
                        <Grid container spacing={2} justify="center">
                            
                            <Grid item xs={12} sm={6}>
                                <Button 
                                onClick={() => cancelUpdatePost()}
                                variant="contained" fullWidth color="default"
                                className={classes.button}>
                                    Cancel
                                </Button>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Button 
                                onClick={() => updatePost()}
                                variant="contained" fullWidth color="primary"
                                className={classes.button}>
                                    Edit
                                </Button>
                            </Grid>

                        </Grid>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default CompanyPostEditPresenter
