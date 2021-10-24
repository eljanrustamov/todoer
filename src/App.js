import "./App.css";
import React from "react";

export default class App extends React.Component {
  // 0
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      textColor: "black",
      borderColor: "white",
      list: [
        {
          id: 1 + Math.random(),
          value: "Your first to do item...",
          textColor: "black",
          borderColor: "red",
        },
      ],
    };
  }

  // #1 function
  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value,
    });

    console.log(this.state);
  }

  // #2 function
  addItem() {
    if (this.state.newItem.length === 0) alert("Write to do thing");
    else {
      // create item with unique id
      const newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice(),
        textColor: this.state.textColor.slice(),
        borderColor: this.state.borderColor.slice(),
      };

      // copy of current list of items
      const list = [...this.state.list];

      // add new item to list
      list.push(newItem);

      // update state with new list and reset newItem input
      this.setState({
        list,
        newItem: "",
        textColor: "black",
        borderColor: "white",
      });
    }
  }

  // #3 function
  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];

    // filter out item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }
  /////////////////////////
  addTextColor(key, value) {
    let color = value?.split("-")[0];

    //undefined almamaq ucun / deyer varsa islesin
    if (color) {
      this.setState({
        [key]: color,
      });
      // console.log(this.state)
    }
  }

  addBorderColor(key, value) {
    let color = value?.split("-")[0];

    if (color) {
      this.setState({
        [key]: color,
      });
      console.log(color);
    }
  }

  // body
  render() {
    return (
      <div className="td-container">
        <div className="bg-image"></div>

        <div className="td-header-container">
          <div className="logo"></div>
          <h1 className="td-header">Create Your To Do List</h1>
        </div>

        <div className="td-body">
          <div className="left_side">
            <div className="ls-add_item">
              <input
                style={{
                  color: `${this.state.textColor}`,
                  borderColor: `${this.state.borderColor}`,
                }}
                className="ls-input"
                type="text"
                placeholder="Type item here..."
                value={this.state.newItem}
                onChange={(e) => this.updateInput("newItem", e.target.value)}
              />

              <button className="ls-btn" onClick={() => this.addItem()}>
                Add
              </button>
            </div>

            <div className="ls-text_colors">
              <h4 className="tc-header">Choose your text color.</h4>
              <div
                className="color-circles"
                onClick={(e) =>
                  this.addTextColor("textColor", e.target.classList[1])
                }
              >
                <div className="circle red-circle"></div>
                <div className="circle blue-circle"></div>
                <div className="circle green-circle"></div>
                <div className="circle white-circle"></div>
                <div className="circle yellow-circle"></div>
              </div>
            </div>

            <div className="ls-border_colors">
              <h4 className="bc-header">Choose your border color.</h4>
              <div
                className="color-squares"
                onClick={(e) =>
                  this.addBorderColor("borderColor", e.target.classList[1])
                }
              >
                <div className="square red-square"></div>
                <div className="square blue-square"></div>
                <div className="square green-square"></div>
                <div className="square yellow-square"></div>
              </div>
            </div>
          </div>

          <div className="right_side">
            <ul className="rs-ul">
              {this.state.list.map((item, i) => (
                <li
                  className="rs-li"
                  key={item.id}
                  style={{
                    color: `${item.textColor}`,
                    borderBottom: `1px solid ${item.borderColor}`,
                  }}
                >
                  {i + 1}. {item.value}
                  <button
                    className="rs-li-btn"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>

            <div
              className="rs-arrow"
              style={
                this.state.list.length > 11
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              Scroll
            </div>
          </div>
        </div>
      </div>
    );
  }
}
