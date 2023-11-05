function Message(){
    //jsx syntax
    const name='Uday';
    if (name)
        return <h1>hello {name}</h1>;
    return <h1>hello world</h1>;
}

export default Message;