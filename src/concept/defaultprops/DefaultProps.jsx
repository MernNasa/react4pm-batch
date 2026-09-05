import React from 'react'
import ProfileCard from './ProfileCard'
import CATIMG from "../../../public/cat.jpg"
const DefaultProps = () => {
    const userimgurl=CATIMG
  return (
    <div>
        <ProfileCard url={userimgurl} name="sundari" friends={["a","b","c"]}/>
        <ProfileCard  />

    </div>
  )
}

export default DefaultProps