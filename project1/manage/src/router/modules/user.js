import Layout from '@/views/layout/Layout'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: '/user/list',
  name: 'User',
  meta: {
    title: 'User',
    icon: 'peoples'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/user/list'),
      name: 'userList',
      meta: { title: 'userList' }
    }
  ]
}
export default userRouter
