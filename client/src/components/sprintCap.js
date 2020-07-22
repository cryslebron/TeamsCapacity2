import React from 'react';
import { connect } from 'react-redux';
import { getAllTeams } from "./../api/teams";
import { useState, useEffect } from 'react';
import * as sprintActions from '../redux/actions/sprintActions';

const Sprint = (props) => {
    const [teamData, setTeamData] = useState({ teams: [] });
    const [sprint, setSprint] = useState({ id: 1, sprintName: '', sprintLength: '', startDate: '', endDate: '', teamId: '' });

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
        const newSprint = { ...sprint, [name]: value }
        setSprint(newSprint);
    }

    //dispatch the Redux createUser action on submit
    let onFormSubmit = (event) => {
        alert('Sprint Added!');
        event.preventDefault();
        props.dispatch(sprintActions.createSprint(sprint))
        resetForm();
    }
    // //is to clear the form once submitted 
    let resetForm = () => {
        const newSprint = { ...sprint, sprintName: "", sprintLength: '', startDate: "", endDate: "", teamId: 0 }
        setSprint(newSprint);
    }

    return (
        <div className="container">
            <form onSubmit={onFormSubmit} >
                <label htmlFor="sprintName">Sprint Name</label>
                <input
                    type="text"
                    name="sprintName"
                    id="sprintName"
                    value={sprint.sprintName}
                    onChange={handleChange} />
                <label htmlFor="sprintName">Sprint Duration</label>
                <input
                    type="number"
                    name="sprintLength"
                    id="sprintLength"
                    value={sprint.sprintLength}
                    onChange={handleChange} />
                <label htmlFor="startDate">Sprint Start Date</label>
                <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    value={sprint.startDate}
                    onChange={handleChange} />
                <label htmlFor="endDate">Sprint End Date</label>
                <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    value={sprint.endDate}
                    onChange={handleChange} />
                <label htmlFor="teamId">Team</label>
                <select 
                    name="teamId"
                    id="teamId"
                    value={sprint.teamId}
                    onChange={(e) => {
                        const newSprint = { ...sprint, teamId: e.target.value }
                        setSprint(newSprint);
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
        sprint: state.sprint
    }
}

export default connect(mapStateToProps)(Sprint);