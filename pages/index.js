"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function index (){
  const router = useRouter();
useEffect(()=>{
    let element = document.querySelector('btn-close');
    if(element){
      element.addEventListener('click',()=>{
        document.getElementById('liveAlertPlaceholder').classList.remove('active')
      })
    }
    router.push('/auth/signin')
  },[router])
  return null;
}
