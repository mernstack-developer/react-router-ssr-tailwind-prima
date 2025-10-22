import React from 'react'
import { Outlet } from "react-router";
function layout({ children }: any) {
  return (
    <div>
      <h1>auth layout</h1>
      {children}
      <Outlet />
    </div>
  )
}

export default layout
