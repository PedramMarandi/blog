import React from "react"
import { graphql, links } from "gatsby"

const AllTagsTemplates = ({ data, pageContext }) => {
  console.log("pageContext ", pageContext);
  return (
    <div>
      <div>all tags here</div>
    </div>
  )
}
export default AllTagsTemplates
