import reducer from './getCovidlivetracking/covidJsonReducer'
import CovidDeathreducer from "./coviddeathtracking/covidDeathRecuder"

import CovidRecoveredreducer from "./covidrecovered/covidRecoveredReducer"
import globalreducer from "./globalTracking/globalTrackingReducer"

import {combineReducers} from 'redux'


const rootReducer = combineReducers({
    reducer:reducer,
    CovidDeathreducer:CovidDeathreducer,
    CovidRecoveredreducer:CovidRecoveredreducer,
    globalreducer:globalreducer
    })

export default rootReducer
