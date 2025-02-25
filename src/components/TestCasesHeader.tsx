import React, { Dispatch, SetStateAction } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Navbar } from "@/components";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { FaRegShareSquare } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { Button } from "@/components/ui/button";

type Props = {
    globalFilter: string;
    setGlobalFilter: Dispatch<SetStateAction<string>>;
};

const TestCasesHeader: React.FC<Props> = ({ globalFilter, setGlobalFilter }) => {
    return (
        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full p-4'>
            <div className='lg:hidden self-start'>
                <Sheet>
                    <SheetTrigger>
                        <CiMenuBurger className="w-6 h-6" />
                    </SheetTrigger>
                    <SheetContent>
                        <Navbar />
                    </SheetContent>
                </Sheet>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 items-center w-full md:w-auto'>
                <div className='font-medium text-xl sm:text-2xl whitespace-nowrap'>Test Cases</div>
                <div className="relative w-full sm:w-auto min-w-[200px]">
                    <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                    <Input
                        className="pl-10 bg-white w-full"
                        placeholder="Search..."
                        value={globalFilter}
                        onChange={(event) => setGlobalFilter(event.target.value)}
                    />
                </div>
                <div className='flex gap-2'>
                    <div className='border p-2 bg-white border-slate-950 rounded-md cursor-pointer hover:bg-gray-50'>
                        <FiShare className="w-4 h-4" />
                    </div>
                    <div className='border p-2 bg-white border-slate-950 rounded-md cursor-pointer hover:bg-gray-50'>
                        <FaRegShareSquare className='w-4 h-4' />
                    </div>
                </div>
            </div>

            <div className='flex gap-2 mt-4 md:mt-0 ml-auto'>
                <Button variant="outline" className='whitespace-nowrap text-sm '>
                    Generate Test Cases
                </Button>
                <Button className='bg-violet-600 hover:bg-violet-800 whitespace-nowrap text-sm '>
                    Create Test Cases
                </Button>
            </div>
        </div>
    );
};

export default TestCasesHeader;
