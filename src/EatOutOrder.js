import React, { Component } from 'react';
import {  FormGroup, FormText, DropdownMenu, DropdownToggle, InputGroupButtonDropdown } from 'reactstrap';
import Select from 'react-select'

class EatOutOrder extends Component {
  state= {
    cuisineDropDownOpen: false,
    options: [{label: 'Afghani', value: '6'},
    {label: "African", value: "152"},
    {label: "American", value: "1"},
    {label: "Argentine", value: "151"},
    {label: "Armenian", value: "175"},
    {label: "Austrailian", value: "131"},
    {label: "Austrian", value: "201"},
    {label: "BBQ", value: "193"},
    {label: "Bakery", value: "5"},
    {label: "Burger", value: "168"},
    {label: "Cajun", value: "491"},
    {label: "Cambodian", value: "111"},
    {label: "Cantonese", value: "121"},
    {label: "Carribean", value: "158"},
    {label: "Chinese", value: "25"},
    {label: "Colombian", value: "287"},
    {label: "Cuban", value: "153"},
    {label: "Deli", value: "192"},
    {label: "Dessert", value: "100"},
    {label: "Dominican", value: "958"},
    {label: "Ethiopian", value: "149"},
    {label: "Filipino", value: "112"},
    {label: "Fish & Chips", value: "298"},
    {label: "French", value: "45"},
    {label: "Frozen Yogurt", value: "501"},
    {label: "Greek", value: "156"},
    {label: "Hungarian", value: "228"},
    {label: "Ice Cream", value: "233"},
    {label: "Indian", value: "148"},
    {label: "Italian", value: "55"},
    {label: "Jamaican", value: "207"},
    {label: "Japanese", value: "60"},
    {label: "Juices", value: "164"},
    {label: "Kebab", value: "178"},
    {label: "Korean", value: "67"},
    {label: "Latin American", value: "136"},
    {label: "Mediterranean", value: "70"},
    {label: "Mexican", value: "73"},
    {label: "Middle Eastern", value: "137"},
    {label: "Peruvian", value: "162"},
    {label: "Pizza", value: "82"},
    {label: "Ramen", value: "320"},
    {label: "Salad", value: "998"},
    {label: "Seafood", value: "83"},
    {label: "Soul Food", value: "461"},
    {label: "Southern", value: "471"},
    {label: "Spanish", value: "89"},
    {label: "Steak", value: "141"},
    {label: "Sushi", value: "177"},
    {label: "Tacos", value: "977"},
    {label: "Tapas", value: "179"},
    {label: "Thai", value: "95"},
    {label: "Turkish", value: "142"},
    {label: "Vegetarian", value: "308"},
    {label: "Vietnamese", value: "99"}
    ]
  }

  toggleCuisineDropDown = event => {
    this.setState({
      cuisineDropDownOpen: !this.state.dietDropDownOpen
    });
  }
  render() {

  return (
      <div>
        <div>
        <FormGroup>
        <legend>Cusine</legend>
        <FormText> Select Any That Apply or None</FormText>
        <InputGroupButtonDropdown addonType="append" isOpen={this.state.cuisineDropDownOpen} toggle={this.toggleCuisineDropDown}>
        <DropdownToggle caret>
        Cuisines
        </DropdownToggle>
        <DropdownMenu>
          <Select isMulti options={this.state.options} defaultValue={this.props.cuisine} onChange={this.props.handleMultiChange}/>
        </DropdownMenu>
        </InputGroupButtonDropdown>
        </FormGroup>
        </div>
      </div>
    );
  }
}

export default EatOutOrder;
