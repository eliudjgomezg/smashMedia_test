import React, { useContext, useEffect } from "react";
import '../App.css';
import { Context } from "../store/appContext";
import { Header, Divider, Icon, Container } from 'semantic-ui-react';
import {useHistory} from 'react-router-dom';
import MyPostsList from '../components/postingComponents/myPostList'

const Posting = () => {
    let history = useHistory();
    useEffect(() => {
        if (store.photos.length === 0){
            history.push('/')
        }
    }, []);
    
    const { actions, store } = useContext(Context);
    const postForm = () => {
        history.push('/postForm');
    }
   

    return (
        <Container>
            <a className='addButtonPosition' onClick={postForm} >
            <Icon name='add circle' size='huge' />
            </a>
            <div className='mt'>
                <Header as='h4'>Mis Posts</Header>
            </div>
            <Divider />
            <MyPostsList/>
        </Container>
    );
}

export default Posting;