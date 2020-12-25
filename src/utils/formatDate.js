export default (date) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const now = new Date(date)
    return `${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`
}
