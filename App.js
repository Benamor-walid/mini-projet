import React from 'react';
import Contacts from './Contacts.js';
import Section from './Section.js';
import FormulaireContact from './FormulaireContact.js';
import { BrowserRouter as Router , Link, Routes , Route } from 'react-router-dom'
function App (){
    return <Router>
    
    <div>
    
    <div id="menu-btn" className='fas fa-bars'></div>

<header className='header'>

    <Link to="" className='logo'> <i className='fas fa-graduation-cap'></i> Home </Link>

    <nav className='navbar'>
    

        <Link to="/Contacts"> <i className='fas fa-angle-right'></i> CONTACTS </Link>
        
 
        <a href=""> <i className='fas fa-angle-right'></i>  BLOGS  </a>

       
        
        
    </nav>

</header>


<section className='home' id="home">

    <div className='image'>
    <Section/>
    </div>

    <div className='content'>
        <span>HELLO, I am Adel Bouchareb, welcome to to My Homepage</span>
        <h3>you can navigate into our options from the left side. </h3>
        
    </div>

</section>


</div>
    <Routes>
    
    <Route path='/Contacts' element={<Contacts />}>
          <Route path='/Contacts' element={<FormulaireContact />}></Route>
    </Route>
    </Routes>

    </Router>
    
}








export default App;