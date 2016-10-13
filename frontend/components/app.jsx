import React from 'react';
import Header from './header/header-container';
import BurgerDrop from './header/sidebar/burger-dropdown-container';
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showSide: false
    };
    this.toggleBurger = this.toggleBurger.bind(this);
  }

  toggleBurger(){
    const $side = $("#burger-sidebar-container");
    if(this.state.showSide){
      $side.hide();
    }else{
      $side.show();
    }
    this.setState({showSide: !this.state.showSide});
  }

  render(){
    const { children, location } = this.props;
    const { showSide } = this.state;
    const currentUser = store.getState().session.currentUser;
    const sidebar =
      showSide ? <BurgerDrop path={location.pathname + location.search}/> : null;
    return(
      <main>
        <header className="header">
          <Header toggleBurger={this.toggleBurger}/>
        </header>
        <div className="content group">
          <sidebar id="burger-sidebar-container">
            {sidebar}
          </sidebar>
          <div className="main-content">
            {children}
          </div>
        </div>
      </main>
    );
  }
}
