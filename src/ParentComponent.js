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
 greetParent(str){
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
             
                {/* <ChildComponent greetHandler={this.greetParent} name="ravi"></ChildComponent> */}
               <MemoComp></MemoComp>
                <RegularComponent></RegularComponent>
            </div>
        );
    }
}

export default ParentComponent;