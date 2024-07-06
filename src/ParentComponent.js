import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import Pure from './Pure';
import RegularComponent from './RegularComponent';
import MemoComp from './MemoComp';
import RegularFunctionComp from './RegularFunctionComp';
import MemoCompDemo from './MemoCompDemo';

class ParentComponent extends Component {
    constructor(){
        super()
        this.state={parentName:'parent'}
        this.greetParent=this.greetParent.bind(this)
    }
 greetParent(){
    //alert(str)
    console.log("hello")
    alert("parent method called")
 }
 componentDidMount(){
    setInterval(()=>{
        this.setState({name:'abhishek'})
    })
 }
    render() {
        return (
            <div>
                {/* <ChildComponent greetHandler={this.greetParent}></ChildComponent> */}
                {/* <Pure></Pure>
                <RegularComponent></RegularComponent> */}
                {/* <RegularFunctionComp></RegularFunctionComp>
                <MemoCompDemo></MemoCompDemo> */}
                {/* <MemoComp></MemoComp>  */}
                <ChildComponent greetHandler={this.greetParent} name="ravi"></ChildComponent>
            </div>
        );
    }
}

export default ParentComponent;