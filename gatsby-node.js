const path = require(`path`);
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/layouts/post.js`);
  const result = await graphql(`
    query queryCMSPage {
      allDatoCmsArticle {
        nodes {
          id
          title
        }
      }
    }
  `);

  result.data.allDatoCmsArticle.nodes.forEach(({title,id}) => {
    const slugifiedTitle = slugify(title, {
      lower: true,
    });

    createPage({
      path: `articles/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id,
      },
    });
  });
};
