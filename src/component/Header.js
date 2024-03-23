import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";

const Header = ({ setCategory, setCountry, selectedCountry }) => {
  const handleCountryChange = (country) => {
    setCountry(country);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <span className="badge bg-light text-dark fs-5"> NewsWeb</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="nav-link" onClick={() => setCategory("business")}>
                business
              </div>
              <div
                className="nav-link"
                onClick={() => setCategory("entertainment")}
              >
                entertainment
              </div>
              <div className="nav-link" onClick={() => setCategory("general")}>
                general
              </div>
              <div className="nav-link" onClick={() => setCategory("health")}>
                health
              </div>
              <div className="nav-link" onClick={() => setCategory("science")}>
                science
              </div>
              <div className="nav-link" onClick={() => setCategory("sports")}>
                sports
              </div>
            </Nav>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {selectedCountry ? selectedCountry : "Select Country"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleCountryChange("us")}>
                  USA
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleCountryChange("in")}>
                  India
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleCountryChange("ca")}>
                  canada
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
