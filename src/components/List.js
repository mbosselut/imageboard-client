import React from 'react';
import CreateFormContainer from './CreateFormContainer';
import LoginFormContainer from './LoginFormContainer';

const List = props => {
    const user = props.user;
    return (
        <div>
            {user ? <CreateFormContainer /> : <LoginFormContainer />}

            {props.images.map((image, index) => {
                return (
                    <div key={index}>
                        <h3>{image.title}</h3>
                        <img
                            alt=""
                            src={image.url}
                            style={{ width: '500px' }}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default List;
