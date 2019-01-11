import React, {Component} from 'react';
import { connect } from 'react-redux'
// import { Link } from "react-router-dom";
import { 
    Navbar, 
    NavbarBrand, 
    NavbarNav, 
    NavItem, 
    NavLink, 
    NavbarToggler, 
    Collapse, 
    // FormInline, 
    Dropdown, 
    DropdownToggle, 
    DropdownMenu,  
    DropdownItem, 
    Fa 
} from "mdbreact";
import "./styles/TopNav.css"
class TopNav extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <Navbar color="stylish-color-dark" dark expand="md" style={{}}>
          <NavbarBrand>
            <strong className="white-text">Calos</strong>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav left>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <NavLink className="waves-effect waves-light" to="#!"><Fa icon="twitter" /></NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <Fa icon="user" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default" right>
                    <DropdownItem href="#!">Action</DropdownItem>
                    <DropdownItem href="#!">Another Action</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Collapse>
      </Navbar>
    );
  }
}

export default connect(null,null)(TopNav);
    