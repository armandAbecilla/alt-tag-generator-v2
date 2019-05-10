import React, { Component } from "react";
import AltTagForm from "./AltTagForm";
import { Consumer } from "../context";
class AltTagList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { forms } = value;
          return (
            <React.Fragment>
              <h4>Alt tag generator (Separate each Keyword by comma)</h4>
              {forms.map(form => (
                <AltTagForm key={form.id} id={form.id} altTagData={form} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default AltTagList;
