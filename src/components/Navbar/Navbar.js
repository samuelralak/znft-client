import { Drawer } from "antd";
import React from "react";
import { withRouter } from "react-router-dom";
import { Burger } from "../../assets/Burger";
import { Close } from "../../assets/Close";
import "./Navbar.css";

class Navbar extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      sidebarVisible: false,
    };
  }

  toggleSidebar = () => {
    this.setState((state) => {
      return {
        sidebarVisible: !state.sidebarVisible,
      };
    });
  };

  render() {
    const { sidebarVisible } = this.state;
    const { open, connected, address } = this.props;
    return (
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <div className="navbar-logo">
            <h1>ZNFT</h1>
          </div>
          <div className="secondary-div">
            <div>
              <ul className="navbar-elements">
                <li
                  onClick={() => {
                    this.props.history.push("/marketplace");
                  }}
                >
                  NFT Marketplace
                </li>
                <li
                  onClick={() => {
                    this.props.history.push("/");
                  }}
                >
                  List My Company
                </li>
                <li
                  onClick={() => {
                    this.props.history.push("/proposals");
                  }}
                >
                  Governance
                </li>
                <li
                  onClick={() => {
                    this.props.history.push("/mint");
                  }}
                >
                  Create NFT
                </li>
                <li>Docs</li>
              </ul>
            </div>
            <div>
              {connected ? (
                <button
                  type="button"
                  className="connect-button"
                  onClick={() => {
                    open();
                  }}
                >
                  {address.slice(0, 6) + "....." + address.slice(38, 42)}
                </button>
              ) : (
                <button
                  type="button"
                  className="connect-button"
                  onClick={() => {
                    open();
                  }}
                >
                  Connect Wallet
                </button>
              )}
            </div>
            <button className="burger" onClick={this.toggleSidebar}>
              <Burger />
            </button>
          </div>
        </div>
        <Drawer
          visible={sidebarVisible}
          onClose={this.toggleSidebar}
          maskClosable
          closable
          closeIcon={<Close />}
          className="sidebar"
        >
          <ul className="navbar-elements">
            <li>Markets</li>
            <li>Governance</li>
            <li>Developers</li>
            <li>Prices</li>
            <li>Docs</li>
          </ul>
        </Drawer>
      </div>
    );
  }
}

export default withRouter(Navbar);
