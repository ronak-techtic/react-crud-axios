import React, {useEffect, useState} from 'react';
import {Icon, Label, Menu, Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ReadForm = ()=>{
    const [APIData, setAPIData] = useState([]);
    useEffect(()=>{
        axios.get('https://630c327183986f74a7bb189a.mockapi.io/api/v1/crud-data/').then((response)=>{
            setAPIData(response.data);
        })
    },[])
    const deleteUser = ()=>{

    }

    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Checked</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {APIData.map((data)=>{
                    return(
                        <Table.Row>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'checked' : 'Unchecked'}</Table.Cell>
                            <Table.Cell>
                              <Link
                                to={"/update"}
                                state={{id: data.id}}>
                                <Icon name='edit' size='large' />
                              </Link>
                            </Table.Cell>
                            <Table.Cell>
                                <a href='javascript:void(0)' onClick={deleteUser} ><Icon name='user delete' size='large' /></a>
                            </Table.Cell>
                        </Table.Row>                        
                    )    
                })}
            </Table.Body>
        </Table>
    )
}

export default ReadForm;