import React, { ReactNode  } from "react";

interface FieldsetProps {
    children?: ReactNode;
}

const Fieldset = ({ children }: FieldsetProps) => {

    return (
        <fieldset className="relative mb-6 mt-3">
            {children}
        </fieldset>
    )
};

export default Fieldset;
