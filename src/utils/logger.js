import {config} from "../config/config.js"

const logLevels = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
}


export const logger = {
    error: (message) => log('error',message),
    warn: (message) => log('warn',message),
    info: (message) => log('info',message),
    debug: (message) => log('debug',message),
}

function log(level,message){
    if(logLevels[level] <= logLevels[config.logLevel]){
        console[level](`[${level.toUppercase()}] ${message}`)
    }
}


logger.info('hello')