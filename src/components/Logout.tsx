import React from 'react'
import { doLogout } from '@/app/actions'

const Logout = () => {
  return (
   <form action={doLogout}>
<button className='bg-blue-800 my-2 text-white p-2 rounded' type='submit'>Logout</button>
   </form>
  )
}

export default Logout