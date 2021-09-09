import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { navigate } from 'gatsby'
import './form.css'

const IndexPage = () => {
  const [formState, setFormState] = useState({
    partisipan: '',
    nomorHp: '',
    suku: '',
    tahunLahir: '',
    job: '',
    spaceRank: '',
    spaceRank2: '',
    openQuestion: '',
    openQuestion2: ''
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
    <Container>
      <Form
        onSubmit={handleSubmit}
        name="kuesonline v3"
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
        <input type="hidden" name="form-name" value="kuesonline v3" />
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
          <Form.Group className="container-1" controlId="formGender">
            <Form.Label className="box-1">Jenis Kelamin:</Form.Label>
            <Form.Label className="box-2">
              <Form.Check
                className="noPadding"
                name="gender"
                type="radio"
                id="opsilaki"
                value="laki-laki"
              />
              laki-laki
            </Form.Label>

            <Form.Label className="box-2">
              <Form.Check
                className="noPadding"
                name="gender"
                type="radio"
                id="opsiperempuan"
                value="perempuan"
              />
              perempuan
            </Form.Label>
          </Form.Group>
        </fieldset>
        <fieldset>
          <Form.Group className="container-1" controlId="formSuku">
            <Form.Label className="box-1">Suku:</Form.Label>
            <Form.Label className="box-2">
              <Form.Check
                className="noPadding"
                name="suku"
                type="radio"
                id="bugis"
                value="Bugis"
              />
              Bugis
            </Form.Label>

            <Form.Label className="box-2">
              <Form.Check
                className="noPadding"
                name="suku"
                type="radio"
                id="makassar"
                value="Makassar"
              />
              Makassar
            </Form.Label>

            <Form.Label className="box-3">
              <Form.Check
                className="noPadding"
                name="suku"
                type="radio"
                id="toraja"
                value="Toraja"
              />
              Toraja
            </Form.Label>

            <Form.Label className="box-4">
              <Form.Check
                className="noPadding"
                name="suku"
                type="radio"
                id="lainnya"
                value="Lainnya"
              />
              Lainnya
            </Form.Label>

            <Form.Label className="box-4">
              <Form.Check
                className="noPadding"
                name="suku"
                type="radio"
                id="lainnya"
                value="Lainnya"
              />
              Lainnya
            </Form.Label>
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
        <Form.Text>
          Jika uang, waktu dan halangan lainnya bukan pertimbangan, ruang mana
          yang anda lebih cenderungi untuk dikunjungi? Silakan nilai dengan
          skala poin 100 dimana ``1" artinya ``kurang dicenderungi" dan ``100"
          artinya ``Sangat dicenderungi""
        </Form.Text>
        <Form.Group controlId="formRank">
          <Form.Label>Skor Ruang A</Form.Label>
          <Form.Control as="select" name="spaceRank">
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
          <Form.Control as="select" name="spaceRank2">
            <option value="0">Pilih..</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="80">80</option>
            <option value="100">100</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formOpenQuestion">
          <Form.Label>
            Mengapa anda menyukai ruang tersebut? Deskripsikan dengan detail apa
            yang menarik menurut anda tentang atribut ruang itu?
          </Form.Label>
          <Form.Control as="textarea" rows={3} name="openQuestion" />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formOpenQuestion2"
          onChange={handleChange}
          value={formState.openQuestion}
        >
          <Form.Label>
            Bagaimana perasaan anda saat memasuki ruang tersebut?
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="openQuestion2"
            onChange={handleChange}
            value={formState.openQuestion2}
          />
        </Form.Group>
        <Form.Text className="text-muted">
          Silakan nilai pendapat yang paling mewakili pendapat anda dengan skala
          poin 5 untuk setiap pernyataan.
          <i>
            {' '}
            1 = Sangat tidak setuju 2 = Tidak setuju 3 = Biasa saja 4 = Setuju 5
            = Sangat Setuju
          </i>
        </Form.Text>

        <Button variant="primary" type="submit">
          Kirimkan
        </Button>
      </Form>
    </Container>
  )
}

export default IndexPage
