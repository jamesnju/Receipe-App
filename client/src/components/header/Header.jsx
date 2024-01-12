import Container from 'react-bootstrap/Container';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';



const Header = () => {
  const [cookies, setCookies] =useCookies(["access_token"]);

  const navigate= useNavigate();

  const logout =()=>{
    setCookies("access_token", "")
    window.localStorage.removeItem("useID");
    navigate("/auth")
  }
  return (
    <div>

    <Navbar expand="lg" className="header">
      <Container className='conta'>
        <Navbar.Brand href="#home">Recept</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="link me-auto" >
            <Link to='/'  className='links'>Home</Link>
            <Link to='/save'  className='links'>Save</Link>
            {!cookies.access_token ? (

              <Link to='/auth' className='links'>Login</Link>):
              (<button onClick={logout}>Logout</button>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header