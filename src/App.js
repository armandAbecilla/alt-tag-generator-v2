import React, { Component } from "react";
import { Button, Container } from "semantic-ui-react";
import "./App.css";
import AltTagList from "./components/AltTagList";
import { Provider, Consumer } from "./context";

import uuid from "uuid";

class App extends Component {
  handleCreateForm = dispatch => {
    const newTagForm = {
      id: uuid(),
      keywords: "",
      location: ""
    };

    dispatch({
      type: "CREATE_GENERATE_TAG_FORM",
      payload: newTagForm
    });
  };

  render() {
    return (
      <Provider>
        <Consumer>
          {value => {
            const { dispatch } = value;
            return (
              <Container>
                <h1 style={styles}>Alt Tag Generator V2</h1>
                <Button onClick={() => this.handleCreateForm(dispatch)}>
                  Add
                </Button>
                <AltTagList />
              </Container>
            );
          }}
        </Consumer>
      </Provider>
    );
  }
}

const styles = {
  margin: "25px 0",
  color: "#FF9800"
};

export default App;
