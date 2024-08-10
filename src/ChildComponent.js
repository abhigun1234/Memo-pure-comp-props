import React from 'react';

function ChildComponent(props) {
    // console.log("props data",props)
    return (
        <div>
            {/* <button onClick={props.greetHandler("daata")}>click</button> */}
            <button onClick={()=>props.greetHandler("ravi")}>send data</button>
        </div>
    );
}

export default ChildComponent;