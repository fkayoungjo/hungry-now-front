import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation.js';
import Home from './Home.js';
import Search from './Search.js';
import Profile from './Profile.js';
import SignUp from './Signup.js';
import Login from './Login.js';
import {Switch, Route, withRouter} from 'react-router-dom';


class App extends Component {
  state = {
    time: null,
    hour: null,
    user: null,
    favorites: [],
    userFavs: []

  }

  componentDidMount() {
    this.getTime()
    this.getUser()
    this.getFavorites()
    this.getUserFavs()
  }



  handleClick = (e)=> {
    console.log(e.target.name, e.target.id, this.state.user.id)
      fetch("http://localhost:3000/api/v1/favorites",{
        method: 'POST',
        body: JSON.stringify({
          label: e.target.name,
          user_id: this.state.user.id,
          url: e.target.id

        }),
        headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`
       }
      })
    .then(res=>res.json())
    .then(fav=>{
     let newArr=[...this.state.favorites, fav]
      this.setState({
        favorites: newArr
      })
  })
    }

  signupFormSubmitHandler = (e, userInfo) => {
    e.preventDefault();
    this.createUser(userInfo);
    this.props.history.push("/profile");
  };


  loginSubmitHandler = (e, userInfo) => {
    e.preventDefault();
    this.signinUser(userInfo);
    this.props.history.push("/profile");
    window.location.reload();
  };

  createUser = userInfo => {
    fetch("http://localhost:3000/api/v1/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user: {

          password: userInfo.signupPassword,
          email: userInfo.email,
          avatar: userInfo.avatar,
          name: userInfo.name
        }
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        localStorage.setItem("token", resp.jwt);
        this.setState({
          user: resp.user
        });
      });
  };

  getUser = () => {
   let token = localStorage.getItem("token")
   if (token !== null ) {
   return fetch('http://localhost:3000/api/v1/current_user', {
     method: 'GET',
     headers: {
       "Content-Type": "application/json",
       Action: "application/json",
       Authorization: `Bearer ${token}`
     }
   })
   .then(res => res.json())
   .then(res => {
     this.setState({user: res.user})
   })
 }
 }

 getFavorites = () => {
   let token = localStorage.getItem("token")
   if (token !== null ) {
   return fetch('http://localhost:3000/api/v1/favorites', {
   method: 'GET',
   headers: {
     "Content-Type": "application/json",
     Action: "application/json",
     Authorization: `Bearer ${token}`
   }
 })
 .then(res => res.json())
 .then(res => {
   this.setState({favorites: res})
 })
}
}

 getUserFavs = () => {
   let token = localStorage.getItem("token")
   if (token !== null ) {
   return fetch("http://localhost:3000/api/v1/favorites",{
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
  .then(res=>res.json())
  .then(arrayOfFavorites=>{
    let myFavs=[...this.state.favorites].filter(favorite=>{
      return favorite.user_id === this.state.user.id
    })
    this.setState({
    userFavs: myFavs
      })

    })
}
}

deleteFav = (e) => {
  let token = localStorage.getItem("token")
  if (token !== null ) {
   e.preventDefault()
   fetch(`http://localhost:3000/api/v1/favorites/${e.target.id}`,{
     method: 'DELETE',
     headers:{
       'Content-Type': 'application/json',
       Accept: 'application/json',
       Authorization: `Bearer ${token}`
     }
   })
   .then(window.location.reload())
 }
}


  signinUser = userInfo => {
    fetch("http://localhost:3000/api/v1/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user: {
          email: userInfo.email,
          password: userInfo.loginPassword
        }
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        localStorage.setItem("token", resp.jwt);
        this.setState({
          user: resp.user
        });
      });
      console.log("done!");
  };

  handleLogOut = () => {
    console.log("logOut");
    localStorage.removeItem("token");
    this.setState({
      user: {}
    });
    this.props.history.push("/")
  };


  getTime = () => {
    var today = new Date();
    var minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
    var timeNow = today.getHours() + ":" + minutes ;
      this.setState({
        time: timeNow,
        hour: today.getHours()
      })
  }


  render() {

  return (
      <div className="App">
        <header className="App-header">
          <Navigation time={this.state.time}/>
          </header>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/search' render={(props) => <Search {...props} time={this.state.time} hour={this.state.hour} handleClick={this.handleClick} user={this.state.user}/>} />
          <Route exact path= '/profile' render={()=> (this.state.user) ? <Profile user={this.state.user} logout={this.handleLogOut} userFavs={this.state.userFavs} deleteFav={this.deleteFav}/> : <Login loginSubmitHandler={this.loginSubmitHandler}/>}/>
          <Route exact path="/signup" render={() => (
        <SignUp signupFormSubmitHandler={this.signupFormSubmitHandler}/>
        )
      }/>
      <Route exact path="/login" render={() => (
        <Login loginSubmitHandler={this.loginSubmitHandler}/>
        )
      }/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
