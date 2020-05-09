const path = require(`path`)

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              nispid
              layout
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: path.resolve(
        `./src/templates/${edge.node.frontmatter.layout}.js`
      ),
      path: `/${edge.node.frontmatter.layout}/${edge.node.frontmatter.nispid}.html`,
      context: {
        nispid: edge.node.frontmatter.nispid,
      },
    })
  })
}
