import React, { Component } from 'react'

class ErrorHandler extends Component {

    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }

    componentDidCatch(error,info){
        this.setState({ hasError: true });

        console.log('Oops! Someting Went wrong',error);
        
    }


    render() {

        if(this.state.hasError)
        console.log('Error Occured!')

        return( 
            <h1>Something went wrong!</h1>
            );
      
        
    }
}

export default ErrorHandler;
