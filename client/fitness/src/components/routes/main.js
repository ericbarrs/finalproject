import React from 'react';
import Header from "../Header"
import Input from "../inputField"
import Cards from "../cards"
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class Main extends React.Component {



  render() {
    if(this.props.isAuthenicated){
    return (
      <div className="Main">
      <div className='mainPage'>
      <Header/>
      <Input />
      <Cards />
      </div>
      </div>
    );
  }else{
    return <Redirect push to='/' />
  }
  }
}

function mapStateToProps(state){
  return{
      isAuthenicated: state.isAuthenicated
  }
} 

const MainContainer = connect(mapStateToProps)(Main)
export default MainContainer