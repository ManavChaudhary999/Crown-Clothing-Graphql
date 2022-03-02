import React from "react";
import "./form-input.styles.scss";

const FormInput = ({label, handleChange, ...otherProps}) =>(
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {
            label?
            (
                // Shrinking label if length of value of input is 1 or more
                <label className={`form-input-label ${otherProps.value.length ? "shrink" : ""}`}>{label}</label>
            )
            :
            null
        }
    </div>
);

export default FormInput;