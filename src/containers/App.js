import React, { PureComponent } from "react";
import { connect } from "react-redux";

import peopleActions from "../redux/people/actions";

const { fetchPeople } = peopleActions;

class App extends PureComponent {
  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchPeople }
)(App);
