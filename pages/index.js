import React from 'react'

export default function index (){
  return (
    <div>
        {typeof window !== 'undefined' ? <a href={`${window.location.origin}/auth/signin`}>Sign In</a> : ''}
    </div>
  )
}
