
import "./App.css";
import React from "react";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { taskName: '', tasks: []};
    }
    
    myTaskChangeHandler = (event) => {
        this.setState({ taskName: event.target.value });
        // console.log('myTaskChangeHandler', this.state.taskName);
    };

    addTask = () => {
        // console.log('addTask', this.state.taskName);
        this.state.tasks.push(this.state.taskName);
        this.setState({ taskName: ''});
    };

    render() {
        return(
            <div className="App">
                <header className="App-header">
                    TODO LIST
                    <br>
                    </br>
                    <div className="aligned">
                    <img
                        src='./assets/4115237_add_plus_icon.png'
                        alt='Add Task' 
                        width='50px'
                        style={{ cursor: 'pointer'}}
                        onClick={() => this.addTask()}
                        title="bấm để thêm!"
                    />
                    <input 
                        type="text" 
                        value={this.state.taskName}
                        onChange={this.myTaskChangeHandler} 
                    />
                </div>
                <ul>
                    {this.state.tasks.map((value, index) => {
                        return <li key={index}>{value}</li>;
                    })}
                </ul>
                </header> 
            </div>
            );
            }
}

export default App;
