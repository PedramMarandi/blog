import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { defaultValues } from "./defaultValues"
import defaultImage from "./Rz.jpeg"

const resolveImage = image => {
  if (image) {
    return { mtImage: image.childImageSharp.fluid.src }
  }
  return {
    mtImage: defaultImage,
  }
}
export const PostPageHelmet = ({ frontmatter }) => {
  const { title, description, date, image } = frontmatter
  const { mtImage } = resolveImage(image)
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="article:published_time" content={date} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={mtImage} />
      <meta name="robots" content="index,follow" />
      <meta name="revisit-after" content="1 days" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@rzkhosroshahi" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={mtImage} />
    </Helmet>
  )
}

PostPageHelmet.propTypes = {
  frontmatter: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
  }),
}

PostPageHelmet.defaultProps = {
  frontmatter: defaultValues,
}
