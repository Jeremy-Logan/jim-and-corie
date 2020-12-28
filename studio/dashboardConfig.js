export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5fe92b34605fe13637a29c4d',
                  title: 'Sanity Studio',
                  name: 'jim-and-corie-studio',
                  apiId: 'bcb698be-3ae9-4be2-a1bd-ac4e221926a3'
                },
                {
                  buildHookId: '5fe92b34ee5a2fa3dff7a734',
                  title: 'Landing pages Website',
                  name: 'jim-and-corie',
                  apiId: '50ba7830-6540-4571-88d1-e4be343426e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jeremy-Logan/jim-and-corie',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://jim-and-corie.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
