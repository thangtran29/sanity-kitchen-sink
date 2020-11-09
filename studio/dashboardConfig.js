export default {
  widgets: [
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
                  buildHookId: '5fa9008fc77f4f574573c4b7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-167pzugy',
                  apiId: '6b8faf4c-2872-46df-8958-724c4afaf8af'
                },
                {
                  buildHookId: '5fa9008fe9068659b4476f92',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-f4gx3vmp',
                  apiId: 'fd052036-eded-47eb-835f-12f641f8d7d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thangtran29/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-f4gx3vmp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
