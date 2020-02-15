export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e484f15345eafd613cd300a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-t72h46nz',
                  apiId: '94417b2c-0c6e-42a2-b8ba-65189b391bdc'
                },
                {
                  buildHookId: '5e484f16645e930ae5b1e741',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-yb8b5kb1',
                  apiId: '68604522-dc55-4953-a60f-e5210bf40a98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pdwallace/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-yb8b5kb1.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
