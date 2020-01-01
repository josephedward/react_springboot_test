import React, { Component } from "react";
import { Image, Grid } from "semantic-ui-react";

class Banner extends Component {
  render() {
    return (
      <div>
        <Grid
          verticalAlign="middle"
          stackable
          columns={2}
          style={bannerStyle}
        >
          <Grid.Row>
            <Grid.Column style={bStyle}>
              <div style={loremStyle}>
                <div style={p1}>Save 10%</div>
                <br />
                <br />
                <div style={p2}>Lorem Ipsum</div>
                <br />
                <br />
                <div style={p3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </div>
            </Grid.Column>
            <Grid.Column style={bStyle}>
              <Image src="./PEAK_PNG.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const p1 = {
  fontSize: "40px",
  margin: "20px"
};

const p2 = {
  fontSize: "30px",
  margin: "15px"
};

const p3 = {
  fontSize: "20px",
  margin: "10px"
};

const loremStyle = {
  color: "white",
  display: "block",
  overflow: "visible",
  width: "100%",
  zIndex: 2
};

const bStyle = {
  background: "black",
  position: "relative",
  zIndex: "2",
  backgroundColor: "rgba(0, 0, 0, 0)"
};

const bannerStyle = {
  display: "fixed",
  margin: "0 auto",
  background: "url('./B&W_bg.jpg')  no-repeat center center ",
  backgroundPosition: "right bottom",
  WebkitBackgroundSize: "cover",
  MozBackgroundSize: "cover",
  OBackgroundSize: "cover",
  backgroundSize: "cover",
  backgroundColor: "black",
  padding: 0,
  overflow: "visible"
};

export default Banner;
