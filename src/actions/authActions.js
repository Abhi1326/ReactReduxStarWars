/**
 * Created by Counter on 6/30/2017.
 */
import * as types from '../common/actionTypes'
import USER from '../common/users'
import {URLS} from '../common/url-constants'
import {get_promise} from './restAction'
//


export function login (user) {
        let registeredUser= USER.filter(registeredUser=> {
            if (registeredUser.email === user.email) {
                if (registeredUser.password === user.password) {
                    return registeredUser
                }
                return null

            }
            return null
        })
        if(registeredUser.length!==0){
            localStorage.setItem('key',registeredUser[0].token);
            localStorage.setItem('email',registeredUser[0].email);
            return{
                type: types.LOGGED_IN,
                payload: {email: registeredUser[0].email, token: registeredUser[0].token}
            }

        }
        else{
            return{
                type: types.WRONG_CREDENTIALS,
                payload: "email or password is invalid"
            }
        }



}


export function starWars(){
    return dispatch => {

        return get_promise(URLS.GET_STARWAR_PLANETS_DATA).then(response => {
            console.log("response",response)
            dispatch({
                type: types.fetch_all_planet_data,
                payload: response
            })

        })

    }
}


export function starWarsPage(val){
    return dispatch => {

        return get_promise(URLS.GET_STARWAR_PLANETS_DATA+'/?page='+val).then(response => {
            console.log("response",response)
            dispatch({
                type: types.fetch_all_planet_data_page,
                payload: response
            })

        })

    }
}




export function logout () {


        localStorage.clear();
       return {
            type:types.LOGGED_OUT,
                payload:false
        }

}