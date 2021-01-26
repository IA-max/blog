import React from 'react'
export const getDate =  (date) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const now = new Date(date)
    return `${monthNames[now.getMonth()]} ${now.getDate()}`
}


export const concatWords =  ({arrCount, index, children}) => {
    if (arrCount === 1) {
        return <> { children } </>
    }
    if (index + 2 < arrCount) {
        return <> { children }, </>
    }
    if (index + 1 === arrCount) {
        return ( <> { " " } { "&" } { children } </>
        )
    }
    return <> { children } </>
}
