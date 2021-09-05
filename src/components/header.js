import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-background-image'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './background-image.css'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      className="forhead"
      fluid={data.placeholderImage.childImageSharp.fluid}
      fadeIn
    >
      <div className="black-overlay">
        <div className="content-box">
          <Link
            to="/"
            style={{
              color: `white`,
              fontSize: `22px`,
              fontFamily: `monospace`,
            }}
          >
            {siteTitle}
          </Link>
          <p
            style={{
              color: `white`,
              fontSize: `14px`,
              fontFamily: `monospace`,
            }}
          >
            Isian anda menentukan arah perkembangan kota Parepare
          </p>
        </div>
      </div>
    </Img>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
