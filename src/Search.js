import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input,  Modal, ModalHeader} from 'reactstrap';
import Cook from './Cook.js';
import Results from './Results.js';
import Login from './Login.js';
import ZomatoResults from './ZomatoResults.js';
import EatOutOrder from './EatOutOrder.js';


class Search extends Component {
  state= {
    type: "",
    diet: "",
    intolerance: "",
    exclusionString: "",
    ingredientsString: "",
    cuisine: [],
    results: null,
    modal: false,
    coordinates: {},

  }

  setType = (e) => {
    this.setState({
      type: e.target.value
      });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDietChange = option => {
    this.setState({
        diet: option}
    )}

    handleIntoleranceChange = option => {
      this.setState({
          intolerance: option}
      )}

  handleCuisineChange = option => {
      this.setState({
          cuisine: option}
      )}

      toggle = e => {
        this.setState({
            modal: !this.state.modal}
        )}

        componentDidMount() {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              this.setState({
                coordinates: position.coords,
              }, function() {
              })
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
          );
        }

  eatNow = e => {
    e.preventDefault()
    if(this.props.user !== null) {
    if(this.state.type === "cook") {
      if(4 < this.props.hour  && this.props.hour  < 10) {
        var dishType = 'breakfast'
      }else if (11 < this.props.hour  && this.props.hour  < 17) {
         dishType = 'lunch'
      }else if ((18 < this.props.hour  && this.props.hour  < 23) || (1 < this.props.hour  && this.props.hour  < 3)){
         dishType = 'dinner'
      }

      if(this.state.intolerance !== "" || this.state.diet !== "") {
        if(this.state.intolerance === "" && this.state.diet !== "") {
          var stringDiet= this.state.diet.value
        }else if (this.state.intolerance !== "" && this.state.diet === "") {
          var dietAllergy = this.state.intolerance
          var dietValues = dietAllergy.map(diet => diet.value)
          if(dietValues.length > 1){
           stringDiet = dietValues.join('&health=')
         }else {
           stringDiet = dietValues
         }
        }else if (this.state.intolerance !== "" && this.state.diet !== "") {
          var myIntolerance = this.state.intolerance
          var myDiet = this.state.diet
           dietAllergy = myIntolerance.concat(myDiet)
           dietValues = dietAllergy.map(diet => diet.value)
           stringDiet = dietValues.join('&health=')
        }


      var ingredients = this.state.ingredientsString
      var myIngredients = ingredients.split(",")
      var ingredientValues = myIngredients.map(ingredient => ingredient)
      var stringIngredient = ingredientValues

      var exclusions = this.state.exclusionString
      var exclusion = exclusions.split(",")
      var exclusionValues = exclusion.map(ingredient => ingredient)
      var stringExclusions = exclusionValues.join('&excluded=')

      fetch(`https://api.edamam.com/search?q=${stringIngredient}&app_id=aed04bf0&app_key=dc1964099b0157c83cad6e7501b0cb4e&from=0&to=25&diet=balanced&calories=350-900&excluded=${stringExclusions}&health=${stringDiet}&time=40&dishtype=${dishType}`)
      .then(response => response.json())
      .then(data => {
      this.setState({
        results: data,
        modal: !this.state.modal
      })
      console.log(this.state.results)
    })
  }else {
     ingredients = this.state.ingredientsString
     myIngredients = ingredients.split(",")
     ingredientValues = myIngredients.map(ingredient => ingredient)
     stringIngredient = ingredientValues

     exclusions = this.state.exclusionString
     exclusion = exclusions.split(",")
     exclusionValues = exclusion.map(ingredient => ingredient)
     stringExclusions = exclusionValues.join('&excluded=')

    fetch(`https://api.edamam.com/search?q=${stringIngredient}&app_id=aed04bf0&app_key=dc1964099b0157c83cad6e7501b0cb4e&from=0&to=25&diet=balanced&calories=350-900&excluded=${stringExclusions}&time=40&dishtype=${dishType}`)
    .then(response => response.json())
    .then(data => {
    this.setState({
      results: data,
      modal: !this.state.modal
    })
    console.log(this.state.results)
  })
  }
  } else if (this.state.type === "eatout") {
    if(4 < this.props.hour  && this.props.hour  < 10) {
      var category = '8'
    }else if (11 < this.props.hour  && this.props.hour  < 17) {
       category = '9'
    }else if ((18 < this.props.hour  && this.props.hour  < 23) || (1 < this.props.hour  && this.props.hour  < 3)){
      category = '10'
    }
    var cuisines = this.state.cuisine
     var cuisineList = cuisines.map(diet => diet.value)
     if(cuisineList.length > 1) {
     var list = cuisineList.join('%2C')
   } else {
     list = cuisineList
   }
   let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('user-key', '57800fe3a17bc04ca2e40cfb5cf036fc');
    let options = {
      method: 'GET',
      headers: headers
    };

  let url = `https://developers.zomato.com/api/v2.1/search?count=25&lat=${this.state.coordinates.latitude}&lon=${this.state.coordinates.longitude}&radius=12000&cuisines=${list}&category=${category}&sort=real_distance&order=asc`
    window.fetch(url, options)
    .then(response => response.json())
    .then(data => {
      this.setState({
        results: data.restaurants.map(restaurant => restaurant.restaurant),
        modal: !this.state.modal

      })
      console.log(this.state.results)
    })
  } else if (this.state.type === "order"){


     cuisines = this.state.cuisine
      cuisineList = cuisines.map(diet => diet.value)
     if(cuisineList.length > 1) {
      list = cuisineList.join('%2C')
   } else {
     list = cuisineList
   }

   let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('user-key', '57800fe3a17bc04ca2e40cfb5cf036fc');
    let options = {
      method: 'GET',
      headers: headers
    };
  let url = `https://developers.zomato.com/api/v2.1/search?count=25&lat=${this.state.coordinates.latitude}&lon=${this.state.coordinates.longitude}&radius=12000&cuisines=${list}&category=1&sort=real_distance&order=asc`
    window.fetch(url, options)
    .then(response => response.json())
    .then(data => {
      this.setState({
        results: data.restaurants.map(restaurant => restaurant.restaurant),
        modal: !this.state.modal

      })
      console.log(this.state.results)
    })
  }
}else {

  this.props.history.push('/login')

}
}


  render() {

  return (
      <div>
        <div>
          <Form >
            <FormGroup tag="fieldset" onChange={event => this.setType(event)}>
            <legend>I Want To...</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" value="cook" name="radio1" />{' '}
                    Cook
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" value="eatout" name="radio1" />{' '}
                    Eat Out
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" value="order" name="radio1" />{' '}
                    Order
                </Label>
              </FormGroup>
            </FormGroup>
            {this.state.type ==="cook" ? (<Cook handleChange={this.handleChange} handleMultiChange={this.handleDietChange} diet={this.state.diet} intolerance={this.state.intolerance} handleIntoleranceChange={this.handleIntoleranceChange}/> ) : null}
            {this.state.type ==="eatout"  ? (<EatOutOrder handleChange={this.handleChange}
              handleMultiChange={this.handleCuisineChange}/>) : null}
            {this.state.type ==="order"  ? (<EatOutOrder handleChange={this.handleChange} handleMultiChange={this.handleCuisineChange}/>) : null}
            <Button onClick={(event) => this.eatNow(event)}>Eat Now</Button>
            </Form>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Your Matches</ModalHeader>

            {this.state.type === "cook"  &&
            <Results results={this.state.results} user={this.props.user} handleClick={this.props.handleClick}/>
            }
            {this.state.type === "order"  &&
            <ZomatoResults results={this.state.results} user={this.props.user} handleClick={this.props.handleClick}/>
            }
            {this.state.type === "eatout"  &&
            <ZomatoResults results={this.state.results} user={this.props.user} handleClick={this.props.handleClick}/>
            }

            {this.props.user === null &&
            <Login />}
        </Modal>
      </div>
    );
  }
}

export default Search;
