import React from "react";
class Todolist extends React.Component(){

    constructor(props){
        super(props);
        this.state ={
            test:"apple",
        };
    }
    render(){
        return(
            <div>
                {this.state.test}
            </div>
        );
    }
}
export default Todolist;