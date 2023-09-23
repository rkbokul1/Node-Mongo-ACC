// amra ekpage sob code na lekhe export import er  maddhome node module create korte pari.

const errorHandeler = require("./1.5.1_errorhandeler")

const getUser = async() =>{
    try {
        comsole.log('Two')
    } catch (error) {
        errorHandeler(error)
    }
}

getUser();



/* 

evabe export import kora ke commonjs bole ja sokol node js module a bebohar kora hoy. ar jodi keu default export use korte chay tahole package manager a type k commonjs theke modulerjs lekhe dite hoy.

Tahole amra react er moto kore export import korte parbo

import errorHandeler from './errorHandeler.js'
import {errorHandeler, two} from './errorHandeler.js'

export default errorHandeler:


*/