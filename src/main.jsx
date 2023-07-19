import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Root from './pages/Root';
import Videos from './pages/Videos';
import VideoDetail  from './pages/VideoDetail';
import NotFound from './pages/NotFound';
const router = createBrowserRouter([
  // Outlet을 활용하는 경우가 아니라면 children 에 추가되면 안된다.
  // Outlet 이란 무엇인가? 특정화면 을 공유하면서 특정 부분만 바뀌도록 해주는 것

  {
    path: "/",
    element: <Root/>,
    // 해당 Root 안에서 Outlet 을 불러주고 있다. 
    errorElement: <NotFound/> ,
    children:[
      { index: true, element: <Videos/> }
      , {path:'/videos' , element: <Videos/>}
      , {path: '/videos/:searchName' , element : <Videos/>}
      , {path: '/videos/watch/:videoId' , element: <VideoDetail/>}
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
