import React, { Component } from "react";
import { Segment, Form, Button, Input, TextArea } from "semantic-ui-react";

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

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  generateTags = () => {
    const splittedKeyWords = this.state.keywords.split(",");

    let altText = splittedKeyWords.map(tags => {
      return this.capitalize(tags).trim() + " — in " + this.state.location + " \n";
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

  render() {
    console.log(this.generateTags());
    return (
      <Segment>
        <Form onSubmit={e => this.handleGenerateTags(e)}>
          <Form.Field
            control={Input}
            required="required"
            name="keywords"
            placeholder="Keywords"
            value={this.state.keywords}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Input}
            name="location"
            required="required"
            placeholder="Location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <Form.Field
            control={TextArea}
            style={{ minHeight: 150 }}
            placeholder="Result"
            defaultValue={this.state.altTags}
            readonly=""
          />
          <Form.Field control={Button}>Generate </Form.Field>
        </Form>
      </Segment>
    );
  }
}

export default AltTagForm;
