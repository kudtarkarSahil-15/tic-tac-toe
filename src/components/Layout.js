import React from "react";

import { Row, Col, Card, CardBody, Button } from "reactstrap";
import Icon from "./Icons";

// const itemArray = new Array(9).fill("empty");

const Layout = ({count, itemArray, reloadGame, winMessage, isCross, changeItem }) => {
  return (
    <>
      <Row>
        <Col md={6} className="offset-md-3">
          {count === 9 ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {"game draw"}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                Reload the game
              </Button>
            </div>
          ) : winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>

              <Button color="success" block onClick={reloadGame}>
                Reload the game
              </Button>
            </div>
          ) : (
            <div>
              <h1 className="text-center text-warning p-3">
                {isCross ? "Cross" : "Zero"} Turns
              </h1>
            </div>
          )}

          <div className="grid">
            {itemArray.map((item, index) => (
              <Card
                key={index}
                color="warning"
                onClick={() => changeItem(index)}
              >
                <CardBody className="box">
                  <Icon iconName={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Layout;
