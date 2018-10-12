import React from 'react';
import Header from "../Header"
import Input from "../inputField"
import Cards from "../cards"

export default class Main extends React.Component {

  render() {
    return (
      <div className="Main">
      <div className='mainPage'>
      <Header/>
      <Input />
      <Cards />
      </div>
      </div>
    );
  }
}