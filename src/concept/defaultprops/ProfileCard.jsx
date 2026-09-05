import React from 'react'
const defaultimg="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
const ProfileCard = ({url=defaultimg,name="User",friends=[]}) => {
  return (
    <div>
        <img src={url} alt="" width={100} />
        <h3>{name}</h3>
        <ol>
            {
                friends.map((ele)=>{
                    return <li>{ele}</li>
                })
            }
        </ol>
    </div>
  )
}

export default ProfileCard