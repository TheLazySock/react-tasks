import React from 'react';

//Test functional component's render with props. It's has no any logic.
const FuncComp = ({componentName}) => {
    return (
        <div id="test-component">
            <h1>{`Hello world with ${componentName} component!`}</h1>
        </div>
    )
}

export default FuncComp;