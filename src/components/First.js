import React from "react";

class First extends React.Component {

    state = {
        name: 'tai',
        age: 24
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleClick = () => {
        alert("haha");
    }
    render() {
        return (
            <>
                <input type='text' value={this.state.name} onChange={(e) => { this.handleChange(e) }} />
                <div>
                    {this.state.name}
                </div>
                <div>
                    {this.state.age}
                </div>
                <button onClick={this.handleClick}>Click Me</button>
            </>
        )
    };
}

export default First;