import React from "react";
import "./Footer.css";
import { Grid, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div class="phantom">
      <div class="footer">
        <Grid>
          <Row>
            <Col xs={4} md={4}>
              <p> la seconde </p>
            </Col>
            <Col xs={4} md={4}>
              <p>la seconde</p>
            </Col>
            <Col xs={4} md={4}>
              <p> la 4ème </p>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
