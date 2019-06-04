import React, { Component } from 'react';
import {  FormGroup, Input, FormText, DropdownMenu, DropdownToggle, InputGroupButtonDropdown } from 'reactstrap';
import Select from 'react-select'

class DineIn extends Component {
  state= {
    dietDropDownOpen: false,
    intoleranceDropDownOpen: false,
    dietOptions: [{label: '', value: ''},
    {label: 'Vegan', value: 'vegan'},
    {label: "Vegetarian", value: "vegetarian"},
    {label: "Paleo", value: "paleo"},
    {label: "Pescatarian", value: "pescatarian"},
    {label: "Kosher", value: "kosher"},
  ],
    intoleranceOptions: [{label: 'Crustacean', value: 'crustacean-free'},
    {label: "Dairy", value: "dairy-free"},
    {label: "Egg", value: "egg-free"},
    {label: "Fish", value: "fish-free"},
    {label: "Gluten", value: "gluten-free"},
    {label: "Peanut", value: "peanut-free"},
    {label: "Pork", value: "pork-free"},
    {label: "Red Meat", value: "red-meat-free"},
    {label: "Sesame", value: "sesame-free"},
    {label: "Shellfish", value: "shellfish-free"},
    {label: "Soy", value: "soy-free"},
    {label: "Tree Nut", value: "tree-nut-free"},
    {label: "Wheat", value: "wheat-free"},
    ]
  }

  toggleDietDropDown = event => {
    this.setState({
      dietDropDownOpen: !this.state.dietDropDownOpen
    });
  }

  toggleIntoleranceDropDown = event => {
    this.setState({
      intoleranceDropDownOpen: !this.state.intoleranceDropDownOpen
    });
  }




  render() {

  return (
      <div>
        <div>
        <legend>My Diet</legend>
        <FormText> Select One or None</FormText>
        <InputGroupButtonDropdown addonType="append" isOpen={this.state.dietDropDownOpen} toggle={this.toggleDietDropDown}>
        <DropdownToggle caret>
        Diet
        </DropdownToggle>
        <DropdownMenu>
          <Select  options={this.state.dietOptions} defaultValue={this.props.diet} onChange={this.props.handleMultiChange}/>
        </DropdownMenu>
        </InputGroupButtonDropdown>
        </div>
        <div>
        <legend>Intolerances</legend>
        <FormText> Select Any That Apply or None</FormText>
        <InputGroupButtonDropdown addonType="append" isOpen={this.state.intoleranceDropDownOpen} toggle={this.toggleIntoleranceDropDown}>
        <DropdownToggle caret>
        Intolerances
        </DropdownToggle>
        <DropdownMenu>
          <Select  isMulti options={this.state.intoleranceOptions} defaultValue={this.props.intolerance} onChange={this.props.handleIntoleranceChange}/>
        </DropdownMenu>
        </InputGroupButtonDropdown>
        </div>
        <div>
        <FormGroup>
        <legend>Any Ideas?</legend>
        <Input type="ingredients" name="ingredientsString" id="ingredientsString" placeholder="Enter Ingredient here" onChange={this.props.handleChange} />
        <FormText>An idea can be anything. From a dish such as lasagna, a meat such as chicken or salmon, a fruit, vegetable, or anything you have on hand. Enter one.</FormText>
        </FormGroup>
        </div>
        <div>
        <FormGroup>
        <legend>Any Ingredient to Exclude?</legend>
        <Input type="ingredients" name="exclusionString" id="exclusionString" placeholder="Enter Ingredient here" onChange={this.props.handleChange} />
        <FormText>Exclude recipes with certain ingredients. Separate each ingredient with a space. Leave blank for no exclusion. </FormText>
        </FormGroup>
        </div>
      </div>
    );
  }
}

export default DineIn;
