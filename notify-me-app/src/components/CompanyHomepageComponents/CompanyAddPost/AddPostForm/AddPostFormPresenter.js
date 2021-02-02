import React from 'react'
import { Grid, TextField, Button, Typography, TextareaAutosize  } from "@material-ui/core";
import ChipInput from 'material-ui-chip-input';
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const postTypes = [
    "Warning", // Defekt
    "Info", // Opshto izvestuvanje
    "Promo", // Promocija
];


const useStyles = makeStyles({
    textArea: {
        width: '100%',
        background: '#23242b',
        borderColor: '#111',
        borderWidth: '0.122em',
        borderRadius: '.2em',
        padding: '1em',
        fontFamily: 'Roboto',
        fontSize: '1rem',
        color: 'whitesmoke',
        '&:focus': {
            outline: '#3fffb3'
        }
    },
    button: {
        padding: '.5em 0',
        fontSize: '1rem'
    }
})

function AddPostFormPresenter(props) {
    const {
        formData,
        createPost,
        canclePost,
        handleBranchAdd,
        handleBranchRemove
    } = props;
    const classes = useStyles();

    return (
        <div className="add-post-form-container">
            <div className="add-post-form-dialog">
                <div className="add-post-form-dialog-container">

                    <Grid container spacing={2} alignItems="flex-end" justify="flex-start">
                        
                        <Grid item xs={12} sm={12} style={{alignSelf: 'center'}}>
                            <Typography variant="h4">
                                New post
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
                                    // dataSource={defaultCities}
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
                                label="Title"
                                type="text"
                                value={formData.postTitle}
                                onChange={(e) => formData.setPostTitle(e.target.value)}
                            />
                        </Grid>
                        
                        <Grid item xs={false} sm={6}></Grid>
                        
                        {/* POST CONTENT */}
                        <Grid item xs={12} sm={12}>
                                <TextareaAutosize className={classes.textArea}
                                placeholder="Content"
                                value={formData.postContent}
                                onChange={(e) => formData.setPostContent(e.target.value)}
                                rowsMin={8} />
                        </Grid>

                    </Grid>
                    <br/>
                        <div className="login-form-submit">
                            <Grid container spacing={2} justify="center">
                               
                                <Grid item xs={12} sm={6}>
                                    <Button onClick={() => canclePost()}
                                    variant="contained" fullWidth color="default"
                                    className={classes.button}>
                                        Cancel
                                    </Button>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Button onClick={() => createPost()}
                                    variant="contained" fullWidth color="primary"
                                    className={classes.button}>
                                        Create
                                    </Button>
                                </Grid>

                            </Grid>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AddPostFormPresenter
