import React, { Component } from 'react';
import Matters from './containers/MattersContainer/Matters'
import Tasks from './containers/TasksContainer/Tasks'

import Matter from './components/Matters/Matter'
import Modal from './components/Modal'
import { Route, Switch } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import { connect } from 'react-redux'
import Navbar from './components/Navbar/NavBar'
import Sidebar from './components/Sidebar'


class App extends Component {

  state = {
    showModal: false
  }

  getModal = () => {
    this.setState({showModal: true})
  }

  closeModal = () => {
    this.setState({showModal: false})
  }

  newMatterHandler = () => {
    this.setState(
        {showModal: true }
    )
}


  render() {
    return (
      
      <React.Fragment>
         <Navbar createMatter={this.newMatterHandler}/>
        <Modal show={this.state.showModal} modalClosed={this.closeModal}>  
        </Modal>
          <Switch>
            <Route exact path='/' >
              <Dashboard />
            </Route> 
            <Route exact path='/matters' component={Matters} />
            <Route exact path='/tasks' component={Tasks} />
            <Route exact path='/matters/new' />
            <Route exact path='/matters/:id' render={(routerProps) => {
              console.log(routerProps)
            }}/>

          </Switch>
     
      </React.Fragment>

    )
  }
}

const mSTP = state => {
  return {
    // matters: console.log(state.matters)
    matters: state.matters

  }
}

// export default App;
export default connect(mSTP)(App);


/*
- I want to be able to create a new matter in my homepage (maybe as well as in my matters   
  container).
- RouterProps:
  - console.log(routerProps)}
    - history
    - location
    - match

- matters: console.log(state.matters)
    ==> state.matters provides me list of all my matters

*/