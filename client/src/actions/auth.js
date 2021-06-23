import * as api from '../api/index.js'
import { AUTH } from '../constants/actionType'

export const signin = (formData, history) => async (distpach) => {
    try {
        const { data } = await api.signIn(formData)

        distpach({
            type: AUTH,
            data
        })

        history.push('/')
    } catch (error) {
        console.log(error)
    }
} 

export const signup = (formData, history) => async (distpach) => {
    try {
        const { data } = await api.signUp(formData)

        distpach({
            type: AUTH,
            data
        })

        history.push('/')
    } catch (error) {
        console.log(error)
    }
}
