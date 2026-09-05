import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='w-full h-screen flex '>

        <div className='w-[20%] h-full flex justify-center pt-5  '>
            <ul className='w-[75%] h-[50%] flex flex-col justify-around  '>
                <li className=" text-black cursor-pointer hover:text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                    <Link>Dashbord</Link>
                </li>
                <li className=" text-black cursor-pointer hover:text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                    <Link>Users</Link>
                </li>
                <li className=" text-black cursor-pointer hover:text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                    <Link>Profile</Link>
                </li>
                <li className=" text-black cursor-pointer hover:text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                    <Link>Settings</Link>
                </li>
                <li className=" text-black cursor-pointer hover:text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                    <Link>Albums</Link>
                </li>
            </ul>
        </div>
        <div className='w-[80%] h-full bg-orange-300'>

        </div>
    </div>
  )
}

export default Dashboard