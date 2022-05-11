import React, { Component } from "react";
import "../App.css";

import { Navbar, NavbarBrand, Jambotron } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div className="jumbo">
          <div className=" rounded-lg  m-1   ">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1 className="display-4">Ristorante con Fusion</h1>
                <p className="lead p-2">
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
