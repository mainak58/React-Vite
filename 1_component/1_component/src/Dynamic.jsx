function Hello() {

    let myName = "Mainak"
    let fullName = () => {
        return 'mainak karmakar'
    }
    return (
        <div>
            <h3>Hello this is a dynamic component {myName}</h3>
            <h2>Wait for my full name {fullName()}</h2>
        </div>
    );
}

export default Hello