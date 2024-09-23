import React, {useState} from "react";

interface FieldsetProps {
    id: string;
    type: string;
    placeholder: string;
}

const Fieldset = ({id, type, placeholder} : FieldsetProps) => {

    const [value, setValue] = useState('')
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }

    return (
        <fieldset>
            <label htmlFor={id}>
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
            </label>
        </fieldset>
    )
}

export default Fieldset;