import React from "react";
import "../style/Todo.scss";

class Todo extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <>
        {data.map((item, index) => {
          return (
            <div className="todo">
              <div className="sp-name">Name: {item.name}</div>
              <div className="sp-address">Address: {item.address}</div>
              <div className="sp-btn">
                <button type="button" className="btn">
                  Edit
                </button>
                <button type="button" className="btn">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Todo;
