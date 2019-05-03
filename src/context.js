import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_GENERATE_TAG_FORM":
      return {
        ...state,
        forms: [action.payload, ...state.forms]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    forms: [
      {
        id: "",
        keywords: "",
        location: ""
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
