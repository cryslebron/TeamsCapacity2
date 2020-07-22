import React from 'react';
import { connect } from 'react-redux';
import { getAllTeams } from "./../api/teams";
import { useState, useEffect } from 'react';
import * as employeeActions from '../redux/actions/employeeActions';

const Employee = (props) => {
    const [teamData, setTeamData] = useState({ teams: [] });
    const [employee, setEmployee] = useState({ name: '', title: '', time: '', pto: '', teamId: '' });

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllTeams();

            setTeamData({
                teams: [{ id: 0, teamName: '(Select team)' }].concat(result.data)
            });
        };

        fetchData();
    }, []);

    //update state everytime that there is a change on any input
    let handleChange = event => {
        const { name, value } = event.target;
        const newEmployee = { ...employee, [name]: value }
        setEmployee(newEmployee);
    }

    //dispatch the Redux createEmployee action on submit
    let onFormSubmit = (event) => {
        alert('Employee Added!');
        event.preventDefault();
        props.dispatch(employeeActions.createEmployee(employee))
        resetForm();
    }

    //is to clear the form once submitted 
    let resetForm = () => {
        const newEmployee = { ...employee, name: "", title: "", time: "", pto: "", teamId: 0 }
        setEmployee(newEmployee);
    }

    return (
        <div className="container">
            <form onSubmit={onFormSubmit} >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={employee.name}
                    onChange={handleChange} />
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={employee.title}
                    onChange={handleChange} />
                <label htmlFor="time">Capacity per day</label>
                <input
                    type="number"
                    name="time"
                    id="time"
                    value={employee.time}
                    onChange={handleChange} />
                <label htmlFor="pto">PTO/Holiday</label>
                <input
                    type="number"
                    name="pto"
                    id="pto"
                    value={employee.pto}
                    onChange={handleChange} />
                <label htmlFor="teamId">Team</label>
                <select 
                    name="teamId"
                    id="teamId"
                    value={employee.teamId}
                    onChange={(e) => {
                        const newEmployee = { ...employee, teamId: e.target.value }
                        setEmployee(newEmployee);
                    }
                    }>
                    {teamData.teams.map((team) => <option key={team.id} value={team.id}>{team.teamName}</option>)}
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        employees: state.employee
    }
}

export default connect(mapStateToProps)(Employee);