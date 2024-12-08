import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/rohitpandhare')
    //     .then(Response => Response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // })

  return (
    <div className='text-center 3=m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <img  src={data.avatar_url} alt='Git picture' width={300} className='rounded-2xl'/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const Response = await fetch('https://api.github.com/users/rohitpandhare')
    return Response
}