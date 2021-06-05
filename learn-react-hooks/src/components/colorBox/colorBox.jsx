import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { useStore } from 'react-redux';

// ColorBox.propTypes = {
    
// };

function theRandomColor () {
    const arrColor = ['black','gray','yellow','red','deepblue'];
    const random = Math.trunc(Math.random() * arrColor.length);
    return arrColor[random];
}

function ColorBox() {

const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box_color') || 'deeppink';
    return initColor;
});

function useRandomColor () {
    const newColor = theRandomColor()
    setColor(newColor);
    localStorage.setItem('box_color', newColor)
}


    return (
        <div className="color-box" onClick={useRandomColor} style={{backgroundColor: color}}>
            Hello, Welcome to Learn React Hooks
        </div>
    );
}

export default ColorBox;