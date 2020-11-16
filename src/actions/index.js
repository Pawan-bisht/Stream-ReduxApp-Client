import { ReduxAction } from '../constants';
import streams from '../apis/streams';
import { wait } from '@testing-library/react';
export const signIn = (userId) => {
    return {
        type: ReduxAction.SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: ReduxAction.SIGN_OUT
    }
}

export const createStream =(formValues) =>{
    return async (dispatch) => {
        const response = await streams.post('/streams', formValues);
        dispatch({ type: ReduxAction.CREATE_STREAM, payload: response.data });
    }
}

export const fetchStreams = () =>{
    return async (dispatch) =>{
        const response = await streams.get('/streams');
        dispatch({ type : ReduxAction.FETCH_STREAMS, payload: response.data });
    }
}

export const fetchStream = (id) =>{
    return async(dispatch) =>{
        const response = await streams.get(`/streams/${id}`);
        dispatch({ type : ReduxAction.FETCH_STREAM, payload: response.data });
    }
}

export const editStream = (id, formValues) =>{
    return async(dispatch) =>{
        const response = await streams.put(`/stream/${id}`, formValues);
        dispatch({ type : ReduxAction.EDIT_STREAM, payload: response.data });
    }
}

export const deleteStream = (id) =>{
    return async (dispatch) =>{
        const response = await streams.delete(`/streams/${id}`);
        dispatch({ type : ReduxAction.DELETE_STREAM, payload: response})
    }
}