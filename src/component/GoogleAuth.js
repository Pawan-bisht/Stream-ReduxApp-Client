import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { signIn, signOut } from './actions';

 class GoogleAuth extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            isSignedIn:null,
            auth:null,
            show:false
        }
    }

    componentDidMount()
    {
        window.gapi.load("client:auth2",()=>{
            window.gapi.client.init({
                clientId:"714651467754-929b9cutoim1f9flplsbheuban3jmfnq.apps.googleusercontent.com",
                scope:'email'
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({
                //     isSignedIn: window.gapi.auth2.getAuthInstance().isSignedIn.get()
                // })
                this.authChanged(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.authChanged);
            })
        });
    }

    authChanged = (isSignedIn) =>{
        /* 
            This call back actually get called with a boolean argument of either true or 
            false to indicate whether or not the user is currently signed Id
        */

        // this.setState({
        //     isSignedIn: this.auth.isSignedIn.get()
        // })
        // console.log(isSignedIn);
        if(isSignedIn)
        {
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{   
            this.props.signOut();
        }
    }

    onSignInClick = () =>{
        this.auth.signIn();
    }

    onSignOutClick = () =>{
        this.auth.signOut();
    }

    renderButton = () =>{
        if( this.props.isSignedIn === null)
        {
            return null;
        }
        else if (this.props.isSignedIn === true)
        {
            return <Button onClick={this.onSignOutClick} color="google plus" icon="google plus" content="SignOut" />
        }
        else
        {
            return <Button onClick={this.onSignInClick} color="google plus" icon="google plus" content="SignIn" />     
        }
    }

    render()
    {
            return(<div>{this.renderButton()}</div>); 
    }      
}

const mapStateToProps = (state)=>{
    // console.log(state);
    return { isSignedIn : state.auth.isSignedIn  };
}

export default connect(mapStateToProps, { signIn, signOut})(GoogleAuth);