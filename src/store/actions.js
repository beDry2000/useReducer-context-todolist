import { SET_JOB, ADD_JOB, DEL_JOB } from "./constants";

export const setJob = payload => ({
    type: SET_JOB,
    payload
})
export const addJob = payload => ({
    type: ADD_JOB,
    payload
})
export const delJob = payload => ({
    type: DEL_JOB,
    payload
})