import React from "react";
import { Segment, Grid, Button } from "semantic-ui-react";

export default function Footer() {
  return (
    <div>
      <Segment style={fStyle}>
        <Grid verticalAlign="middle" columns={2}>
          <Grid.Row verticalAlign="middle">
            <Grid.Column verticalAlign="middle" style={colStyle}>
              <div style={h1}>
                <strong>Left Footer Links</strong>
              </div>
              <div>
                {/* Using buttons instead of links as per accessibility specifications */}
                <Button style={buttonStyle} role="link" href="#">
                  Left Footer Link #1
                </Button>
              </div>
              <div>
                <Button style={buttonStyle} role="link" href="#">
                  Left Footer Link #2
                </Button>
              </div>
            </Grid.Column>
            <Grid.Column style={colStyle}>
              <div style={h1}>
                <strong>Right Footer Links</strong>
              </div>
              <div>
                <Button style={buttonStyle} role="link" href="#">
                  Right Footer Link #1
                </Button>
              </div>
              <div>
                <Button style={buttonStyle} role="link" href="#">
                  Right Footer Link #2
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

const colStyle = {
  textAlign: "center",
  float: "center",
  margin: "auto"
};

const h1 = {
  fontSize: "20px"
};

const buttonStyle = {
  backgroundColor: "rgba(0, 0, 0, 0)",
  fontFamily: "Roboto, sans-serif",
  color: "white"
};

const fStyle = {
  color: "white",
  verticalAlign: "middle",
  height: "200px",
  background: "	#272727"
};
