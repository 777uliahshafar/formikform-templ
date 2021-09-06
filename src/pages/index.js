import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import SEO from '../components/seo'
import Layout from '../components/layout'

import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap'
import { navigate } from 'gatsby'

const IndexPage = () => {
  const [formState, setFormState] = useState({
    namaLengkap: '',
    alamatEmail: '',
    nomorHp: ''
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
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
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
          <Form.Group controlId="formParticipant">
            <Form.Label>Partisipan#</Form.Label>
            <Form.Control
              type="text"
              name="partisipan"
              onChange={handleChange}
              value={formState.partisipan}
            />
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>Nomor HP (Opsional)</Form.Label>
            <Form.Control
              type="text"
              name="nomorHp"
              onChange={handleChange}
              value={formState.nomorHp}
              placeholder="08135519***"
            />
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3" controlId="formGender">
              <Form.Label column sm={2}>
                Jenis Kelamin:
              </Form.Label>

              <Col sm={10}>
                <Form.Check
                  inline
                  type="radio"
                  label="laki-laki"
                  name="gender"
                  id="lakiLaki"
                  onChange={handleChange}
                  value={formState.gender}
                />

                <Form.Check
                  inline
                  type="radio"
                  label="perempuan"
                  name="gender"
                  id="perempuan"
                  onChange={handleChange}
                  value={formState.gender}
                />
              </Col>
            </Form.Group>
          </fieldset>

          <fieldset>
            <Form.Group as={Row} className="mb-3" controlId="formSuku">
              <Form.Label column sm={2}>
                Suku:
              </Form.Label>
              <Col sm="10">
                <Form.Check
                  inline
                  type="radio"
                  label="Bugis"
                  name="suku"
                  id="bugis"
                  onChange={handleChange}
                  value={formState.suku}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Makassar"
                  name="suku"
                  id="makassar"
                  onChange={handleChange}
                  value={formState.suku}
                />

                <Form.Check
                  inline
                  type="radio"
                  label="Toraja"
                  name="suku"
                  id="toraja"
                  onChange={handleChange}
                  value={formState.suku}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Lainnya"
                  name="suku"
                  id="lainLain"
                  onChange={handleChange}
                  value={formState.suku}
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group controlId="formTahunLahir">
            <Form.Label>Tahun lahir:</Form.Label>
            <Form.Control
              type="text"
              name="tahunLahir"
              onChange={handleChange}
              value={formState.tahunLahir}
            />
          </Form.Group>

          <fieldset>
            <Form.Group as={Row} className="mb-3" controlId="formJob">
              <Form.Label column sm={10}>
                Pekerjaan:
              </Form.Label>
              <Col sm="10">
                <Form.Check
                  inline
                  type="radio"
                  label="Karyawan"
                  name="job"
                  id="karyawan"
                  onChange={handleChange}
                  value={formState.job}
                />

                <Form.Check
                  inline
                  type="radio"
                  label="Wiraswasta"
                  name="job"
                  id="wiraswasta"
                  onChange={handleChange}
                  value={formState.job}
                />

                <Form.Check
                  inline
                  type="radio"
                  label="Belum bekerja"
                  name="job"
                  id="belumBekerja"
                  onChange={handleChange}
                  value={formState.job}
                />

                <Form.Check
                  inline
                  type="radio"
                  label="Pelajar"
                  name="job"
                  id="pelajar"
                  onChange={handleChange}
                  value={formState.job}
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Card body>
            {' '}
            Jika uang, waktu dan halangan lainnya bukan pertimbangan, ruang mana
            yang anda lebih cenderungi untuk dikunjungi? Silakan nilai dengan
            skala poin 100 dimana ``1" artinya ``kurang dicenderungi" dan ``100"
            artinya ``Sangat dicenderungi""
          </Card>
          <Form.Group controlId="formRank">
            <Form.Label>Skor Ruang A</Form.Label>
            <Form.Control as="select">
              <option value="0">Pilih..</option>
              <option value="20">20</option>
              <option value="40">40</option>
              <option value="60">60</option>
              <option value="80">80</option>
              <option value="100">100</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formRank2">
            <Form.Label>Skor Ruang B</Form.Label>
            <Form.Control as="select">
              <option value="0">Pilih..</option>
              <option value="20">20</option>
              <option value="40">40</option>
              <option value="60">60</option>
              <option value="80">80</option>
              <option value="100">100</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Kirimkan
          </Button>
        </Form>
      </Container>
    </Layout>
  )
}

export default IndexPage
