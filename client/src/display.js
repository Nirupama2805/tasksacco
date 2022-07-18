import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Form from "./Form";
import Page from "./Page";
import { Link } from "react-router-dom";
// import {withRouter} from 'react-router-dom'
import {useHistory} from 'react-router-dom'


class Display extends Component {
  constructor(props) {
    super(props);

console.log("props",this.props)
    this.state = {
      post: {
        projectName: "",
        projectTarget: "",
        countries: "India",
        ageGroup: "Below 18",
        gender: "Male",
        ethinicity: "White",
        maritalStatus: "Single",
        education: "High School",  
      },
      jobs: []
    };
  }

  handleChange = e =>{
    const { name, value } = e.target;
console.log(e,name,value);
    this.setState(prevState => ({
      post: { ...prevState.post, [name]: value }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      jobs: [...prevState.jobs, prevState.post],
      post: { projectName: "",
        projectTarget: "",
        countries: "India",
        ageGroup: "Below 18",
        gender: "Male",
        ethinicity: "White",
        maritalStatus: "Single",
        education: "High School",  
      }
    }))
     

  };

  render() {
    return (
      <div className="App">
        <Form
        />
      </div>
    );
  }
}

export default Display