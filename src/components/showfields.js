
import React, { useState ,useEffect} from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import axios from 'axios';

const ShowFields = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        return axios.get("http://localhost:3030/getFields")
        .then(( response ) => {
            console.log(response.data.fields);
            setResults(response.data.fields);
      });
        
    }, [])
    return (  
        <MDBTable>
      <MDBTableHead>
        <tr>
          <th>title</th>
          <th>Description</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {results.map((item) =>(
        <tr>
          <td>{item.title}</td>
          <td>{item.description}</td>
        </tr>
      ))}
        
      </MDBTableBody>
    </MDBTable>
    );
}
 
export default ShowFields;