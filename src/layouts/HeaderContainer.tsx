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
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link href="#login">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
    )
}