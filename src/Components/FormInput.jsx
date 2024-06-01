
import React, { useState } from 'react'
import './FormInput.css'

const FormInput=(props) =>{
    const [focused, setFocused] = useState(false)
    const {label,errorMessage, onChange, id, ...inputProps} = props;
    const handelFocus=(e)=>{
        setFocused(true);
    }
    return ( 
        <div className="formInput">
            <label>{label}</label>
            <input
            {...inputProps} onChange={onChange}
            onBlur={handelFocus} focused={focused.toString()}
            onFocus={() =>
                inputProps.name === "confirmPassword" && setFocused(true)
              }/>
            <span>{errorMessage}</span>
        </div>
     );
};
export default FormInput;