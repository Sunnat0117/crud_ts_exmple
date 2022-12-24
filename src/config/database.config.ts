 import { Sequelize}  from 'sequelize'
 import {sqlite3} from  'sqlite3'

 const db =  new Sequelize('app', '', '', {
    storage : './database2.sqlite',
    dialect : "sqlite",
    logging : false
 })

 export default db