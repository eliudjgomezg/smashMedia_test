import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Dimmer, Grid, Image, Loader, Card, Icon, Dropdown } from 'semantic-ui-react';
import DeletePost from './deletePost'
import { useHistory } from 'react-router-dom';
import Axios from "axios";

const MyPostsList = (props) => {
    const history = useHistory();
    const { store, actions } = useContext(Context);

    const [editPost, setEditPost] = React.useState({ status: false });
    const [loading, setloading] = React.useState({ status: false });

    const showEditForm = (p, i) => {
        actions.dataEditForm(p, i);
        history.push('/editPost');
    }
    const deleteForm = async (data) => {

        try {

            setloading({ ...loading, status: true });
            setEditPost({ ...editPost, status: false });
            const postDeleted = await Axios.delete('https://jsonplaceholder.typicode.com/posts/1');
            actions.setdelete(data);
            setloading({ ...loading, status: false })
            

        } catch (error) {
            setEditPost({ ...editPost, status: true });
            console.log(error)
        }

    }
    const openDeleteForm = () => {
        setEditPost({ ...editPost, status: true });
    }

    const closeDeleteForm = () => {
        setloading({ ...loading, status: false })
    }
    return (
        <>
            <Dimmer inverted className='addLoaderPosition2' active={loading.status}>
                <Loader inverted>Cargando......</Loader>
            </Dimmer>
            <Grid style={{ textAlign: 'center' }}>
                {store.posts.map((p, i) => {
                    return (
                        <>
                            <Dimmer inverted className='addLoaderPosition1' active={editPost.status}>
                                <DeletePost dataPost={p} index={i} closeDeleteForm={closeDeleteForm} deleteForm={deleteForm} />
                            </Dimmer>

                            <Grid.Column mobile={16} tablet={8} computer={4} key={i}>
                                <Card className='navDataPosition' style={{ display: 'inline-block', height: '560px' }}>

                                    <Card.Content extra>
                                        <h5 style={{ float: 'left', color: 'black' }}><strong>{p.name}</strong></h5>
                                        <a style={{ float: 'right' }}>
                                            <Dropdown icon={{ name: 'align justify', color: '', size: 'large' }}>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item text='Reportar' />
                                                    <Dropdown.Item text='Activar notificaciones' />
                                                    <Dropdown.Item text='Compartir en...' />
                                                    <Dropdown.Item text='Rename' />
                                                    <Dropdown.Item text='Silenciar' />
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </a>
                                    </Card.Content>

                                    <Image src={store.photos[i].url} wrapped ui={false} />

                                    <Card.Content extra>
                                        <a style={{ float: 'left' }} onClick={(e) => actions.like(p, i, e)}>
                                            <Icon name='heart' color={p.like} size='large' />
                                        </a>

                                        <a style={{ float: 'right' }} onClick={(e) => openDeleteForm(p, i)}>
                                            <Icon name='trash' size='large' />
                                        </a>
                                        <a style={{ float: 'right' }} onClick={(e) => showEditForm(p, i)}>
                                            <Icon name='edit' size='large' />
                                        </a>
                                    </Card.Content>
                                    <Card.Content>
                                        <Card.Header>{p.title}</Card.Header>
                                        <Card.Description>
                                            {p.post}
                                        </Card.Description>
                                    </Card.Content>

                                </Card>
                            </Grid.Column>
                        </>
                    );
                })}
            </Grid>
        </>
    );
}

export default MyPostsList;