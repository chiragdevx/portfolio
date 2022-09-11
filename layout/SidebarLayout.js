import React from 'react'
import LeftSidebar from '../components/Secondary/LeftSidebar'
import RightSidebar from '../components/Secondary/RightSidebar'
import styles from "./SidebarLayout.module.css"
const SidebarLayout = ({children}) => {
  return (
    <div className={styles.layoutWrapper}> 
        <LeftSidebar/>
        {children}
        <RightSidebar/>
    </div>
  )
}

export default SidebarLayout