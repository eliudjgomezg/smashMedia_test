import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Button, Form, Container, Header, Divider, Dimmer, Loader } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const EditPost = () => {
    const history = useHistory();
    const { actions, store } = useContext(Context);
    
    // Funciones Generales
    const [loading, setloading] = React.useState({ status: false });
    // React Hook Form Functions
    const { register, errors, handleSubmit, clearError } = useForm();
    const onSubmit = async (data, e) => {
        
        try {

            setloading({ ...loading, status: true });
            const editedPost = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
                name: data.name,
                title: data.title,
                post: data.post,
                like: ''
            });
            actions.setPut(editedPost.data);
            e.target.reset();
            setloading({ ...loading, status: false });
            history.push('/posting')

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
            <Dimmer inverted className='addLoaderPosition' active={loading.status}>
                <Loader inverted>Cargando......</Loader>
            </Dimmer>
            <Container>
                <div className='mt'>
                    <Header as='h4'>Edita tu post</Header>
                </div>
                <Divider />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Field>
                        <label>Nombre</label>
                        <input name='name' value={store.post.name} ref={
                            register({
                                required: { value: true, message: 'Campo Obligatorio' },
                                maxLength: { value: 20, message: 'Maximo 70 Caracteres' },
                            })
                        }
                            onChange={(e) => actions.handleChange(e)}
                        />
                        <spam style={{ color: '#DC004E' }}>
                            {errors?.name?.message}
                        </spam>
                    </Form.Field>

                    <Form.Field>
                        <label>Titulo</label>
                        <input name='title' value={store.post.title} ref={
                            register({
                                required: { value: true, message: 'Campo Obligatorio' },
                                maxLength: { value: 20, message: 'Maximo 120 Caracteres' },
                            })
                        }
                            onChange={(e) => actions.handleChange(e)}
                        />
                        <spam style={{ color: '#DC004E' }}>
                            {errors?.title?.message}
                        </spam>
                    </Form.Field>

                    <Form.Field>
                        <label>Post</label>
                        <textarea name='post' value={store.post.post} row='10' ref={
                            register({
                                required: { value: true, message: 'Campo Obligatorio' },
                                maxLength: { value: 20, message: 'Maximo 500 Caracteres' },
                            })
                        }
                            onChange={(e) => actions.handleChange(e)}
                        />
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

export default EditPost;