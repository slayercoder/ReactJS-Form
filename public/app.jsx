//// ReactJS form
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input : '',
            submit : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({input : e.target.value});
    }
    handleSubmit(){
        this.setState({submit : this.state.input});
        this.setState({input : ''});
    }
    render(){
        return(
            <div>
                <h1>Sample ReactJS Form</h1>
                <Input localInput = {this.handleChange} localValue = {this.state.input}/>
                <Submit localSubmit = {this.handleSubmit}/>
                <TempResult temp = {this.state.input}/>
                <Result localResult = {this.state.submit}/>
            </div>
        );
    }
}

const Input = function(props){
    return(
        <input onChange = {props.localInput} value = {props.localValue}/>
    );
}

const Submit = function(props){
    return(
        <button onClick = {props.localSubmit}>Submit</button>
    );
}

const TempResult = function(props){
    return(
        <h3>
            <br/>
            {props.temp}
        </h3>
    );
}
const Result = function(props){
    return(
        <div>
            <h3>Final Submit Value will come below</h3>
            <h1>{props.localResult}</h1>
        </div>
    );
}

ReactDOM.render(<Form/>,document.getElementById('root'));