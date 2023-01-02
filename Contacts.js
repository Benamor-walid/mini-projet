import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
const CardLabel = styled.a`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 1.7rem 0;
    
`

function Contacts(){
  return <div>
  <CardLabel href=''>add contact</CardLabel>
  <CardLabel>vew all contacts</CardLabel>
  
  </div>;
}









export default Contacts;