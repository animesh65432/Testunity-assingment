import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Navbar } from "@/components"
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input"
import { FaRegShareSquare } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { Button } from "@/components/ui/button"

const TestCasesHeader: React.FC = () => {
    return (
        <div className='flex  items-center justify-between'>
            <div className='lg:hidden block'>
                <Sheet>
                    <SheetTrigger>
                        <CiMenuBurger className="w-6 h-6" />
                    </SheetTrigger>
                    <SheetContent>
                        <Navbar />
                    </SheetContent>
                </Sheet>
            </div>
            <div className='flex gap-5 items-center'>
                <div className='font-medium text-2xl'>
                    Test Cases
                </div>
                <div className="relative">
                    <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                    <Input
                        className="pl-10 bg-white"
                        placeholder="Search..."
                    />
                </div>
                <div className='border p-1 bg-white border-slate-950 rounded-md'>
                    <FiShare className="w-4 h-4 bg-white" />
                </div>
                <div className='border p-1 bg-white border-slate-950 rounded-md'>
                    <FaRegShareSquare className='w-4 h-4 bg-white' />
                </div>
            </div>
            <div className='flex gap-2'>
                <div>
                    <Button variant="outline">Generate Test Cases</Button>
                </div>
                <div>
                    <Button className='bg-violet-600 hover:bg-violet-800'>Create Test Cases</Button>
                </div>
            </div>
        </div>
    )
}

export default TestCasesHeader