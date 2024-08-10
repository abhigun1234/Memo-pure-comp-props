import React, { Component } from 'react';

class PostData extends Component {
    constructor(props){
        super(props)
        this.state={userId:'',title:'',body:''}

    }
    changeHandler=(e)=>{
        console.log("e",e.target.value)
        this.setState({[e.target.name]:e.target.value})

    }
    submitHandler=e=>{

        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                <div>
                    <label>Enter user Id</label>
                    <input type="text" name="userId" onChange={this.changeHandler}></input>
                </div>
                <div>
                <label>Enter title</label>
                    <input type="text" name="title"></input>
                </div>
                <div>
                <label>Enter body</label>
                    <input type="text" name="body"></input>
                </div>
                    <button>Submit</button>
                </form>
        </div>
        );
    }
}

export default PostData;