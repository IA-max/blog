import React from 'react';
import {Link} from 'gatsby';
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
                            <td key={i}><Link target={"_blank"} rel="noreferrer" to={t.content}>{t.title}</Link></td>
                        )
                    })
                }
            </tr>
        )
    })

    return (
        <>
            <table className={"fixTable mb-6"}>
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