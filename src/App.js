import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    list: ["Learn react"]
  };
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  submit = e => {
    e.preventDefault();
    this.setState({
      list: [...this.state.list, this.myRef.current.value]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Work with react ref</h1>
        <h2>Input your dream</h2>
        <form onSubmit={this.submit}>
          <input ref={this.myRef} placeholder="Test data" name="dream" />
          <input type="submit" />
        </form>
        <h2>Your dream list</h2>
        <ul>
          {this.state.list.map(el => {
            return <li>Let come true {el}</li>;
          })}
        </ul>
      </div>
    );
  }
}
