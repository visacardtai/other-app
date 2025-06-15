import React from "react";
import "../style/Form.scss";
import Todo from "./Todo";

class Form extends React.Component {
  state = {
    name: "",
    address: "",
    data: [],
  };

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleChangeAddress = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      data: [
        ...this.state.data,
        { name: this.state.name, address: this.state.address },
      ],
    });
    this.setState({
      name: "",
      address: "",
    });
  };
  render() {
    return (
      <>
        <div>
          <span>Name</span>
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => {
              this.handleChangeName(e);
            }}
          />
        </div>

        <div>
          <span>Address</span>
          <input
            type="text"
            value={this.state.address}
            onChange={(e) => {
              this.handleChangeAddress(e);
            }}
          />
        </div>
        <button className="btn-add" onClick={this.handleClick}>
          Add Todo
        </button>

        <Todo data={this.state.data} />
      </>
    );
  }
}

export default Form;
