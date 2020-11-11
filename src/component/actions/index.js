import { ReduxAction } from '../constants';

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