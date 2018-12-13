import React, {Component} from 'react';

class Sidebar extends Component{


render(){

    return(  
        <aside id='navContainer'>
        <div className='widgetSidbar'>
            <h2 tabIndex='0' className='WidgetHead'>Filter Locations</h2>
            <div className="inputGrouping">
                <input role="search" aria-label="Sitewide" type="text" placeholder="Search..." value={this.props.query} onChange={event => this.props.search(event.target.value)}/>
                <i className="fas fa-search"></i>
            </div>
            </div>
            {/* <input type="button" value='Submit'/> */}


 <div className='widgetSidbar'>
            <h2 tabIndex='0' className='WidgetHead'>Hotels</h2>
     <ol id='style-3' className='searched-list'>

{

    this.props.locations.map((l, i, a) => (
     <li tabIndex={0}
     role="button" onClick={() => this.props.passInfo(l)} key={l.venue.id} className='contact-list-item'>

    <section className='contact-details'>
    <span>{l.venue.name}</span>
    </section>
    </li>
   /* {console.log(c.name)} */

))}
</ol>
</div>

            <div className='seperator'></div>
        </aside>
    )
    }
}
export default Sidebar;