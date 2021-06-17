// op1 => declare tags and info inside render
// ReactDOM.render(<h1>Hi from React</h1> , document.querySelector("#root"));

//op2.1 => using Components
// function Hello(){
//     return(<h1>Hello From Components</h1>)
// }
// ReactDOM.render(<Hello></Hello> , document.querySelector("#root"));

// op2.2 Passing Parameters using Components
// function Hello(props) {
//     return (<h1>Hello From {props.name} Components</h1>)
// }
// ReactDOM.render(<Hello name="Sarthak"></Hello>, document.querySelector("#root"));


// op2.3 Passing tags using Components
// function BigHello() {
//     return (<React.Fragment>
//         <Hello></Hello>
//         <Hello></Hello>
//         <Hello></Hello>
//         <Hello></Hello>
//         <Hello></Hello>
//     </React.Fragment>);
// }
// function Hello() {
//     return (<h1>Hello From Baby Components</h1>)
// }
// ReactDOM.render(<BigHello></BigHello>, document.querySelector("#root"));


let arr = ["Chandler", "Joey", "Monica", "Ross", "Rachel"];
// op2.4 Passing tags and values using Components
// Traverse the array by mapping the arr to Hello Component and pass them as props
function BigHello() {
    return (
        <React.Fragment>
            {arr.map(function (name) {
                return (<Hello key={name} name={name}></Hello>)
            })
            }
        </React.Fragment>

    );
}
function Hello(props) {
    return (<h1>Hello From {props.name} Components</h1>)
}
ReactDOM.render(<BigHello></BigHello>, document.querySelector("#root"));


