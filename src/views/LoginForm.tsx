import React from 'react';
import Fieldset from "../components/Fieldset";
import Button from "../components/Button";



const LoginForm = () => {
    return (
        <div>
            <Fieldset id={"login"} type={"text"} placeholder={"Type in your login"}></Fieldset>
            <Fieldset id={"login"} type={"password"} placeholder={"Type in your password"}></Fieldset>
            <Button></Button>
        </div>
    )

}

export default LoginForm;