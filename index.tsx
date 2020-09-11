import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import MeuInput from "./MeuInput";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <p>Start editing to see some magic happen :)</p>
        <MeuInput
          valor="valor inicial do input"
          mudou={e => this.setState({ name: e })}
        />
        <p>
          <Hello name={this.state.name} />
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
