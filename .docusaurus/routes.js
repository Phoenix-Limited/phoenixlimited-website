import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ebb'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e2e'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '027'),
            routes: [
              {
                path: '/docs/games/intro',
                component: ComponentCreator('/docs/games/intro', '87a'),
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
