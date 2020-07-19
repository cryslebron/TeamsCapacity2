import {combineReducers} from 'redux';
import users from './userReducer';
import employees from './employeeReducer';
import sprints from './sprintReducer';
import teams from './teamReducer'

const rootReducer = combineReducers({
    users,
    employees,
    sprints,
    teams
});

export default rootReducer;