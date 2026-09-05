import React from 'react'

const TailwindCssConcept = () => {
    const navlist=["home","about","help","project"]
  return (
    <nav className='w-full h-20 flex shadow-lg'>

        <div className='w-[20%] h-full  flex items-center justify-center text-4xl text-[red]'>Logo</div>

        <ul className='w-[60%] h-full flex items-center justify-around capitalize'>
            {
                navlist.map((ele,index)=>{
                    return <li key={index}>{ele}</li>
                })
            }
        </ul>
        <div className='w-[20%] h-full  flex items-center justify-center  text-[red]'>
           <button className='border-2 px-6 py-3 rounded-lg cursor-pointer  hover:bg-blue-400 hover:border-0'> Login</button>
        </div>
    </nav>
  )
}

export default TailwindCssConcept