import React from 'react'
import Lists from './Lists'
import { v4 as uuidv4 } from "uuid"
import './Search.css'

class Search extends React.Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Alaska"
            },
            {
                id: uuidv4(),
                title: "New York"
            },
            {
                id: uuidv4(),
                title: "Texas"
            },
            {
                id: uuidv4(),
                title: "Santa Clara"
            },
            {
                id: uuidv4(),
                title: "Miami"
            },
            {
                id: uuidv4(),
                title: "Pari"
            },
            {
                id: uuidv4(),
                title: "Italy"
            },
            {
                id: uuidv4(),
                title: "Spain"
            },
            {
                id: uuidv4(),
                title: "Changchun"
            },
            {
                id: uuidv4(),
                title: "Alabama"
            },
            {
                id: uuidv4(),
                title: "Arizona"
            },
            {
                id: uuidv4(),
                title: "California"
            },
            {
                id: uuidv4(),
                title: "Colorado"
            },
            {
                id: uuidv4(),
                title: "33101"
            },
            {
                id: uuidv4(),
                title: "12309"
            },
            {
                id: uuidv4(),
                title: "42343"
            },
            {
                id: uuidv4(),
                title: "63267"
            },
            {
                id: uuidv4(),
                title: "12367"
            },
            {
                id: uuidv4(),
                title: "445566"
            },
            {
                id: uuidv4(),
                title: "120867"
            },
            {
                id: uuidv4(),
                title: "56564"
            },
            {
                id: uuidv4(),
                title: "764356"
            },
            {
                id: uuidv4(),
                title: "75543"
            },
            {
                id: uuidv4(),
                title: "537452"
            },
            {
                id: uuidv4(),
                title: "974337"
            }
        ]
    };
    ChangeHandle = (e) => {
        this.setState({
            keyword: e.target.value,
        })
    }
    render() {
        const result = this.state.todos.filter(todo => todo.title.indexOf(this.state.keyword) !== -1);
        if (this.state.keyword == "") {
            return (
                <div className="search_space">
                    <span className="looking">Looking for a Job?</span>
                    <input className="skill" type="text" placeholder="Search by job Title or Skill" />
                    <div className = "search_results">
                    <input className="location" type="text" onChange={this.ChangeHandle} value={this.state.keyword} placeholder="City, State, or Zip" />
                    </div>
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
            )
        }
        else {
            return (
                <div className="search">
                    <span className="looking">Looking for a Job?</span>
                    <input className="skill" type="text" placeholder="Search by job Title or Skill" />
                    <div className = "search_results">
                    <input className="location" type="text" onChange={this.ChangeHandle} value={this.state.keyword} placeholder="City, State, or Zip" />
                    <Lists todos={result} />
                    </div>
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
            )
        }
    }
}

export default Search