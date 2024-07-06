import React, { Component, PureComponent } from 'react';

class Pure extends PureComponent {
    render() {
        console.log("************** PureComponent Comp render *********************")
        return (
            <div>
                Pure component
            </div>
        );
    }
}

export default Pure;