import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Home'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

  const dispatch = useDispatch();


  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/browse',
      element: <Browse/>
    },
    {
      path: '/auth',
      element: <Login/>
    }
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email , displayName} = user;
        dispatch(addUser({uid : uid , email : email , displayName : displayName}));
        // ...
      } else {
        dispatch(removeUser());

      }
    });
  },[])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body