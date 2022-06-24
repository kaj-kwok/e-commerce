import React from 'react'
import Head from "next/head"
import Image from "next/image"
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
            <li className='hover:underline'>New Releases</li>
            <li className='hover:underline'>Men</li>
            <li className='hover:underline'>Women</li>
            <li className='hover:underline'>Kids</li>
            <li className='hover:underline'>Sale</li>
          </ul>
        </div>
        <div className="ml-auto">
          <ul className="flex flex-row gap-5 items-center">
            <li className='hover:underline'>Contact Us</li>
            <li className="relative hover:underline"><Cart width={50} height={50} />
              <div className="absolute -top-1 -right-1 rounded-full w-8 h-8 flex justify-center items-center bg-slate-600">0</div>
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

