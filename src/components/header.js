import React from 'react'
import {Link} from 'react-router-dom';

let Header = () => {

return(
<header aria-label='Page Header' className="pageHead" id="pageHead">
            
    <section className="navbar">
        
        <i tabIndex='0' aria-label="Close" role='button' title='close Sidebar' className="fas fa-bars rotate"></i>
        
        <div className="headLogo" aria-label='Application Logo'>
            <h1 title='Application Text Logo' tabIndex='0'><span>MMN </span>Neighborhood Project</h1>
        </div>
        
        <nav role="navigation">
            
            <ul className='originalNav'>
                <li><a href='/'><i title='Home' className="fas fa-home"></i></a></li>
                <li><Link to='/read-me'><i title='Readme'className="fab fa-readme"></i></Link></li>
                <li><a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/naumanCEO'><i title='About ME' className="fas fa-user"></i></a></li>
            </ul>
            
        </nav>
        
    </section>
</header>

)



}
export default Header;



