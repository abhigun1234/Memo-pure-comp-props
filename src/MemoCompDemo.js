import React from 'react';

function MemoCompDemo(props) {
    console.log("Memo component")
    return (
        <div>
            
        </div>
    );
}

export default React.memo(MemoCompDemo);