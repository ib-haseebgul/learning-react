import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state ={hasError: false, error: null, errorInfo: null}
    }
    static getDerivedStateFromError(error){
        return {hasError: true, error: error}
    }
    render(){
        if(this.state.hasError){
            return (
                <div>
                    <h2>OOPs! Error Loading Page</h2>
                    <p>{this.state.error && this.state.error.message}</p>
                </div>
            )
        }
        return this.props.children;
    }
}
export default ErrorBoundary