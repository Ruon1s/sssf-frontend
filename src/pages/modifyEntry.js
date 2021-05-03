import React, {useState} from 'react';
import {useHistory} from "react-router";
import {useMutation, useQuery} from "@apollo/client";
import {SINGLE_ENTRY} from "../GraphQL/Queries";
import {MODIFY_ENTRY} from "../GraphQL/Mutations";
import {Button, makeStyles, Radio, TextareaAutosize, TextField} from "@material-ui/core";


const useStyles = makeStyles({
    container: {
        flex: 1,
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: "center",
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        padding: 30,
        alignItems: 'center'
    },

    form: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: 10
    },
    inputField: {
        width: '25%',
        flexDirection: 'column',
        display: 'flex',
        flexGrow: 1,
        marginBottom: '0px',
        padding: '6px',
    }
});

export const ModifyEntry = ({match}) => {
    const classes = useStyles();
    const history = useHistory();
    console.log(match.params.id);

    const {loading, error, data} = useQuery(SINGLE_ENTRY, {
        variables: {
            id: match.params.id
        }
    });




    const [entryName, setEntryName] = useState('');
    const [image, setImage] = useState(null);
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [rating, setRating] = useState(null);

    const [modifyEntry] = useMutation(MODIFY_ENTRY, {
        variables: {
            id: match.params.id,
            File: image,
            Entryname: entryName,
            Ingredients: ingredients,
            Steps: steps,
            Rating: rating
        },
        onCompleted: ({modifyEntry}) => {
            console.log('Modified');
            history.push('/Home');
            window.location.reload();
        },
        onError(error){
            console.log(error);
        }
    });

    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>Error</h1>;

    return(
        <div className={classes.container}>
            <form className={classes.form}>
                <p className={classes.inputField}>Entry name</p>
                <TextField className={classes.inputField} id="outlined-basic" variant="outlined" placeholder={data.singleEntry.Entryname} value={entryName} onChange={(e) => {
                    setEntryName(e.target.value);
                }
                }/>
                <input
                    accept="image/*"
                    id="raised-button-file"
                    type="file"
                    onChange={(e) => {
                        setImage(e.target.files[0]);
                        console.log(image);
                    }
                    }
                />
                <p className={classes.inputField}>Ingredients</p>
                <TextareaAutosize className={classes.inputField} placeholder={data.singleEntry.Ingredients} id="outlined-basic" variant="outlined" value={ingredients} onChange={(e) => {
                    setIngredients(e.target.value);
                }
                }/>
                <p className={classes.inputField}>Steps</p>
                <TextareaAutosize className={classes.inputField} placeholder={data.singleEntry.Steps} id="outlined-basic" label="Steps" variant="outlined" value={steps} onChange={(e) => {
                    setSteps(e.target.value);
                }
                }/>
                <div>
                    <span>1</span>
                    <Radio value={1} checked={rating === 1} onChange={(e) => {
                        setRating(1);
                        console.log(image);
                    }}/>
                    <span>2</span>
                    <Radio value={2} checked={rating === 2} onChange={(e) => {
                        setRating(2);
                    }}/>
                    <span>3</span>
                    <Radio value={3} checked={rating === 3}  onChange={(e) => {
                        setRating(3);
                    }}/>
                    <span>4</span>
                    <Radio value={4} checked={rating === 4} onChange={(e) => {
                        setRating(4);
                    }}/>
                    <span>5</span>
                    <Radio value={5} checked={rating === 5} onChange={(e) => {
                        setRating(5);
                    }}/>
                </div>
                <Button className={classes.inputField} variant="outlined" color="secondary" onClick={(e) => {
                    modifyEntry();
                }}>
                    Submit
                </Button>



            </form>
        </div>

    );
};
