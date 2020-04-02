import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [activeItem, setActiveItem] = React.useState({name:'Posts'});
    const handleItemClick = (e, { name }) => {
        setActiveItem({ ...activeItem, name: name});
    }
    return (
        <div>
        <Menu pointing secondary>
          <Menu.Item
            name='Posts'
            active={activeItem.name === 'Posts'}
            onClick={handleItemClick} 
            as={Link} to="/"    
          />
          <Menu.Item
            name='Suscriptores'
            active={activeItem.name === 'Suscriptores'}
            onClick={handleItemClick}
            as={Link} to="/subscribers"   
          />
          <Menu.Item
            name='Postear'
            active={activeItem.name === 'Postear'}
            onClick={handleItemClick}
            as={Link} to="/posting" 
          />
        </Menu>
      </div>
    ); 
}
export default Nav;
