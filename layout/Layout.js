import React from 'react'

import Footer from '../components/v2/Footer/Footer'
import Header from '../components/v2/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
