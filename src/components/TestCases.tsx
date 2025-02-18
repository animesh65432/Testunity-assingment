import React from 'react'
import { TestCasesHeader, TestCaseDataTable } from "@/components/index"
import { data } from "@/lib/data"
import { colums } from "./TestCaseTablecolumn"

const TestCases: React.FC = () => {
    return (
        <div className='p-8 flex flex-col gap-20 '>
            <TestCasesHeader />
            <TestCaseDataTable data={data} columns={colums} />
        </div>
    )
}

export default TestCases