import React, { Component } from "react";
import Header from "./Header";
import "./intro.css";
import { Grid, Row, Col } from "react-bootstrap";
import Footer from "./Footer";

function DescriptionComponent() {
  return (
    <Grid>
      <Row className="show-grid">
        <Col xs={2} md={2} />
        <Col xs={8} md={8}>
          <h1 class="fsh1 centered marginTop">TAPADKOT?</h1>
          <p class="fsp centered">
            Tu rencontres des difficultés de logement alors que tu viens visiter
            l'Umons? <br />
            Tu quittes ton kot pendant quelques temps et désires le rendre
            disponible lors de tes déplacements?
          </p>
          <h2 class="fsh2 centered"> L'umons a une solution!</h2>
          <p class="fsp centered padbot">
            TAPADKOT, la plateforme de réservation de logement en ligne de
            l'Umons est exactement ce qu'il te faut!
          </p>
        </Col>
        <Col xs={2} md={2} />
      </Row>
    </Grid>
  );
}

class Intro extends Component {
  render() {
    const authenticated = this.props.auth;
    //const history = this.props.history;
    return (
      <React.Fragment>
        <Header auth={authenticated} />
        <img
          class="banner"
          src="http://www.robertviseur.be/news-pic/mons-20100307-panorama-h400.jpg"
          alt="banner"
        />

        <DescriptionComponent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Intro;
