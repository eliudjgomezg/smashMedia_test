import React from 'react';
import { Button, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';


export default function DeletePost(props) {
    const { dataPost, closeDeleteForm, deleteForm } = props;
    
    return (
        <div>
            <Message className='noSpacing'
                attached
                header='Eliminar post'
                content={'Estas segur@que deseas eliminar el post de ' + dataPost.name }
            />
            <Message className='noSpacing'>
                <Button onClick={closeDeleteForm} color='red'>Cancelar</Button>
                <Button onClick={() => {deleteForm(dataPost.post)}} color='blue'>Eliminar</Button>
            </Message>
        </div>
    )
}

DeletePost.propTypes = {
    dataPost: PropTypes.object
};

DeletePost.defaultProps = {
    dataPost: {}
};
