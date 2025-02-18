import React from 'react'
import { Navbar, TestCases } from "@/components"

const App: React.FC = () => {
  return (
    <div className="grid gap-2 grid-cols-12 h-[100vh]">
      <div className='lg:col-span-3 col-span-12 lg:block hidden'>
        <Navbar />
      </div>

      <div className='lg:col-span-9 col-span-12 bg-gray-100'>
        <TestCases />
      </div>
    </div>
  )
}

export default App
