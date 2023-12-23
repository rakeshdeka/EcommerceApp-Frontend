import React from 'react'
import { Link } from 'react-router-dom'

const AddressBook = () => {
  return (
    <div className='p-10'>
        <div>
            <Link to="/user">
            <span> ⬅️back to profile</span>
            </Link>
            <p className='text-xl font-bold pt-10'>Working on it</p>
        </div>
    </div>
  )
}

export default AddressBook