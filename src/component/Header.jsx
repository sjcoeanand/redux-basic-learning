import { Navbar,Nav, Container } from "react-bootstrap"
import {Cart} from "react-bootstrap-icons";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

let Header = () =>{
    let cartCount = useSelector(state => state.cart?.length)
    return (
    <Navbar bg="light" expand="md">
        <Container>
            <Navbar.Brand href="#">Redux Basic Store</Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to="/"> Products</Nav.Link>                
                <Nav.Link as={Link} to="/cart" className="position-relative">
                    <Cart color="royalblue" size={26} /> 
                    <span className="cart-count">{cartCount}</span>
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}

export default Header