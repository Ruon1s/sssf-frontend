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


    const [variables, setVariables] = useState({
        id: match.params.id,
    });



    const [modifyEntry] = useMutation(MODIFY_ENTRY, {
        variables,
        onCompleted: ({modifyEntry}) => {
            console.log('Modified');
            history.push('/Home');
            window.location.reload();
        },
        onError(error) {
            console.log(error);
        }
    });

    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>Error</h1>;

    return (
        <div className={classes.container}>
            <form className={classes.form}>
                <p className={classes.inputField}>Entry name</p>
                <TextField className={classes.inputField} id="outlined-basic" variant="outlined"
                           placeholder={data.singleEntry.Entryname} value={variables.Entryname} onChange={(e) => {
                    setVariables({...variables, Entryname: e.target.value})
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
                <TextareaAutosize className={classes.inputField} placeholder={data.singleEntry.Ingredients}
                                  id="outlined-basic" variant="outlined" value={variables.Ingredients} onChange={(e) => {
                                      setVariables({...variables, Ingredients: e.target.value});
                }
                }/>
                <p className={classes.inputField}>Steps</p>
                <TextareaAutosize className={classes.inputField} placeholder={data.singleEntry.Steps}
                                  id="outlined-basic" label="Steps" variant="outlined" value={variables.Steps} onChange={(e) => {
                                      setVariables({...variables, Steps: e.target.value});
                }
                }/>
                <div>
                    <span>1</span>
                    <Radio value={1} checked={variables.Rating === 1} onChange={(e) => {
                        setVariables({...variables, Rating: 1});
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
                    }}/>
                    <span>5</span>
                    <Radio value={5} checked={variables.Rating === 5} onChange={(e) => {
                        setVariables({...variables, Rating: 5});
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
