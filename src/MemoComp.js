import React from 'react';

function MemoComp(props) {
    console.log("****************** Rendering Memo Component ***************")
    return (
        <div>
            Memo
        </div>
    );
}

// export default React.memo(MemoComp) ;
export default React.memo (MemoComp) ;