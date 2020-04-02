import React from "react";
import ArtisData from './artisData';
import { Container, Grid, Image, Header, Divider, Card, Icon, Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const PostsList = (props) => {
    const { postsList, usersList, like, photosList } = props;
    return (
        <Container >
            <div className='mt'>
                <Header as='h4'>Posts realizados por nuestros suscriptores</Header>
            </div>
            <Divider />


            <Grid style={{ textAlign: 'center' }}>
                {postsList.length === 0 && <p>No hay Post Disponibles</p>}
                {postsList.map((p, i) => {
                    return (

                        <Grid.Column mobile={16} tablet={8} computer={4} key={i}>
                            <Card style={{ display: 'inline-block', height: '560px' }}>

                                <Card.Content extra>
                                    <h5 style={{ float: 'left', color: 'black' }}><strong>{usersList[i].name}</strong></h5>
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

                                <Image src={photosList[i].url} wrapped ui={false} />

                                <Card.Content extra>
                                    <a style={{ float: 'left' }} onClick={(e) => like(p, i, e)}>
                                        <Icon name='heart' color={p.like} size='large' />
                                    </a>

                                    <ArtisData {...usersList[i]} />


                                    <a style={{ float: 'right' }} >
                                        <Icon name='send' size='large' />
                                    </a>
                                </Card.Content>
                                <Card.Content>
                                    <Card.Header>{p.title}</Card.Header>
                                    <Card.Description>
                                        {p.body}
                                    </Card.Description>
                                </Card.Content>

                            </Card>
                        </Grid.Column>
                    );
                })}
            </Grid>
        </Container>
    );
}

PostsList.propTypes = {
    postsList: PropTypes.array,
    usersList: PropTypes.array, 
    photosList: PropTypes.array, 
    like: PropTypes.string
};

PostsList.defaultProps = {
    postsList: [],
    usersList: [],
    photosList: [],
    like: ''
};

export default PostsList;