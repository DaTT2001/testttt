import React from 'react'
import { Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './Header.module.css'
const Header = () => {
  return (
    <div className={style.headerMain}>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="./home">
         <img src='/logo.jpg' alt="Mô tả hình ảnh" width="100"  />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav><Link className={style.link} to="/">
                    Home
                  </Link></Nav>
            <Nav><Link className={style.link} to="product">
                    Product
                  </Link></Nav>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  </div>
  )
}

export default Header

