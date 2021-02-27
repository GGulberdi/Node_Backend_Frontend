import React,{Component} from 'react' 
import {Route, Redirect,Switch} from 'react-router-dom'
import Details from './Details';
import NotFound from './NotFound'
import Table from './Table'


class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      user:[],
      currentUser:{}
    }
  }
    
  componentDidMount = ()=>{this.getCostumers()}

//get all
 getCostumers = () => {
     fetch("http://localhost:3005/api/users")
     .then(result=>result.json())
     .then(data=> this.setState({user:data}))
     .catch(error=>console.log(error.message))
        
    }

    //get only one
getOneCostumer = (id) => {
      fetch(`http://localhost:3005/api/users/${id}`)
      .then(result=>result.json())
      .then(data=> this.setState({currentUser:data}))
      .catch(error=>console.log(error.message))
         
     }

handleSubmit = (data) => {
  const requestOptions = {
    method:'POST',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(data)
  }
      fetch("http://localhost:3005/api/users",requestOptions)
      .then(result=>result.json())
      .then(data=> this.setState({user:[...this.state.user,data]}))
      .catch(error=>console.log(error.message))
         
     }

updateCostumer = (data,id) => {
  const requestOptions={
    method:'PUT',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(data)
  }
      fetch(`http://localhost:3005/api/users/${id}`,requestOptions)
      .then(result=>result.json())
      .then(data=> console.log(data))
      .catch(error=>console.log(error.message))
         
}
     

render (){
    return (
        <div>
            <h1>React List</h1>            
            <Switch>
              <Route exact path='/users' render={(props)=>(
                <Table {...props} users={this.state.user} currentUser={this.state.currentUser} getOneCostumer={this.getCostumers} handleSubmit={this.handleSubmit}/>
              )}/>
              <Redirect exact to='/users' from ='/'></Redirect>
              <Route exact path='/users' render={(props)=>(
                <Details {...props}  currentUser={this.state.currentUser} getOneCostumer={this.getCostumers} updateCostumer={this.updateCostumer} />
              )}/>
              <Route  path='*' component={NotFound}/>

            </Switch>
                     
        </div>
    )
  }
}

export default List;
