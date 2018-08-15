import {  CHANGE_AUTH } from 'actions/types';
import axios from 'axios';


export function changeAuth(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}