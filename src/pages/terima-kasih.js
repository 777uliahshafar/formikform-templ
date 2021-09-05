import React from 'react'
import { Link } from 'gatsby'

import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>TERIMA KASIH TELAH MENGISI KUESIONER INI!</h1>
    <p>
      Semoga dengan pengisian kuesioner ini dapat memberikan sumbangsi terhadap
      ilmu pengetahuan dan dunia praktisi perkotaan.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
