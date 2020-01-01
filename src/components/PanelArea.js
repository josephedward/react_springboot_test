import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";

class PanelArea extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Grid relaxed stackable columns={4} style={segStyle}>
            <Grid.Row>
              <Grid.Column style={c1}>
                <div></div>
              </Grid.Column>
              <Grid.Column style={c2}>
                <div></div>
              </Grid.Column>
              <Grid.Column style={c3}>
                <div></div>
              </Grid.Column>
              <Grid.Column style={c4}>
                <div></div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

const segStyle = {
  margin: 0,
  height: "300px"
};

const c1 = {
  // background: "#35D2B4",
  border: "10px solid white",
  borderRadius: "15px"
};

const c2 = {
  // background: "#1B2191",
  border: "10px solid white",
  borderRadius: "15px"
};

const c3 = {
  // background: "#D822EE",
  border: "10px solid white",
  borderRadius: "15px"
};

const c4 = {
  // background: "#0C76AC",
  border: "10px solid white",
  borderRadius: "15px"
};

export default PanelArea;
