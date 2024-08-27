import Proptypes from 'prop-types'

function UserGreeting(props) {

    // if (props.isloggedin) {
    //     return <h1>the name is {props.name}</h1>
    // }
    // else{
    //     return <h1>you are not logged in</h1>
    // }

    // using ternary

    return (props.isloggedin ? <h2>welcome to this {props.name}</h2> : <h2>You are not logged in</h2>)
}

UserGreeting.Proptypes = {
    isloggedin: Proptypes.bool ,
    name: Proptypes.string
}

UserGreeting.defaultProps = {
    isloggedin: false ,
    name:"Guest"
}
export default UserGreeting

