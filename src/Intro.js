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
          <h1 class="fs350 centered marginTop">TAPADKOT?</h1>
          <h2 class="fs200 centered"> L'umons a une solution!</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, in ius labitur percipit praesent, in
            offendit necessitatibus cum. Utinam voluptatum posidonium eam cu.
            Pro cu nusquam atomorum, denique definitionem et sed. At ius case
            recteque intellegam, sea illum tamquam an, impedit nominati duo cu.
            Mundi solet inermis ad eam, vivendo delectus cu mea. Erant iudicabit
            disputando eu mel, pro ignota prompta insolens te. Ea fierent
            perfecto per, euismod oporteat mediocritatem his te.
          </p>
        </Col>
      </Row>
    </Grid>
  );
}

class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
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
