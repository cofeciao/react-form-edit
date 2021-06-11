import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './todoForm.scss'


TodoForm.propTypes = {
    onSubmit: PropTypes.array,
};

TodoForm.defaultProps = {
    onSubmit: null
};

function TodoForm(props) {
    const [value,setValue] = useState();
    const {onSubmit} = props;

    function handleChange(e){
        setValue(e.target.value); 
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newInput = {
            title: value
        }
        onSubmit(newInput);
        setValue('');
    }



    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input placeholder="Please typing here"  onChange={handleChange} type="text" value={value} />
            </form>
        </div>
    );
}

export default TodoForm;