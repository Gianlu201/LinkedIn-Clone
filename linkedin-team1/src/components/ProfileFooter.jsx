import { Container, Row, Col, Dropdown } from "react-bootstrap";

const ProfileFooter = () => {
  return (
    <Container className="mt-3 mb-3">
      <Row>
        <Col xs={12} className="ps-0 pe-2">
          <ul className="d-flex flex-wrap text-center ms-0 align-items-center justify-content-evenly px-3">
            <li>
              <a href="#" className="profileFooter px-2 text-secondary">
                About
              </a>
            </li>
            <li>
              <a href="#" className="profileFooter px-2 text-secondary">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#" className="profileFooter px-2 text-secondary">
                Help Center
              </a>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle
                  variant="link"
                  id="dropdown-basic"
                  className="profileFooter d-flex justify-content-center align-items-center text-secondary py-0"
                >
                  Privacy & Terms
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="p-list-footer fw-bold"
                  style={{ width: "200px" }}
                >
                  <Dropdown.Item
                    href="#/action-1"
                    className="fw-bold footerDropItem py-1 px-2 border-0"
                  >
                    Privacy Policy
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    className="fw-bold footerDropItem py-1 px-2 border-0 bg-white"
                  >
                    User Agreement
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    className="fw-bold footerDropItem py-1 px-2 border-0"
                  >
                    Pages Terms
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-4"
                    className="fw-bold footerDropItem py-1 px-2 border-0"
                  >
                    Cookie Policy
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-5"
                    className="fw-bold footerDropItem py-1 px-2 border-0"
                  >
                    Copyright Policy
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-6"
                    className="fw-bold footerDropItem py-1 px-2 border-0"
                  >
                    Your California privacy choices
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            <li>
              <a href="#" className="profileFooter px-2 text-secondary">
                Ad Choices
              </a>
            </li>
            <li>
              <a href="#" className="profileFooter px-2 text-secondary">
                Advertising
              </a>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle
                  variant="link"
                  id="dropdown-basic"
                  className="profileFooter text-secondary py-0"
                >
                  Business Services
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="overflow-y-scroll"
                  style={{ maxHeight: "380px", width: "220px" }}
                >
                  <ul className="list-unstyled px-4">
                    <li className="">
                      <strong className=" small w-100">Hire on LinkedIn</strong>
                      <p className="text-muted">
                        Find, attract and recruit talent
                      </p>
                    </li>
                    <li className="">
                      <strong className=" small w-100">
                        Sell with LinkedIn
                      </strong>
                      <p className="text-muted  ">Unlock sales opportunities</p>
                    </li>
                    <li className="">
                      <strong className=" small w-100">
                        Post a job for free
                      </strong>
                      <p className="text-muted  ">
                        Get qualified applicants quickly
                      </p>
                    </li>
                    <li className="">
                      <strong className=" small w-100">
                        Advertise on LinkedIn
                      </strong>
                      <p className="text-muted  ">
                        Acquire customers and grow your business
                      </p>
                    </li>
                    <li className="">
                      <strong className=" small w-100">
                        Get started with Premium
                      </strong>
                      <p className="text-muted  ">
                        Expand and leverage your network
                      </p>
                    </li>
                    <li className="">
                      <strong className=" small w-100">
                        Learn with LinkedIn
                      </strong>
                      <p className="text-muted  ">
                        Courses to develop your employees
                      </p>
                    </li>
                    <li>
                      <strong className=" small w-100">Admin Center</strong>
                      <p className="text-muted  ">
                        Manage billing and account details
                      </p>
                    </li>
                    <li className="py-1 text-center">
                      <strong className=" small w-100 mb-4">
                        Create a Company Page +
                      </strong>
                    </li>
                  </ul>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            <li>
              <a href="#" className="profileFooter px-2 text-secondary">
                Get the LinkedIn App
              </a>
            </li>
            <li>
              <a href="#" className="profileFooter px-2 text-secondary">
                More
              </a>
            </li>
          </ul>
        </Col>
        <Col
          xs={12}
          className="d-flex align-items-center justify-content-center px-3"
        >
          <strong className="text-primary">Linked</strong>
          <i className="bi bi-linkedin icon-linkedin mx-1 fs-6"></i>
          <span className=" profileFooter ms-2">
            {" "}
            LinkedIn Corporation &copy; 2025
          </span>
        </Col>
      </Row>
    </Container>
  );
};
export default ProfileFooter;
