import React, { useState } from "react";
import axios from 'axios';

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

export default function FormComponent() {
  const [state, setState] = useState({ title: '', description: '' });  
 
  const onChange = (e) => {  
    setState({ ...state, [e.target.name]: e.target.value });
      } 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    axios.post("http://localhost:3030/addFields",{title:state.title, description:state.description})
    .then(res=>{console.log(res)})
    .catch(err=>console.log(err))
}
  return (
    <div>
      <MDBContainer>
        <MDBRow>
            <MDBCol md="8">
            <form  onSubmit={handleSubmit}>
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                    Title
                </label> 
                <input type="text" name="title"  className="form-control" value={state.title} onChange={onChange} />
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                    Description
                </label>
                <input type="text" name="description" className="form-control" value={state.description} onChange={onChange} />
                <br />
                <div className="text-center mt-4">
                <input  type="submit" />
                </div>
            </form>
            </MDBCol>
        </MDBRow>
        </MDBContainer>       
    </div>
  );
}