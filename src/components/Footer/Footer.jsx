import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className='py-3 footer-background'>
      <Container>
        <Row className='d-flex justify-content-center footer-flexer'>
          <Col className='d-flex align-items-center justify-content-center'>
            <Row className='d-flex justify-content-center'>
              <div>
                <a href='#'>
                  <img
                    src='/Images/Gdaddy-logo.png'
                    className='logo-img'
                  />
                </a>
              </div>
            </Row>
          </Col>
          <Col className='footer-anchor footer-category'>
            <Row className='text-white pb-2'>INFORMATION</Row>
            <Row>
              <a href='https://www.governmentjobs.com/careers/whitfield'>
                Employment Opportunities
              </a>
            </Row>
            <Row className='text-white'>
              <a href='https://www.whitfieldcountyga.com/GIS.htm'>
                Geographic Info Services
              </a>
            </Row>
            <Row className='text-white'>
              <a
                target='blank'
                href='https://www.whitfieldcountyga.com/government.htm'
              >
                Government
              </a>
            </Row>
            <Row className='text-white'>
              <a href='#'>Accessibility</a>
            </Row>
            <Row className='text-white'>
              <a href='#'>Disclaimer</a>
            </Row>
          </Col>
          <Col className='footer-anchor footer-category'>
            <Row className='text-white pb-2'>CONTACT</Row>
            <Row className='text-white'>
              <a href='#'>
                Gunner Morris
                <br />
                (210) 827-0377
              </a>
              <a href="mailto:gdaddyconstruction@gmail.com">Email Us</a>
            </Row>
            <Row className='py-2'></Row>
            <Row className='text-white footer-anchor'>
              <a href='#'>Additional Contact Info</a>
            </Row>
          </Col>
          <Col className='footer-anchor footer-category'>
            <Row className='text-white'>FOLLOW US</Row>
            <Row className='pt-4 pb-2'>
              <Col className='d-flex footer-no-padding'>
                <div className='pe-2'>
                  <a
                    target='blank'
                    href='https://www.facebook.com/WhitfieldCountyGA/'
                  >
                    <Icon.Facebook color='white' size={50}></Icon.Facebook>
                  </a>
                </div>
                <div className='px-2'>
                  <a target='blank' href='https://twitter.com/DaltonGeorgia'>
                    <Icon.Twitter color='white' size={50} />
                  </a>
                </div>
                <div className='px-2'>
                  <a
                    target='blank'
                    href='https://www.instagram.com/whitfieldcountyga/?hl=en'
                  >
                    <Icon.Instagram color='white' size={50} />
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className='footer-hr' />
        <Row>
          <p className='text-white d-flex justify-content-center'>
            © {new Date().getFullYear()} G. Daddy Construction
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
