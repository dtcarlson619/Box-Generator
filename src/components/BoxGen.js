import React, { useState } from 'react';

const Box = ({color}) => {
    const divStyles = {
        backgroundColor: color,
        width: '100px',
        height: '100px',
        display: 'inline-block',
        margin: '10px'
    }
    return <div style={divStyles}></div>
}

const BoxGen = () => {
    const [state, setState] = useState({
        color: "",
        boxes: [],
    })
    const onChangeHandler = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        setState({
            boxes:state.boxes.concat(state.color),
            color:"",
        })
    }
    return (
        <div>
            <h1>Color</h1>
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="color" onChange={onChangeHandler} />
                <input type="submit" value="Add"/>
            </form>
            <div>
                {state.boxes.map((item,i) => (
                    <Box key={i} color={item}/>
                ))}
            </div>
        </div>
    )
}

export default BoxGen;
