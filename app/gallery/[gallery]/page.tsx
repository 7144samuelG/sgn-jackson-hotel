"use client"
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const GallerySingle=()=> {
  const para=useParams()
  console.log(para.gallery)
  return (
    <div>
      <Image src={`/images/${para.gallery}`} width={400} height={400} alt=''/>
    </div>
  )
}
export default GallerySingle
