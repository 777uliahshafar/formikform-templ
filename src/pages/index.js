import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import SEO from '../components/seo'
import Layout from '../components/layout'

import { Form, Button, Container } from 'react-bootstrap'
import { navigate } from 'gatsby'

const IndexPage = () => {
  const [formState, setFormState] = useState({
    namaLengkap: '',
    alamatEmail: '',
    nomorHp: '',
  })

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => navigate('/terima-kasih/'))
      .catch((error) => alert(error))

    e.preventDefault()
  }
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Halo</h1>
      <p>
        Terima kasih sebelumnya untuk meluangkan waktunya untuk mengisi
        kuesioner ini.
      </p>
      <Container>
        <Form
          onSubmit={handleSubmit}
          name="kuesioner-awal"
          method="post"
          data-netlify="true"
          action="/terima-kasih"
          data-netlify-honeypot="bot-field"
        >
          <p hidden>
            <label>
              I love honeypot : <input name="bot-field" />
            </label>
          </p>
          <input type="hidden" name="form-name" value="kuesioner-awal" />
          <Form.Group controlId="formBasicFullName">
            <Form.Label>Nama Lengkap</Form.Label>
            <Form.Control
              type="text"
              name="namaLengkap"
              onChange={handleChange}
              value={formState.namaLengkap}
              placeholder="cth: Andi Akrab"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Alamat Email</Form.Label>
            <Form.Control
              type="text"
              name="alamatEmail"
              onChange={handleChange}
              value={formState.alamatEmail}
              placeholder="andiakrab@gmail.com"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Nomor HP (Optional)</Form.Label>
            <Form.Control
              type="text"
              name="nomorHp"
              onChange={handleChange}
              value={formState.nomorHp}
              placeholder="08135519***"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Kirim Kuesioner
          </Button>
        </Form>
      </Container>
    </Layout>
  )
}

export default IndexPage
