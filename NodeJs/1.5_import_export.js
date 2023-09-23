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