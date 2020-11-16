import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={query:""}

        this.handleChange = this.handleChange.bind(this);
    }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

    render(){
    return(
        <div>
            <h1>SnapShot</h1>

            <section>
            <label for="site-search">Search the site:</label>
            <input type="search" id="site-search"  aria-label="Search" value={this.state.value} onChange={this.handleChange}></input>
            <button onClick= {
                fetch("")
                .then((response) => { return response.json(); })
                .then((data) => {
                    this.setState({query: data});
                    console.log(data)
                })}
                >
            Search
            </button>
            </section>

            <button>
                    <Link to="/mountain">Mountain</Link>
            </button>
            <button>
                    <Link to="/beaches">Beaches</Link>
            </button>
            <button>
                    <Link to="/birds">Birds</Link>
            </button>
            <button>
                    <Link to="/food">Food</Link>
            </button>
                
        </div>
    )
    }
}
export default Nav;