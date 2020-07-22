import React from 'react';
import { connect } from 'react-redux';
import { getAll } from "./../api/teams";
import { useState, useEffect } from 'react';
import config from '../config';
import * as teamActions from '../redux/actions/teamActions';

const Teams = (props) => {
    const { sprints, employees } = props;
    const [data, setData] = useState({ teams: [] });

    useEffect(() => {
        const fetchData = async () => {
          const result = await getAll();
         
          setData({teams: result.data});
        };
     
        fetchData();
      }, []);

    // props.dispatch(teamActions.getTeams());
    return (
        <div>
            <div className="container">
                <h1>Teams</h1>
                {data.teams.map(team => (
                    <div key={team.teamName}>{team.teamName}</div>
                ))}
            </div>
            <br />
            <div className="container">
                <h2>Sprint</h2>
                {sprints.map(sprint => (
                    <div key={sprint.SprintName}>{sprint.SprintName}</div>
                ))}
            </div>
            <br />

            <div className="container">
                <h2>Team Members</h2>
               
                    {employees.map(employees => (
                        <div key={employees.name}>
                             <table>
                            <tr>
                                <td>{employees.name}</td>
                                <td> {employees.title}</td>
                                <td> {employees.time}</td>
                                <td> {employees.pto}</td>
                            </tr>
                            </table>
                        </div>
                    ))}
               
            </div>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        teams: state.teams,
        sprints: state.sprints,
        employees: state.employees
    }
}

export default connect(mapStateToProps)(Teams);