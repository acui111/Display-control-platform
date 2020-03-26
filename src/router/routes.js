import HeaderMenu from '../components/common/HeaderMenu'
import ScreenManagement from '../pages/ScreenManagement/ScreenManagement'
import SceneDetail from '../pages/SceneDetail/SceneDetail'
import SceneAdd from '../pages/SceneAdd/SceneAdd'
import SceneEdit from '../pages/SceneEdit/SceneEdit'
export default[
  // 整个项目的一级路由
  {
    path:'/home',
    component:HeaderMenu,
    children:[
      // 屏幕管理
      {
        path:'/home/screenmanagement',
        component:ScreenManagement
      },
      //场景详情
      {
        path:'/home/scenedetail',
        component:SceneDetail
      },
      //添加场景
      {
        path:'/home/sceneadd',
        component:SceneAdd
      },
      //场景编辑
      {
        path:'/home/sceneedit',
        component:SceneEdit
      }
    ]
  },
  //路由重定向
  {
    path:'/',
    redirect:'/home/screenmanagement'
  }
]