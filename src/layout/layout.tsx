import React from 'react'
import Head from "next/head"
import { Cart } from '../icons/icons'

const Layout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Quokka Products</title>
      </Head>
      <nav className="flex flex-row text-xl items-center m-3 ">
        <div className="mr-auto invisible">
          <ul className="flex flex-row gap-5 items-center">
            <li className='hover:underline'>Contact Us</li>
            <li className="relative hover:underline"><Cart width={50} height={50} />
              <div className="absolute -top-1 -right-1 rounded-full w-8 h-8 flex justify-center items-center bg-slate-600">0</div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-row gap-5 text-center">
            <li className='hover:underline decoration-4 underline-offset-8 cursor-pointer'>New Releases</li>
            <li className='hover:underline decoration-4 underline-offset-8 cursor-pointer'>Men</li>
            <li className='hover:underline decoration-4 underline-offset-8 cursor-pointer'>Women</li>
            <li className='hover:underline decoration-4 underline-offset-8 cursor-pointer'>Kids</li>
            <li className='hover:underline decoration-4 underline-offset-8 cursor-pointer'>Sale</li>
          </ul>
        </div>
        <div className="ml-auto">
          <ul className="flex flex-row gap-5 items-center">
            <li className='hover:underline decoration-4 underline-offset-8 cursor-pointer'>Contact Us</li>
            <li className="relative hover:underline decoration-4 underline-offset-8 cursor-pointer"><Cart width={50} height={50} />
              <div className="absolute -top-1 -right-1 rounded-full w-8 h-8 flex justify-center items-center bg-gray-100">0</div>
            </li>
          </ul>
        </div>
      </nav>
      <div className='flex justify-center items-center mb-10 bg-gray-100 text-lg h-10'>Summer Sale, 50% OFF</div>
      {children}
    </div>
  )
}

export default Layout

