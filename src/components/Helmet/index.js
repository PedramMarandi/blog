import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

export const PostPageHelmet = ({ frontmatter }) => {
  const {
    title,
    description,
    date,
    image: {
      childImageSharp: { fluid },
    },
  } = frontmatter
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="article:published_time" content={date} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fluid.src} />
      <meta name="robots" content="index,follow" />
      <meta name="revisit-after" content="1 days" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@rzkhosroshahi" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={fluid.src} />
    </Helmet>
  )
}

PostPageHelmet.propTypes = {
  frontmatter: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
}
