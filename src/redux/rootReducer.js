import reducer from './getCovidlivetracking/covidJsonReducer'
import CovidDeathreducer from "./coviddeathtracking/covidDeathRecuder"

import CovidRecoveredreducer from "./covidrecovered/covidRecoveredReducer"

import {combineReducers} from 'redux'


const rootReducer = combineReducers({reducer:reducer,CovidDeathreducer:CovidDeathreducer,CovidRecoveredreducer:CovidRecoveredreducer})

export default rootReducer
