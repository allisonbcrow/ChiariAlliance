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
          {/* <NavbarBrand href="/home"><img src={BrandLogo} alt="logo" style={{width: 200}} /></NavbarBrand> */}
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          {/* <Nav className="ml-auto center-option" navbar>
 
          </Nav> */}
          <Nav className="ml-auto right-options" navbar>
            
            <NavItem className="nav-right">
              <Button onClick={()=>routeChange('/')} color="primary" className="nav-button" style={{color: "#0086c3", backgroundColor:"#ffffff"}}>Home</Button>
            </NavItem>
            <NavItem className="nav-right">
              <Button onClick={()=>routeChange('/daily/mine')} color="primary" className="nav-button" style={{color: "#0086c3", backgroundColor:"#ffffff"}}>Daily Index</Button>
            </NavItem>
                        <NavItem className="nav-right">
              <Button onClick={()=>routeChange('/resources')} color="primary" className="nav-button" style={{color: "#0086c3", backgroundColor:"#ffffff"}}>Resources</Button>
            </NavItem>
            <NavItem className="nav-right">
              <Button onClick={()=>routeChange('/login')} color="primary" className="nav-button" style={{color: "#0086c3", backgroundColor:"#ffffff"}}>Login</Button>
            </NavItem>
            <NavItem className="nav-right">
              <Button onClick={()=>routeChange('/register')} color="primary" className="nav-button" style={{color: "#0086c3", backgroundColor:"#ffffff"}}>Create</Button>
            </NavItem>
            <NavItem className="nav-right">
              <Button onClick={props.clearToken} color="primary" className="nav-button" style={{color: "#0086c3", backgroundColor:"#ffffff"}}>Log Out</Button>
            </NavItem>
        </Nav>
      </Collapse>
   </Navbar>

        </header>
    );
};

export default Header;