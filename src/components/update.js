import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

const UpdateForm = () =>{
    const location = useLocation();
    const navigate = useNavigate();
    console.log('loc ',location.state);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setId] = useState();
    useEffect(()=>{
        axios.get('https://630c327183986f74a7bb189a.mockapi.io/api/v1/crud-data/'+location.state.id).then((response)=>{
            console.log('edit resp ',response.data);
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setCheckbox(response.data.checkbox);
            setId(response.data.id);
        })
    })
    let checkboxText;
    if(checkbox){
        checkboxText = <Checkbox label='I agree to the Terms and Conditions' checked />;
    } else{
        checkboxText = <Checkbox label='I agree to the Terms and Conditions' />;
    }
    const submitUpdateData = (e)=>{
        let userId = e.target.getAttribute('data-userid');
        axios.put('https://630c327183986f74a7bb189a.mockapi.io/api/v1/crud-data/'+userId, {
            firstName,
            lastName,
            checkbox
        }).then((updateResp)=>{
            /*console.log('updateResp ',updateResp);*/
            if(updateResp.status == 200){
                navigate('/read');
            }
        })
    }
    return (
        <Form className="create-form">
            <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' value={firstName} />
            </Form.Field>
            <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' value={lastName} />
            </Form.Field>
            <Form.Field>
            {checkboxText}
            </Form.Field>
            <Button onClick={submitUpdateData} data-userid={id} type='submit'>Submit</Button>
        </Form>
    )
}

export default UpdateForm;