import React, { Component } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";

class Header extends Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu stackable style={menuStyle}>
          <Menu.Item style={boxStyle}>
            {/* 
          Do you want me to put a logo here?
           */}
          </Menu.Item>

          <Menu.Item style={searchStyle}>
            <Input
              color="red"
              style={searchStyle}
              className="icon"
              icon="search"
              placeholder="Search..."
              action={{
                color: "red"
              }}
            ></Input>
          </Menu.Item>
          <Menu.Item header style={itemStyle}>
            <div>Our Company</div>
          </Menu.Item>
          <Menu.Item
            name="aboutUs"
            style={itemStyle}
            active={activeItem === "aboutUs"}
            onClick={this.handleItemClick}
            // style={{}}
          ></Menu.Item>
          <Menu.Item
            name="jobs"
            style={itemStyle}
            active={activeItem === "jobs"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="locations"
            style={itemStyle}
            active={activeItem === "locations"}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Segment style={segmentStyle}></Segment>
      </div>
    );
  }
}

const boxStyle = {
  display: "block",
  color: "white",
  fontFamily: "Roboto, sans-serif",
  fontSize: "15px",
  background: "#2A3330",
  width: "15%",
  height: "40px",
  margin: "10px"
};

const menuStyle = {
  background: "#CC0031",
  marginBottom: "0",
  borderRadius: "0"
};

const searchStyle = {
  background: "#9F0028",
  textAlign: "center",
  float: "center",
  margin: "auto"
};

const itemStyle = {
  color: "white",
  background: "#9D0128",
  fontFamily: "Roboto, sans-serif"
};

const segmentStyle = {
  background: "#9D0128",
  height: "40px",
  padding: "0",
  margin: "0",
  borderRadius: "0",
  border: "1px solid black"
};

export default Header;
