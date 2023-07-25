import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type FamilyProps= {
    imageFamily:string,
    text:string,
    buttonText:string
  }
 const Family:React.FC<FamilyProps>=({imageFamily,text,buttonText})=>{
  return (
    <div className="mt-7 bg-blue-500">
        <Link href='/' legacyBehavior>
            <a className='text-center border bg-blue-500 text-white'>
                <Image src={`/images/${imageFamily}`} width={300} height={300} alt='' className='w-full md:w-[300px]'/>
                <h1 className='text-3xl font-semibold '>{text}</h1>
                <div className="flex justify-center">
                <button className="my-3 py-3 border-2 bg-blue-600 text-white rounded-sm text-xl px-5">
              {buttonText}
          </button>
                </div>
            </a>
        </Link>
    </div>
  )
}
export default Family
