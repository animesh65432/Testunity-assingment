import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar: React.FC = () => {
    return (
        <div className='flex flex-col gap-4 md:gap-6 '>
            <div className='flex font-bold mt-6 md:mt-9 pl-10 '>
                TB Copilot
            </div>
            <div className='flex flex-col gap-20 md:gap-32 font-medium'>
                <div className='flex flex-col gap-4 md:gap-5 font-medium pl-10 mt-0'>
                    <div >Dashboard</div>
                    <div>Test Plan</div>
                    <div className='font-semibold'>
                        <Select>
                            <SelectTrigger className="md:w-[15vw] w-[25vw] border-none shadow-none focus:ring-0 focus:outline-none p-0 text-xs md:text-sm">
                                <SelectValue placeholder="Create Test" />
                            </SelectTrigger>
                            <SelectContent className='flex justify-center p-0'>
                                <SelectItem value="light">Test Cases</SelectItem>
                                <SelectItem value="dark" >Shared Steps</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div >Test Suites</div>
                    <div>Test Run</div>
                    <div>Test Data</div>
                </div>
                <div className='flex flex-col justify-center pl-10 gap-3 md:gap-4'>
                    <div >Integration</div>
                    <div >Settings</div>
                    <div>View Documentation</div>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-2 pl-10'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className='font-medium flex flex-col text-xs lg:text-base'>
                        <div >
                            Ravikant Sanepara
                        </div>
                        <div >
                            ravikant@brainji.com
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Navbar;