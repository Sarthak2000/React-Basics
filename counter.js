class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }

    increment=()=>{
       this.setState({
           count:this.state.count+1
       }) 
    }
    
    decrement=()=>{
        this.setState({
            count:this.state.count-1
        }) 
    }
    
    reset=()=>{
        this.setState({
            count:0
        }) 
    }
    render(){
        let count=this.state.count;
        return(
            <React.Fragment>
                <div className="badge bg-secondary mx-2">{count}</div>
                <div>
                    <button className="btn btn-success m-2" onClick={this.increment}>+</button>
                    <button className="btn btn-danger m-2" onClick={this.decrement}>-</button>
                    <button className="btn btn-dark m-2" onClick={this.reset}>Reset</button>
                </div>
            </React.Fragment>
        )
    }
}
ReactDOM.render(<Counter></Counter>,document.querySelector('#root'));