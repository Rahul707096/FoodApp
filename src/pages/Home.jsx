import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
   <>
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
       I Am Main Body Work on Process....
      </main>
      <Footer />
    </div>
   </>
  )
}
