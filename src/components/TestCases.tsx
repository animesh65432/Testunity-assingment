import React, { useState } from 'react';
import { TestCasesHeader, TestCaseDataTable } from "@/components/index";
import { data } from "@/lib/data";
import { columns } from "./TestCaseTablecolumn";

const TestCases: React.FC = () => {
    const [globalFilter, setGlobalFilter] = useState('');
    console.log(globalFilter, "globalfilter")
    return (
        <div className='lg:p-8 p-1 flex flex-col gap-20 '>
            <TestCasesHeader globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
            <TestCaseDataTable data={data} columns={columns} setGlobalFilter={setGlobalFilter} globalFilter={globalFilter} />
        </div>
    );
};

export default TestCases;
