import React, {useState} from 'react';
import {Button, makeStyles, TextField, TextareaAutosize, Radio} from '@material-ui/core'
import {ADD_ENTRY} from "../GraphQL/Mutations";
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

    const date = Date.now().toString();
    const userID = localStorage.getItem(AUTH_USERID);
    const [variables, setVariables] = useState({Date: date, userID: userID});
    const [addEntry] = useMutation(ADD_ENTRY, {
        variables,
        onCompleted: ({addEntry}) => {
            console.log(addEntry);
            history.push('/Home');
            window.location.reload();
        },
        onError(error) {
            console.log(error);
        }
    });

    const submitForm = async () => {
        setVariables({...variables, userID: userID, Date: date});
        console.log('submitted');
        console.log('variables', variables);
        await addEntry();
    };


    return (
        <div className={classes.container}>
            <form className={classes.form}>
                <p className={classes.inputField}>Entry name</p>
                <TextField className={classes.inputField} id="outlined-basic" variant="outlined" value={variables.Entryname}
                           onChange={(e) => {
                               setVariables({...variables, Entryname: e.target.value});
                           }
                           }/>
                <input
                    accept="image/*"
                    id="raised-button-file"
                    type="file"
                    onChange={(e) => {
                        setVariables({...variables, File: e.target.files[0]});
                    }
                    }
                />
                <p className={classes.inputField}>Ingredients</p>
                <TextareaAutosize className={classes.inputField} id="outlined-basic" variant="outlined"
                                  value={variables.Ingredients} onChange={(e) => {
                    setVariables({...variables, Ingredients: e.target.value});

                }
                }/>
                <p className={classes.inputField}>Steps</p>
                <TextareaAutosize className={classes.inputField} id="outlined-basic" label="Steps" variant="outlined"
                                  value={variables.Steps} onChange={(e) => {
                    setVariables({...variables, Steps: e.target.value});
                }
                }/>
                <div>
                    <span>1</span>
                    <Radio value={1} checked={variables.Rating === 1} onChange={(e) => {
                        setVariables({...variables, Rating: 1});
                        console.log(image);
                    }}/>
                    <span>2</span>
                    <Radio value={2} checked={variables.Rating === 2} onChange={(e) => {
                        setVariables({...variables, Rating: 2});
                    }}/>
                    <span>3</span>
                    <Radio value={3} checked={variables.Rating === 3} onChange={(e) => {
                        setVariables({...variables, Rating: 3});
                    }}/>
                    <span>4</span>
                    <Radio value={4} checked={variables.Rating === 4} onChange={(e) => {
                        setVariables({...variables, Rating: 4});
                    }

                    }/>
                    <span>5</span>
                    <Radio value={5} checked={variables.Rating === 5} onChange={(e) => {
                        setVariables({...variables, Rating: 5});
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
