import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>
             <form>
              <div>
               <input type='text' placeholder='enter your name' name='name'></input>

              </div>

             </form>
            </div>
        );
    }
}

export default Post;