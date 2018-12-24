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
              <h1>Liens utiles</h1>
              <ul>
                <li>
                  <a>Comment ça marche</a>
                </li>
                <li>
                  <a>Foire aux questions</a>
                </li>
                <li>
                  <a>Nous contacter</a>
                </li>
              </ul>
            </Col>
            <Col xs={4} md={4}>
              <h1>À propos</h1>
              <ul>
                <li>
                  <a>Qui sommes-nous?</a>
                </li>
                <li>
                  <a>Nos partenaires</a>
                </li>
              </ul>
            </Col>
            <Col xs={4} md={4}>
              <h1>Légal</h1>
              <ul>
                <li>
                  <a>Conditions générales</a>
                </li>
                <li>
                  <a>Mentions légales</a>
                </li>
                <li>
                  <a>Protections des données</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <a href="https://jeremyy55.github.io/react-umons-project/">
              <img
                src={window.location.origin + "/img/GitHub-Mark-32px.png"}
                alt="Github"
              />
            </a>
            <a href="#" />
            <img
              src={window.location.origin + "/img/Facebook-42px.png"}
              alt="facebook"
            />
          </Row>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
