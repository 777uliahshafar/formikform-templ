import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Container } from 'react-bootstrap'
import { navigate } from 'gatsby'
import './form.css'

const IndexPage = () => {
  const [formState, setFormState] = useState({
    partisipan: '',
    nomorHp: '',
    tahunLahir: '',
    spaceRank: '',
    spaceRank2: '',
    openQuestion: '',
    openQuestion2: '',
    commentNo1: ''
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
        name="kuesonline v4"
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
        <input type="hidden" name="form-name" value="kuesonline v4" />
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
                onChange={handleChange}
                value="lakiLaki"
              />
              laki-laki
            </Form.Label>

            <Form.Label className="box-2">
              <Form.Check
                className="noPadding"
                name="gender"
                type="radio"
                id="opsiperempuan"
                onChange={handleChange}
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
                onChange={handleChange}
                value="bugis"
              />
              Bugis
            </Form.Label>

            <Form.Label className="box-2">
              <Form.Check
                className="noPadding"
                name="suku"
                type="radio"
                id="makassar"
                onChange={handleChange}
                value="makassar"
              />
              Makassar
            </Form.Label>

            <Form.Label className="box-2">
              <Form.Check
                className="noPadding"
                name="suku"
                type="radio"
                id="toraja"
                onChange={handleChange}
                value="toraja"
              />
              Toraja
            </Form.Label>

            <Form.Label className="box-2">
              <Form.Check
                className="noPadding"
                name="suku"
                type="radio"
                id="lainnya"
                onChange={handleChange}
                value="lainnya"
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
          <Form.Group className="container-1" controlId="formJob">
            <Form.Label className="box-1">Pekerjaan:</Form.Label>
            <Form.Label className="box-2">
              <Form.Check
                className="noPadding"
                name="job"
                type="radio"
                id="karyawan"
                onChange={handleChange}
                value="karyawan"
              />
              Karyawan
            </Form.Label>

            <Form.Label className="box-2">
              <Form.Check
                className="noPadding"
                name="job"
                type="radio"
                id="wirausah"
                onChange={handleChange}
                value="wirausaha"
              />
              Wirausaha
            </Form.Label>

            <Form.Label className="box-2">
              <Form.Check
                className="noPadding"
                name="job"
                type="radio"
                id="tidak bekerja"
                onChange={handleChange}
                value="tidakBekerja"
              />
              Tidak bekerja
            </Form.Label>

            <Form.Label className="box-2">
              <Form.Check
                className="noPadding"
                name="job"
                type="radio"
                id="pelajar"
                onChange={handleChange}
                value="pelajar"
              />
              Pelajar
            </Form.Label>
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
          <Form.Control
            as="select"
            name="spaceRank"
            onChange={handleChange}
            value={formState.spaceRank}
          >
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
          <Form.Control
            as="select"
            name="spaceRank2"
            onChange={handleChange}
            value={formState.spaceRank2}
          >
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
          <Form.Control
            as="textarea"
            rows={3}
            name="openQuestion"
            onChange={handleChange}
            value={formState.openQuestion}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formOpenQuestion2">
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
        <Form.Text>
          Silakan nilai pendapat yang paling mewakili pendapat anda dengan skala
          poin 5 untuk setiap pernyataan.
          <i>
            {' '}
            1 = Sangat tidak setuju 2 = Tidak setuju 3 = Biasa saja 4 = Setuju 5
            = Sangat Setuju
          </i>
        </Form.Text>
        <fieldset>
          <Form.Group className="container-1" controlId="formLikertAsk">
            <Form.Label className="box-1">
              Jalan setapak membantu menuntun pengunjung ke ruang publik
            </Form.Label>
            <Form.Label className="box-3">
              <Form.Check
                className="noPadding"
                name="queryNo1"
                type="radio"
                id="sangatTidakSetuju"
                onChange={handleChange}
                value="sangat tidak setuju"
              />
              1
            </Form.Label>

            <Form.Label className="box-3">
              <Form.Check
                className="noPadding"
                name="queryNo1"
                type="radio"
                id="tidakSetuju"
                onChange={handleChange}
                value="tidak setuju"
              />
              2
            </Form.Label>
            <Form.Label className="box-3">
              <Form.Check
                className="noPadding"
                name="queryNo1"
                type="radio"
                id="biasaSaja"
                onChange={handleChange}
                value="biasa saja"
              />
              3
            </Form.Label>
            <Form.Label className="box-3">
              <Form.Check
                className="noPadding"
                name="queryNo1"
                type="radio"
                id="setuju"
                onChange={handleChange}
                value="setuju"
              />
              4
            </Form.Label>
            <Form.Label className="box-3">
              <Form.Check
                className="noPadding"
                name="queryNo1"
                type="radio"
                id="sangatSetuju"
                onChange={handleChange}
                value="sangat setuju"
              />
              5
            </Form.Label>

            <Form.Control
              className="comment"
              as="textarea"
              rows={2}
              name="commentNo1"
              onChange={handleChange}
              value={formState.commentNo1}
            />
          </Form.Group>
        </fieldset>

        <Button variant="primary" type="submit">
          Kirimkan
        </Button>
      </Form>
    </Container>
  )
}

export default IndexPage
