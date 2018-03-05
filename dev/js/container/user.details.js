import React, {Component} from 'react';
import {connect} from 'react-redux';


// USER ACTIVE COMPONENT 
class UserActive extends Component{
    render(){
        if(!this.props.activeUser){
            return (<h4>Select a user</h4>)
        }
        return(
            <div>
            <h4>{this.props.activeUser.name}</h4>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        activeUser: state.ActiveUser
    }
}

export default connect(mapStateToProps)(UserActive)


