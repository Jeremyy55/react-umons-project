import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "react-bootstrap";
import MyDropZone from "./MyDropZone";
/*import { request, callback, errorCallback } from "https";*/
import request from "superagent";

class NewKot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      adress: "",
      price: "",
      internet: true,
      description: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    var value;
    switch (target.type) {
      case "text":
        value = target.value;
        break;
      case "number":
        value = target.value;
        break;
      case "checkbox":
        value = target.checked;
        break;
      default:
        value = target.value;
    }

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    /*COMMUNICER AVEC DB */
    const string = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      adress: this.state.adress,
      owner: "1"
    };

    fetch("http://172.16.1.187:4000/housing/add", {
      method: "POST",
      /*mode: "cors",*/
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(string)
    });

    event.preventDefault();
  }
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={2} md={2} />
          <Col xs={8} md={8}>
            <h1 class="fsh1 centered marginTop">Add a new Housing</h1>
            <MyDropZone />
            <p class="fsp2 centered marginTop">
              <form onSubmit={this.handleSubmit}>
                <label>
                  Titre :&nbsp;
                  <input
                    name="title"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </label>
                <br />
                <label>
                  Description :&nbsp;
                  <textarea
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </label>
                <br />
                <label>
                  Adress :&nbsp;
                  <textarea
                    name="adress"
                    value={this.state.adress}
                    onChange={this.handleChange}
                  />
                </label>
                <br />
                <label>
                  Internet : &nbsp;
                  <input
                    name="internet"
                    type="checkbox"
                    checked={this.state.internet}
                    onChange={this.handleChange}
                  />
                </label>
                <br />
                <label>
                  Prix : &nbsp;
                  <input
                    name="price"
                    type="number"
                    value={this.state.price}
                    onChange={this.handleChange}
                  />
                </label>
                <br />
                <input type="submit" value="Submit" />
              </form>
            </p>
            <h2 class="fsh2 centered"> Thanks !</h2>
            <p class="fsp centered padbot" />
          </Col>
          <Col xs={2} md={2} />
        </Row>
      </Grid>
    );
  }
}

export default NewKot;
