import React from 'react';
const Table = ({props}) => {
    const {title, data} = props;
    const chunkSize = 4;
    const groups = data.map((e, i) => {
        return i % chunkSize === 0 ? data.slice(i, i + chunkSize) : null;
    }).filter(e => { return e; });
    const tbody = groups.map((txt, ind) => {
        return (
            <tr key={ind}>
                {
                    txt.map((t,i) => {
                        return (
                            <td key={i}><a target={"_blank"} href={t.content}>{t.title}</a></td>
                        )
                    })
                }
            </tr>
        )
    })

    return (
        <>
            <table className={"fixTable"}>
                <thead>
                    <tr key={title}>
                        <th colSpan={4}>
                            { title }
                        </th>
                    </tr>
                </thead>
                <tbody>
                { tbody }
                </tbody>
            </table>
        </>
    )
}

export default Table;