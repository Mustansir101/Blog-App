import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

// featuredImg = fileId

function PostCard({ $id, title, featuredImg }) {    // props from appwrite

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImg)} alt={title} className='rounded-xl'/>
            </div>
            <h2 className='text-xl'> {title} </h2>
        </div>
    </Link>
  )
  
}

export default PostCard