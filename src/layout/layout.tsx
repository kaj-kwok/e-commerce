import React from 'react'
import Head from "next/head"
import Image from "next/image"
import { Cart } from '../icons/icons'

const Layout = ({ children }: any) => {
  return (
    <div className="w-full">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Quokka Products</title>
      </Head>
      <nav className="flex flex-row text-xl justify-between items-center">
        <ul className="flex flex-row gap-5">
          <li>Home</li>
          <li>Products</li>
        </ul>
        <ul className="flex flex-row gap-5 items-center">
          <li>Contact Us</li>
          <li><Cart width={50} height={50} />
          </li>
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default Layout

