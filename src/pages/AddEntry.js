import React, {useState} from 'react';
import {Button, makeStyles, TextField, TextareaAutosize, FormControl, FormControlLabel, RadioGroup, FormLabel, Radio, withStyles} from '@material-ui/core'
import green from "@material-ui/core/colors/green";
import {ButtonToolbar, ButtonGroup, Form} from "react-bootstrap";
import {ADD_ENTRY, REGISTER_USER} from "../GraphQL/Mutations";
import {useMutation} from "@apollo/client";
import {AUTH_USERID} from "../constants";
import {useHistory} from "react-router";

export const AddEntry = () => {

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



    const classes = useStyles();

    const history = useHistory();

    const [entryName, setEntryName] = useState("");
    const [image, setImage] = useState(null);
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [rating, setRating] = useState(1);

    const date =  Date.now().toString();
    const userID = localStorage.getItem(AUTH_USERID);

    const [addEntry] = useMutation(ADD_ENTRY, {
        variables: {
            Entryname: entryName,
            File: image,
            Ingredients: ingredients,
            Steps: steps,
            Rating: rating,
            Date: date,
            userID: userID
        },
        onCompleted:({addEntry}) => {
            console.log(addEntry);
            history.push('/Home')
            window.location.reload();
        },
        onError(error){
            console.log(error);
        }
    });

    const submitForm = async () => {
        console.log('entryname', entryName);
        console.log('File', image);
        console.log('Ingredients', ingredients);
        console.log('steps', steps);
        console.log('rating', rating);
        console.log('date', date);
        console.log('user_id', userID);

        console.log('submitted');
      await addEntry();
    };



    return(
        <div className={classes.container}>
            <form className={classes.form}>
                <p className={classes.inputField}>Entry name</p>
                <TextField className={classes.inputField} id="outlined-basic" variant="outlined" value={entryName} onChange={(e) => {
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
            <TextareaAutosize className={classes.inputField} id="outlined-basic" variant="outlined" value={ingredients} onChange={(e) => {
                setIngredients(e.target.value);
            }
            }/>
                <p className={classes.inputField}>Steps</p>
            <TextareaAutosize className={classes.inputField} id="outlined-basic" label="Steps" variant="outlined" value={steps} onChange={(e) => {
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
                    submitForm();
                }}>
                    Submit
                </Button>



            </form>
        </div>
);
};
