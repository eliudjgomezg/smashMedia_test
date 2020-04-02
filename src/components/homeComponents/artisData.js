import React, { Component } from 'react'
import { Button, Icon, Header, List, Modal, Accordion, Form, Comment } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

const ArtisData = (props) => {
    let history = useHistory();
    const { name, username, email, website, phone, address, company } = props;
    const [open, setOpen] = React.useState(false);

    const panels1 = [
        {
            key: 'Geo',
            title: 'Geo',
            content: {
              content: (
                <div>
                  <p className='noSpacing'>
                    Latitud: {address.geo.lat}
                   
                  </p>
                  <p className='noSpacing'>
                  Longitud: {address.geo.lng}
                  </p>
                  
                </div>
              ),
            },
          },
        
      ]

      const panels2 = [
        {
            key: 'En lo que nos destacamos',
            title: 'En lo que nos destacamos',
            content: {
              content: (
                <div>
                  <p className='noSpacing'>
                    Somos: {company.catchPhrase}
                   
                  </p>
                  <p className='noSpacing'>
                  Especialistas en : {company.bs}
                  </p>
                  
                </div>
              ),
            },
          },
      ]
      const close = () => history.push('/');;
      
    return (
        <Modal trigger={<a style={{ float: 'left' }}>
            <Icon name='address card' size='large' />
        </a>}>
            
            <Modal.Header>Datos del artista</Modal.Header>
            <Modal.Content image>

                <Modal.Description style={{ marginLeft: '50px' }}>
                    <Comment.Group>
                        <Header as='h3' dividing>
                            {name}
                        </Header>

                        <Comment>
                            <List divided relaxed>
                                <List.Item>
                                    <List.Icon name='star' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Nombre artistico</List.Header>
                                        <List.Description as='a'>{username}</List.Description>
                                    </List.Content>
                                </List.Item>

                                <List.Item>
                                    <List.Icon name='mail' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Email</List.Header>
                                        <List.Description as='a'>{email}</List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='home' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Direccion</List.Header>
                                        <List.Description as='a'>Calle: {address.street}</List.Description>
                                        <List.Description as='a'>Habitacion: {address.suite}</List.Description>
                                        <List.Description as='a'>Ciudad: {address.city}</List.Description>
                                        <List.Description as='a'>Codigo de area: {address.zipcode}</List.Description>
                                        <List.Description as='a'><Accordion  panels={panels1} /></List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='phone' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Telefono</List.Header>
                                        <List.Description as='a'>{phone}</List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='world' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>website</List.Header>
                                        <List.Description as='a'>{website}</List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='industry' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Compañia</List.Header>
                                        <List.Description as='a'>{company.name}</List.Description>
                                        <List.Description as='a'><Accordion  panels={panels2} /></List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>

                        </Comment>
                    </Comment.Group>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
}

ArtisData.propTypes = {
    name: PropTypes.string,
    username: PropTypes.string, 
    email: PropTypes.string, 
    website: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.object,
    company: PropTypes.object
};

ArtisData.defaultProps = {
    name: '',
    username: '', 
    email: '', 
    website: '',
    phone: '',
    address: {},
    company: {}
};
export default ArtisData;