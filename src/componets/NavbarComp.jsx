import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarComp.css';
import homeLogo from '../assets/infa/the-box.jpeg'


function NavbarComp() {
    return (
      <Navbar  sticky='top'  className="bg-body-tertiary">
        <Container className='conNavbar'>
            <div className='logoBox'>
            <img src={homeLogo} alt='logo' className='logo'/>
          <Navbar.Brand className='brandText' href="/">fitness&studio</Navbar.Brand>
          </div>
          <div className='linkBox'>
          <Navbar.Toggle className='' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='' id="basic-navbar-nav">
            <Nav className="linkText">
                <div className='signNow'>
              <Nav.Link href="/">בית</Nav.Link>
              </div>

              <div className='dropdownCon'>
              <NavDropdown title="תפריט" id="basic-nav-dropdown" className='navDropText'>
                <NavDropdown.Item href="/#studioItem">הסטודיו</NavDropdown.Item>
                <NavDropdown.Item href="/studio">לוח אימונים</NavDropdown.Item>
                <NavDropdown.Item href="/#clinicItemId">טיפולים פיזיוטרפיים</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#contactForm">
                  צור קשר
                </NavDropdown.Item>
              </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    );
  }
  
  export default NavbarComp;
  