import React, { Component } from 'react'
import Matter from '../../components/Matters/Matter'
import { connect } from 'react-redux'
import { fetchMatters } from '../../redux/actions/mattersActions';
import { Link } from "react-router-dom";
import { Route } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './Matter.css'

class Matters extends Component {

    componentDidMount(){
      console.log(this.props)
        this.props.fetchMatters()
    }

    render() {

      let { match, matters } = this.props

        return (
          <React.Fragment>
            <div className="matter" >
            <h3>Your Matters</h3>
            <Paper style={{ overflow:'hidden',margin: '5px', display: 'flex',justifyContent: 'space-between' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>MATTER</TableCell>
                  <TableCell>CLIENT</TableCell>
                </TableRow>
              </TableHead>    
              <TableBody>
                {this.props.matters.map((matter => (
                  <TableRow key={matter.id} >
                    <TableCell>
                        <Link to={`/matters/${matter.id}`}>{matter.case_title} </Link>                                    
                    </TableCell>
                    <TableCell>
                        {matter.client}
                    </TableCell>
                  </TableRow>
                )))}
              </TableBody>    
            </Table>   
            </Paper>
          </div>
          {/* <Route 
            path={`${this.props.match.url}/:id`} 
            // path={`${/matters/id`}}
            render={routerProps => <Matter {...routerProps} matters={matters} /> }/> */}
          </React.Fragment>
        )
    }
}

const mDTP = dispatch => {
    return {
      fetchMatters: () => dispatch(fetchMatters())
    }
}

// const mSTP = (state) => ( {state} )
const mSTP = state => {
  return {matters: state.matters};
}

// const mSTP = state => {
//     return {
//         // matters: console.log(state.matters)
//         matters: state
//     }
// }

export default connect(mSTP, mDTP)(Matters);

/*

/matters = list of all matters
- this matters container will hold a list of all my matters title and matters client with links. 
- each

*/