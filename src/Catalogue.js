import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Grid,
  Row,
  Col,
  Thumbnail,
  Carousel,
  ListGroup,
  ListGroupItem,
  PageHeader
} from "react-bootstrap";
import "react-bootstrap";
import carousel from "./carousel.png";
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

/*handleClick(){
  
};*/

const catalogue = [
  {
    title: "kot 1",
    description: "très bel appartement",
    price: "444",
    adresse: "rue de la houille numéro 54",
    owner: 1
  },
  {
    title: "kot 2",
    description: "très bel appartement",
    price: "444",
    adresse: "rue de la houille numéro 54",
    owner: 1
  }
];

const images = [{ path: carousel }, { path: carousel }];

const Catalogue = ({}) => (
  <p>
    <PageHeader>Catalogue</PageHeader>

    <Grid>
      <Row>
        <Col xs={8}>
          <ListGroup>
            <div className="Catalogue">
              {catalogue.map(
                ({ title, description, price, adresse, owner }) => (
                  <ListGroupItem header={title}>
                    <Carousel className="Images">
                      {images.map(({}) => (
                        <Carousel.Item>
                          <img
                            width={800}
                            height={400}
                            alt="800x400"
                            src={carousel}
                          />

                          <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                              Nulla vitae elit libero, a pharetra augue mollis
                              interdum.
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      ))}
                    </Carousel>

                    <p>Description : {description}</p>

                    <p>Prix : {price}</p>

                    <p>Adresse : {adresse}</p>

                    <p>Nombre de personnes : {owner}</p>

                    <p>
                      <Button bsStyle="success">louer</Button>
                    </p>
                  </ListGroupItem>
                )
              )}
            </div>
          </ListGroup>
        </Col>
      </Row>
    </Grid>
  </p>
);

export default Catalogue;
