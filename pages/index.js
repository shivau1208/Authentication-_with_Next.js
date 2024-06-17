"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function index (){
  const router = useRouter();
  useEffect(()=>{
    router.push('/auth/signin')
  },[router])
  return null;
}
