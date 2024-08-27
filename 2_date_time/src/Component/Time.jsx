function Time(){

    const currentDate = new Date()
    const day = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    const formatDate = `${day}:${month}:${year}`

    const hour = currentDate.getHours()
    const minute = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()
    const formatTime = `${hour}:${minute}:${seconds}`

    return(

        <p>This is the current date {formatDate} and time is {formatTime}</p>

    );

}

export default Time