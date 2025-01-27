/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col, Form, Dropdown } from 'react-bootstrap';
//import { QuestionCircleFill } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <Container as='footer' className='mt-5 mb-3'>
      <Row>
        <Col xs={6}>
          <ul className='d-flex flex-wrap anchor-list justify-content-between'>
            <li>
              <a href='#'>Informazioni</a>
            </li>
            <li>
              <a href='#'>Accessibilità</a>
            </li>
            <li>
              <a href='#'>Talent Solutions</a>
            </li>
            <li>
              <a href='#'>Informativa sulla Community Professionale</a>
            </li>
            <li>
              <a href='#'>Carriera</a>
            </li>
            <li>
              <a href='#'>Soluzioni di Marketing</a>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle
                  variant='link'
                  className='drop-list'
                  id='dropdown-basic'
                >
                  Privacy e Condizioni
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>
                    Informativa sulla privacy
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>
                    Contratto di licenza
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>
                    Termini e condizioni delle pagine
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-4'>
                    Informativa sui cookies
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-5'>
                    Informativa sul copyright
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-6'>
                    Opzioni relative all'informativa sulla privacy(Stato della
                    California)
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <a href='#'>Opzioni per Annunci Pubblicitari</a>
            </li>
            <li>
              <a href='#'>Pubblicità</a>
            </li>
            <li>
              <a href='#'>Sales Solutions</a>
            </li>
            <li>
              <a href='#'>Mobile</a>
            </li>
            <li>
              <a href='#'>Piccole Imprese</a>
            </li>
            <li>
              <a href='#'>Centro Sicurezza</a>
            </li>
          </ul>
        </Col>
        <Col xs={6}>
          <div className='d-lg-flex'>
            <ul className='list-unstyled'>
              <li className='d-flex'>
                <i className='bi bi-question-circle-fill d-inline-block fs-6 me-2'></i>
                <div>
                  <a className='fw-bold' href='#'>
                    Domande?
                  </a>
                  <p>Visita il nostro centro assistenza</p>
                </div>
              </li>
              <li className='d-flex'>
                <i className='bi bi-gear-fill d-inline-block fs-6 me-2'></i>
                <div>
                  <a className='fw-bold' href='#'>
                    Gestisci il tuo account e la tua privacy
                  </a>
                  <p>Vai alle Impostazioni</p>
                </div>
              </li>
              <li className='d-flex'>
                <i className='bi bi-shield-shaded d-inline-block fs-6 me-2'></i>
                <div>
                  <a className='fw-bold' href='#'>
                    Trasparenza sui tuoi contenuti consigliati
                  </a>
                  <p>Scopri di più sui contenuti consigliati</p>
                </div>
              </li>
            </ul>
            <div className='ms-lg-3'>
              <label>Seleziona Lingua</label>
              <Form.Select
                size='sm'
                style={{ width: '260px' }}
                aria-label='Default select example'
              >
                <option>Italiano(Italiano)</option>
                <option>English(Inglese)</option>
                <option>Spanish(Spagnolo</option>
                <option>French(Francese)</option>
                <option>Deutsch(Tedesco)</option>
              </Form.Select>
            </div>
          </div>
        </Col>
      </Row>
      <p className='my-3 fw-lighter'>LinkedIn Corporation &copy;2025</p>
    </Container>
  );
};
export default Footer;
