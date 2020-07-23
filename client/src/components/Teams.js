import React from 'react';
import { connect } from 'react-redux';
import { getAllTeams } from "./../api/teams";
import { getAllEmployees } from "./../api/employees";
import { getAllSprints } from "./../api/sprints";
import { useState, useEffect } from 'react';

const Teams = (props) => {
    const { sprints, employees } = props;
    const [teamData, setTeamData] = useState({ teams: [] });
    const [employeeData, setEmployeeData] = useState({ employees: [] });
    const [sprintData, setSprintData] = useState({ sprints: [] });
    const [selectedTeam, setSelectedTeam] = useState(0);

    useEffect(() => {
        const fetchTeamData = async () => {
            const result = await getAllTeams();
            setTeamData({
                teams: [{ id: 0, teamName: '(Select Team)' }].concat(result.data)
            });
        };
        const fetchEmployeeData = async () => {
            const result = await getAllEmployees();

            setEmployeeData({
                employees: [{ id: 0, name: '(Select Team member)' }].concat(result.data)
            });
        };
        const fetchSprintData = async () => {
            const result = await getAllSprints();
            setSprintData({
                sprints: [{ id: 0, teamName: '(Select Sprint)' }].concat(result.data)
            });
        };

        fetchTeamData();
        fetchEmployeeData();
        fetchSprintData();
    }, []);

    // props.dispatch(teamActions.getTeams());
    return (
        <div>
            <div className="container">

                <label htmlFor="teamId">Team</label>
                <select
                    name="teamId"
                    id="teamId"
                    value={selectedTeam}
                    onChange={(e) => {
                        setSelectedTeam(e.target.value);
                    }
                    }>
                    {teamData.teams.map((team) => <option key={team.id} value={team.id}>{team.teamName}</option>)}
                </select>
            </div>
            <br />
            <div className="container">
                <h2>Sprints</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Sprint Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sprintData.sprints.filter(sprint => sprint.teamId == selectedTeam).map(sprints => (
                            <tr key={sprints.sprintName}>
                                <td>{sprints.sprintName}</td>
                                <td> {new Date(sprints.startDate).toLocaleDateString()}</td>
                                <td> {new Date(sprints.endDate).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <br />

            <div className="container">
                <h2>Team Members</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Capacity per day</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeData.employees.filter(employee => employee.teamId == selectedTeam).map(employees => (
                            <tr key={employees.name}>
                                <td>{employees.name}</td>
                                <td> {employees.title}</td>
                                <td> {employees.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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