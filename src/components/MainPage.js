import FormComponent from "./formcomponent"
import React, { useState } from "react";


const MainPage = (props) => {
    const NextPage =()=>{
        props.history.push('/showFields');
      }
    return (
        <div>
            <p className="h4 text-center mb-4">Hello To the test application </p>
            <br/>
            <p>the user can fill the form by title and description</p>
            <button type="button" class="btn btn-info btn-rounded btn-sm my-0" onClick={NextPage}>show All fields</button>

            <FormComponent/>
        </div>
      );
}
 
export default MainPage;