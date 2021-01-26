import React from 'react';
import List from "./list"

const getYear = (date) => (new Date(date)).getFullYear();
const ListByYear = ({props}) => {
    let arr = [], table = [];
    props.forEach((item, index)=> {
        const condition = arr.indexOf(getYear(item.frontmatter.date));
        if(condition ===  -1)  return arr.push(getYear(item.frontmatter.date));
    });
    arr.forEach((item, index)=> {
        const fp = props.filter(ite=> getYear(ite.frontmatter.date) === item)
        table.push({
            year: item,
            data: fp
        });
    });
    return (
        <>
            {
                table.map((item, index) => {
                    return (
                        <div className="groupByYear" key={index}>
                            <h2 className="py-2 border-b-4 mt-4 mb-8 rounded text-3xl font-bold border-indigo-50">{item.year}</h2>
                            <ul>
                                {item.data.map(List)}
                            </ul>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ListByYear;