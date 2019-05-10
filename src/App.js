import React, { Component } from "react";
import { Button, Container } from "semantic-ui-react";
import "./App.css";
import AltTagList from "./components/AltTagList";
import { Provider, Consumer } from "./context";
import Footer from "./components/Footer";

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
              <Container
                style={{
                  display: "flex",
                  minHeight: "100vh",
                  flexDirection: "column",
                  justifyContent: "flex-start"
                }}
              >
                <h1 style={styles}>Alt Tag Generator V2</h1>
                <Button onClick={() => this.handleCreateForm(dispatch)}>
                  Add
                </Button>
                <AltTagList />
              </Container>
            );
          }}
        </Consumer>
        <Footer />
      </Provider>
    );
  }
}

const styles = {
  margin: "25px 0",
  color: "#FF9800"
};

export default App;
