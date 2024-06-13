import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export function HeaderContainer(){
    return (
      //   <Navbar bg="light" data-bs-theme="light">
      //   <Container>
      //     <Navbar.Brand href="#home">Note-S-implified</Navbar.Brand>
      //     <Nav className="me-auto">
      //       <Nav.Link href="#home">Home</Nav.Link>
      //       {/* <Nav.Link href="#features">Features</Nav.Link>
      //       <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      //     </Nav>
      //   </Container>
      // </Navbar>

<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
<Container>
  <Navbar.Brand href="#home">Note-S-implified</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    <Nav>
      <Nav.Link href="#login">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
    )
}