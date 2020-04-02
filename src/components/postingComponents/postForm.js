import React, { useContext } from "react";
import '../../App.css';
import { Context } from "../../store/appContext";
import { Segment, Dimmer, Loader, Button, Form, Container, Header, Divider } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const PostForm = () => {
    let history = useHistory();
    const { actions, store } = useContext(Context);
    const { register, errors, handleSubmit, reset, clearError } = useForm();
    const [loading, setloading] = React.useState({status:false});
    const onSubmit = async (data, e) => {

        try {

            setloading({...loading, status:true});
            const createPost = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                name: data.name,
                title: data.title,
                post: data.post,
                like: ''
            });
            actions.setPost(createPost.data);
            e.target.reset();
            setloading({...loading, status:false});
            history.push('/posting');
            
        } catch (error) {
            console.log(error)
        }

    }
    const dissmisEditForm = () => {

        clearError();
        history.push('/posting')

    }
    return (
        <>
                <Dimmer inverted className='addLoaderPosition'active={loading.status}>
                    <Loader inverted>Cargando......</Loader>
                </Dimmer>
            <Container style = {{position:'relative', zIndex: '1'}}>
                <div className='mt'>
                    <Header as='h4'>Agrega los datos del post</Header>
                </div>
                <Divider />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Field>
                        <label>Nombre</label>
                        <input name='name' ref={
                            register({
                                required: { value: true, message: 'Campo Obligatorio' },
                                maxLength: { value: 20, message: 'Maximo 70 Caracteres' },
                            })
                        } />
                        <spam style={{ color: '#DC004E' }}>
                            {errors?.name?.message}
                        </spam>
                    </Form.Field>

                    <Form.Field>
                        <label>Titulo</label>
                        <input name='title' ref={
                            register({
                                required: { value: true, message: 'Campo Obligatorio' },
                                maxLength: { value: 20, message: 'Maximo 120 Caracteres' },
                            })
                        } />
                        <spam style={{ color: '#DC004E' }}>
                            {errors?.title?.message}
                        </spam>
                    </Form.Field>

                    <Form.Field>
                        <label>Post</label>
                        <textarea name='post' row='10' ref={
                            register({
                                required: { value: true, message: 'Campo Obligatorio' },
                                maxLength: { value: 20, message: 'Maximo 500 Caracteres' },
                            })
                        } />
                        <spam style={{ color: '#DC004E' }}>
                            {errors?.post?.message}
                        </spam>
                    </Form.Field>
                    <Button type='reset' onClick={dissmisEditForm}>Cancelar</Button>
                    <Button type='submit'>Enviar</Button>
                </Form>
            </Container>
        </>
    );
}

export default PostForm;