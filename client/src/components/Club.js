import React, { Component } from 'react'
import axios from 'axios';

import Players from './Players';
// import Country from './Country';
import Navbar from './Navbar';


class Club extends Component {
    state = {
        players: [],
    //     name: '',
    //    flag: []

    }

    componentDidMount() {

        axios
            .get('http://localhost:5000/api/players')
            .then(response => {
                console.log(response)
                this.setState({
                    players: response.data
                })
            })
            .catch(err => console.log(err));
    }

    // handleChange = e => {
    //     this.setState({
    //       name: e.target.value
    //     });
        
    //   };

    // getCountry = () => {
    //     this.state.players.filter(function(item){
    //         if(item.country === this.state.name)
    //         return this.state.flag.push(item);
    //     })
    // }

    render() {
        return (
            <div>
                <Navbar />
                {/* <form>
                    <input 
                    type='text'
                    placeholder='Country'
                    name='country'
                    id='country'
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                    <button type="submit" onClick={this.getCountry}>submit</button>
                    
                </form> */}
                <Players data={this.state.players} />
                {/* <Country team={this.state.country}/> */}
            </div>
        )
    }
}
export default Club