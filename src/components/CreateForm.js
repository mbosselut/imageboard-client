import React from 'react';

const CreateForm = props => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input
                    value={props.values.title}
                    name="title"
                    onChange={props.onChange}
                    placeholder="title"
                />
                <input
                    value={props.values.url}
                    name="url"
                    onChange={props.onChange}
                    placeholder="url"
                />
                <button type="submit"> Create new image </button>
            </form>
        </div>
    );
};

export default CreateForm;
