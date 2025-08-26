import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b32'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/egibbs',
    component: ComponentCreator('/blog/authors/egibbs', '9af'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '24d'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '370'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd5e'),
    exact: true
  },
  {
    path: '/privacy',
    component: ComponentCreator('/privacy', 'dcf'),
    exact: true
  },
  {
    path: '/tos',
    component: ComponentCreator('/tos', 'b2d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'cdc'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '2c5'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '6ba'),
            routes: [
              {
                path: '/docs/customers/intro',
                component: ComponentCreator('/docs/customers/intro', '61a'),
                exact: true,
                sidebar: "customerSidebar"
              },
              {
                path: '/docs/customers/Learning/alacarte',
                component: ComponentCreator('/docs/customers/Learning/alacarte', '37e'),
                exact: true,
                sidebar: "customerSidebar"
              },
              {
                path: '/docs/customers/Learning/edr',
                component: ComponentCreator('/docs/customers/Learning/edr', 'f7c'),
                exact: true,
                sidebar: "customerSidebar"
              },
              {
                path: '/docs/customers/Learning/fixedcostscalability',
                component: ComponentCreator('/docs/customers/Learning/fixedcostscalability', 'c7a'),
                exact: true,
                sidebar: "customerSidebar"
              },
              {
                path: '/docs/customers/Learning/itcompliance',
                component: ComponentCreator('/docs/customers/Learning/itcompliance', 'fcf'),
                exact: true,
                sidebar: "customerSidebar"
              },
              {
                path: '/docs/customers/Learning/macmanagement',
                component: ComponentCreator('/docs/customers/Learning/macmanagement', 'ac4'),
                exact: true,
                sidebar: "customerSidebar"
              },
              {
                path: '/docs/customers/Learning/managedit',
                component: ComponentCreator('/docs/customers/Learning/managedit', '143'),
                exact: true,
                sidebar: "customerSidebar"
              },
              {
                path: '/docs/customers/Learning/manageditvalue',
                component: ComponentCreator('/docs/customers/Learning/manageditvalue', '940'),
                exact: true,
                sidebar: "customerSidebar"
              },
              {
                path: '/docs/customers/Learning/patchmanagement',
                component: ComponentCreator('/docs/customers/Learning/patchmanagement', '9e9'),
                exact: true,
                sidebar: "customerSidebar"
              },
              {
                path: '/docs/customers/Learning/remoteworkforce',
                component: ComponentCreator('/docs/customers/Learning/remoteworkforce', '3f6'),
                exact: true,
                sidebar: "customerSidebar"
              },
              {
                path: '/docs/customers/Learning/voipservices',
                component: ComponentCreator('/docs/customers/Learning/voipservices', '960'),
                exact: true,
                sidebar: "customerSidebar"
              },
              {
                path: '/docs/customers/Onboarding/rmm',
                component: ComponentCreator('/docs/customers/Onboarding/rmm', 'fb3'),
                exact: true,
                sidebar: "customerSidebar"
              },
              {
                path: '/docs/games/fivepd',
                component: ComponentCreator('/docs/games/fivepd', '2e4'),
                exact: true,
                sidebar: "gameSidebar"
              },
              {
                path: '/docs/games/intro',
                component: ComponentCreator('/docs/games/intro', '87a'),
                exact: true,
                sidebar: "gameSidebar"
              },
              {
                path: '/docs/games/PhoenixTech Reloaded/intro',
                component: ComponentCreator('/docs/games/PhoenixTech Reloaded/intro', '281'),
                exact: true,
                sidebar: "gameSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '14c'),
                exact: true,
                sidebar: "introSidebar"
              },
              {
                path: '/docs/mdm',
                component: ComponentCreator('/docs/mdm', '7eb'),
                exact: true,
                sidebar: "introSidebar"
              },
              {
                path: '/docs/server/login',
                component: ComponentCreator('/docs/server/login', 'd49'),
                exact: true,
                sidebar: "serverSidebar"
              },
              {
                path: '/docs/server/Media Server and Requests/jellyfin',
                component: ComponentCreator('/docs/server/Media Server and Requests/jellyfin', 'b9f'),
                exact: true,
                sidebar: "serverSidebar"
              },
              {
                path: '/docs/server/Media Server and Requests/jellyseerr',
                component: ComponentCreator('/docs/server/Media Server and Requests/jellyseerr', 'fc1'),
                exact: true,
                sidebar: "serverSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
