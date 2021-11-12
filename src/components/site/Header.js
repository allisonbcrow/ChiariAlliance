import React, {useState} from "react";
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Button } from "reactstrap";
import { BrowserRouter as
    Link, NavLink, useHistory
} from 'react-router-dom';




const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }
    
    const history = useHistory();

    const routeChange = (path) =>{ 
      history.push(path);
    }

    return (
        <header>
        <Navbar fixed={"top"} color="faded" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto right-options" navbar>

<div>
            <NavItem className="nav-right">
              <Button onClick={()=>routeChange('/')} color="primary" className="nav-button">Home</Button>
            </NavItem>
            <NavItem className="nav-right">
              <Button onClick={()=>routeChange('/resources')} color="primary" className="nav-button" >Resources</Button>
            </NavItem>
            </div>

            {props.token === localStorage.getItem("token")? (
              
              <div>
            <NavItem className="nav-right">
              <Button onClick={()=>routeChange('/daily/mine')} color="primary" className="nav-button" >Daily Journal</Button>
            </NavItem>
            <NavItem className="nav-right">
              <Button onClick={()=>routeChange('/medical/mine')} color="primary" className="nav-button" >Medical Journal</Button>
            </NavItem>
            {/* <NavItem className="nav-right">
              <Button onClick={()=>routeChange('/daily/all')} color="primary" className="nav-button" >Admin Only</Button>
            </NavItem> */}
            </div>
            
 ):(
  <></>
  )}
  <div>
            <NavItem className="nav-right">
              <Button onClick={()=>routeChange('/login')} color="primary" className="nav-button" >Login</Button>
            </NavItem>
            <NavItem className="nav-right">
              <Button onClick={()=>routeChange('/register')} color="primary" className="nav-button" >Register</Button>
            </NavItem>
            <NavItem className="nav-right">
              <Button onClick={props.clearToken} color="primary" className="nav-button" >Log Out</Button>
            </NavItem>
            </div>
        </Nav>
      </Collapse>
   </Navbar>

        </header>
    );
};

export default Header;