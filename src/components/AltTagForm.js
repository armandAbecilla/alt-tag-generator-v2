import React, { Component } from "react";
import { Segment, Form, Button, Input, TextArea } from "semantic-ui-react";
import { Consumer } from "../context";

class AltTagForm extends Component {
  state = {
    keywords: this.props.altTagData.keywords,
    location: this.props.altTagData.location,
    altTags: []
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  generateTags = () => {
    const splittedKeyWords = this.state.keywords.split(",");

    let altText = splittedKeyWords.map(tags => {
      return (
        this.capitalize(tags.trim()) + " — in " + this.capitalize(this.state.location) + " \n"
      );
    });

    return altText.join("");
  };

  handleGenerateTags = e => {
    e.preventDefault();

    const { keywords, location } = this.state;

    this.setState({
      keywords: keywords,
      location: location,
      altTags: this.generateTags()
    });
  };

  handleDelete = (e, id, dispatch) => {
    e.preventDefault();
    dispatch({
      type: "DELETE_GENERATE_TAG_FORM",
      payload: id
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <Segment>
              <Form onSubmit={e => this.handleGenerateTags(e)}>
                <Form.Field
                  control={Input}
                  required={true}
                  name="keywords"
                  placeholder="Keywords"
                  value={this.state.keywords}
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Input}
                  name="location"
                  required={true}
                  placeholder="Location"
                  value={this.state.location}
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={TextArea}
                  style={{ minHeight: 150 }}
                  placeholder="Result"
                  defaultValue={this.state.altTags}
                  readOnly
                />

                <Button
                  color="green"
                  type="submit"
                  icon="circle outline"
                  content="Generate"
                />

                <Button
                  style={{ float: "right" }}
                  icon="trash"
                  color="red"
                  onClick={e => this.handleDelete(e, this.props.id, dispatch)}
                />
              </Form>
            </Segment>
          );
        }}
      </Consumer>
    );
  }
}

export default AltTagForm;