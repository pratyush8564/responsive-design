import React from 'react'
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Logout from '../../components/Logout';
import { auth } from '../../auth';
 const HomePage = async() => {

    const session = await auth();
    if(!session?.user) redirect("/")
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col items-center m-4'>
<h1>{session?.user?.name}</h1>
<Image
 src={session?.user?.image || "defaultImage"} 
 alt={session?.user?.name|| "User Image"}
  width={72}
 height={72}
className="rounded-full"
/>
<Logout/>
</div>
    </div>
  )
}
 export default HomePage
