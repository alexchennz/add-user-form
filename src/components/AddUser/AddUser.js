import classes from './AddUser.module.css';
import Card from "../UI/Card/Card";
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal/ErrorModal';
import Button from '../UI/Button/Button';

const AddUser = (props) => {
    const [userInput, setUserInput] = useState(props.initialData);
    const [hasError, setError] = useState(false);
    const [errorContent, setErrorContent] = useState("");
    const submitHandler = (event) => {
        event.preventDefault();
        if(!userInput.username || !userInput.age ){
            if(!userInput.username && !userInput.age){
                setErrorContent("Please enter a valid name and age (non-empty values)");
                setError(true);
            }
            else if(!userInput.username){
                setErrorContent("Please enter a valid name");
                setError(true);
            } 
            else if(!userInput.age){
                setErrorContent("Please enter a valid age (non-empty values)");
                setError(true);
            }
            else if(+userInput.age < 0){
                setErrorContent("Age must be above 1");
                setError(true);
            }
            return;
        }
        else{
            const newUser = {
                ...userInput,
                id: Math.random().toString()
            }
            props.onSaveUser(newUser);
            setUserInput(
                {
                    "username": "",
                    "age": ""
                }
            );
        }
        
    }
    const inputChangeHandler = (input, value) => {
        setUserInput((prev)=>{
            return {
                ...prev,
                [input]: value
            }
        });
    }

    const removeModalHandler = () => {
        setError(false);
    }

    return (
        <div>
            {hasError && <ErrorModal heading="Invalid Input" content={errorContent} removeModal={removeModalHandler}/>}
            
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" 
                    onChange={event => inputChangeHandler('username', event.target.value)} 
                    value={userInput["username"]}
                    name='username' id='username' />
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" 
                    onChange={event => inputChangeHandler("age", event.target.value)}
                    value={userInput["age"]}
                    name='age' id='age' />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
            
        </div>
    )
}

export default AddUser;