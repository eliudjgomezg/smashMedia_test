import React, { useContext, useEffect } from "react";
import '../App.css';
import { Context } from "../store/appContext";
import { Header, Divider, Table, Container } from 'semantic-ui-react';
import {useHistory} from 'react-router-dom';

const Subscribers = () => {
    const history = useHistory();
    const { actions, store } = useContext(Context);

    useEffect(() => {
        if (store.subscribers.length === 0){
            history.push('/')
        }
    }, []);

    return (
        <Container>
            <div className='mt'>
                <Header as='h4'>Nuestros suscriptores</Header>
            </div>
            <Divider />

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>webSite</Table.HeaderCell>
                        <Table.HeaderCell>Telefono</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    
                        {store.subscribers.map((s, i) => {
                            return (
                                <>
                                <Table.Row>
                                <Table.Cell>{s.name}</Table.Cell>
                                <Table.Cell>{s.email}</Table.Cell>
                                <Table.Cell>{s.website}</Table.Cell>
                                <Table.Cell>{s.phone}</Table.Cell>
                                </Table.Row>
                                </>
                            );
                    })}
                    
                </Table.Body>
            </Table>
        </Container>
    );
}

export default Subscribers;