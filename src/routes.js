// import App from './App'
const ignoreAuth = {authorization: false}
export default [
  {
    path: '/login',
    name: 'login',
    meta: ignoreAuth,
    component: r => require(['src/views/login/login.vue'], r)
  },
  {
    path: '/',
    name: 'index',
    component: r => require(['src/views/index.vue'], r),
    children: [
      {
        path: 'no-page/:message',
        name: 'no-page',
        title: '',
        meta: ignoreAuth,
        component: r => require(['src/views/no-page.vue'], r)
      },
      {
        path: 'article/index',
        name: 'article',
        component: r => require(['src/views/article/article.vue'], r)
      },
      {
        path: 'catalog/index',
        name: 'catalog',
        component: r => require(['src/views/catalog/catalog.vue'], r)
      }
    ]
  }
]
