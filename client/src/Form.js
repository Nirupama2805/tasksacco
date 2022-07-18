import React,{ useEffect, useState } from "react";
import './Form.css';
import { useSelector, useDispatch } from 'react-redux'
import { GetOptionsData, SaveDetails } from "./redux/Actions";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from './theme-context'

export default () => {
  const { theme, toggle, dark } = React.useContext(ThemeContext)

  const [post,setPost] = useState({
    post:{
        firstName: "",
        lastName:"",
        gender:"",
        languages: [
          {
            name : 'Telugu',
            isChecked : false
          },
          {
            name : 'English',
            isChecked : false
          },
          {
            name : 'Hindi',
            isChecked : false
          }
        ],
        eMail:"",
        address: "",
        state:"Andhra Pradesh",
        zip:"",
        creditCardType:""
     }
  })
  const options = useSelector(state=>state.option.Options)
  console.log("options",useSelector(state=>state.option))
  const navigate = useNavigate();
  const dispatch = useDispatch()
    useEffect(() => {
      
      
  dispatch(GetOptionsData())
    }, []);
    const {gender,languages,state,creditCardType} = options

  const handleChange = e =>{
    const { name, value } = e.target;
console.log("cha",e,name,value);

   setPost(prevState => ({
      post: { ...prevState.post, [name]: value }
    }));
  };
const handleCheckboxChange = e =>{
  const {name,value} = e.target;
  const exitObj = post.post.languages.find((lang) => lang.name === value);
    const newArray =post.post.languages.map((lang) => lang.name === exitObj.name ? {...lang,isChecked:!lang.isChecked} : lang)
    setPost(prevState => ({
      post: { ...prevState.post, languages : newArray }
    }));
}
  const handleSubmit = e => {
    if(post.post.firstName === "" ) {
      window.alert("please enter first name");
      return ;
    }
      if(post.post.lastName === "")
      {
window.alert("please enter last name");
return ;
      }
if(post.post.gender === "")
{
  window.alert("please enter your gender")
return ;
}

if(post.post.address === "")
{
  window.alert("please enter your address")
return ;
}
if(post.post.state === "")
{
  window.alert("please enter your state")
return ;
}
if(post.post.zip === "")
{
  window.alert("please enter your zip")
return ;
}
if(post.post.creditCardCardType === "")
{
  window.alert("please enter your credit card type")
return ;
}
    const details = {...post};
    e.preventDefault();
    dispatch(SaveDetails(details))
    navigate('/Page');
  };
  return (
    <div className="form-container"  style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        data-testid="header">
        <button
          type="button"
          onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }}
          data-testid="toggle-theme-btn"
        >
          Toggle to {!dark ? 'Dark' : 'Light'} theme
        </button>
      <form >
        <h1>FORM</h1>
        <div className="form-group">
          <div className="col-21">
            <label>Frist Name : </label>
          </div>
          <div className="col-22">
            <input
            className="form-control"
            name="firstName"
            onChange={handleChange}
            type="text"
            value={post.post.firstName}
            placeholder="First Name"
          />
          </div>
        </div>
        <div className="form-group">
          <div className="col-21">
            <label>last Name : </label>
          </div>
          <div className="col-22">
            <input
            className="form-control"
            name="lastName"
            onChange={handleChange}
            type="text"
            value={post.post.lastName}
            placeholder="Last Name"
          />
          </div>
        </div>
        <div className="form-group">
          <div className="col-21">
            <label>Gender</label>
          </div>
          <div className="col-22">
            { gender && gender.map((option,index) =>
              
           ( <div>
        <input
          type="radio"
          value={option}
          name="gender"
          onChange={handleChange}
        />{option}
      </div>))}
          </div>
        </div>
        <div className="form-group">
          <div className="col-21">
            <label>Language</label>
          </div>
          <div className="col-22">
            { languages && languages.map((option,index) =>
           ( <div>
        <input
          type="checkbox"
          value={option}
          checked={post.post.languages.find((lang) => lang.name === option).isChecked}
          name="languages"
          onChange={handleCheckboxChange}
        />{option}
      </div>))}
          </div>
        </div>
        <div className="form-group">
          <div className="col-21">
            <label>Email</label>
          </div>
          <div className="col-22">
            <input
            className="form-control"
            name="eMail"
            onChange={handleChange}
            type="text"
            value={post.post.eMail}
            placeholder="Email"
          />
          </div>
        </div>
        <div className="form-group">
          <div className="col-21">
            <label>Address : </label>
          </div>
          <div className="col-22">
            <textarea
            className="form-control"
            name="address"
            onChange={handleChange}
            type="text"
            value={post.post.address}
            placeholder="Address"
          />
          </div>
        </div>
        <div className="form-group">
          <div className="col-21">
            <label>State : </label>
          </div>
          <div className="col-22">
            <select
            className="form-control"
            onChange={handleChange}
            name="state"
            value={post.post.state}
             placeholder="select state"
          >
            <option>select state</option>
            { state && state.map((option,index) =>
               (<option key={index} value={option}>{option}</option>) )}
          </select>
          </div>
          
        </div>
        <div className="form-group">
          <div className="col-21">
            <label>Zip : </label>
          </div>
          <div className="col-22">
            <input
            className="form-control"
            name="zip"
            onChange={handleChange}
            type="text"
            value={post.post.zip}
            placeholder="Zip"
          />
          </div>
        </div>
        <div className="form-group">
          <div className="col-21">
            <label>credit card type : </label>
            </div>
            <div className="col-22">
              <select
            className="form-control"
            onChange={handleChange}
            name="creditCardType"
            value={post.post.creditCardType}
          >
            <option>select credit Card Type</option>
            {creditCardType && creditCardType.map((option,index) =>
               (<option key={index} value={option}>{option}</option>) )}
          </select>
          </div>
        </div>
        <pre></pre>
        <div className="form-group">
            <button className="btn btn-primary" onClick={handleSubmit}>
             Submit
        </button>
        </div>
        
      </form>
    </div>
  );
};