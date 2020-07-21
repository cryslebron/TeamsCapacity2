import {combineReducers} from 'redux';
import security from './securityReducer';
import users from './userReducer';
import employees from './employeeReducer';
import sprints from './sprintReducer';
import teams from './teamReducer'

const rootReducer = combineReducers({
    security,
    users,
    employees,
    sprints,
    teams
});

export default rootReducer;