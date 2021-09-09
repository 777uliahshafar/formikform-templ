import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import SEO from '../components/seo'
import Layout from '../components/layout'

import Form from '../components/form'

export default () => (
  <Layout>
    <SEO title="Home" />
    <p>
      Terima kasih sebelumnya untuk meluangkan waktunya untuk mengisi kuesioner
      ini.
    </p>
    <Form />
  </Layout>
)
