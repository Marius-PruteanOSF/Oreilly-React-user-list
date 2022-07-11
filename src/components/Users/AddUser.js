import { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

import styles from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername]= useState('');
    const [enteredAge, setEnteredAge]= useState('');
    const [errorModal, setErrorModal]= useState();
    // instead of useState we can use useRef
    const nameInputRef = useRef();
    const ageInputRef = useRef();
 

    const addUserhandler = (e) => {
        e.preventDefault();
        //using Ref and replace in the conditions bellow 
        // const enteredName = nameInputRef.current.value;
        // const enteredYear = ageInputRef.current.value;
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            console.log('modal');
            setErrorModal({
                title: 'Invalid input', 
                message: 'Please enter a User name',
            });
            return
            // return <ErrorModal handleModal={errorModal}/>
        }
        if (+enteredAge < 5) {
            setErrorModal({
                title: 'Invalid input', 
                message: 'Please enter a valid age',
            });
            return
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    }

    const onClosingModal = () => {
        setErrorModal(null);
    }

    return (
        <Wrapper>
            {errorModal && <ErrorModal title={errorModal.title} message={errorModal.message} closeModal={onClosingModal} />}
            <Card addedClassName={styles.input}>
                <form onSubmit={addUserhandler}>
                    <label htmlFor='username'>Username</label>
                    <input 
                        id='username'
                        type="text"
                        placeholder='Enter Name'
                        onChange={usernameChangeHandler}
                        value={enteredUsername}
                    />
                    <label htmlFor='age'>Age (Years)</label>
                    <input 
                        id='age'
                        type="number"
                        min="1"
                        max="111"
                        onChange={ageChangeHandler}
                        value={enteredAge}
                    />
                    <Button type={'submit'}>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;