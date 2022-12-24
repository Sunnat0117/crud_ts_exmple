import {Model,  DataTypes} from 'sequelize'
import db from '../config/database.config'


interface TodoAttributes {
    id : string,
    title : string,
    comleted : boolean
}

export class TodoInstance extends Model <TodoAttributes>{}

TodoInstance.init(
    {
        id :{
            type : DataTypes.UUIDV4,
            primaryKey : true,
            allowNull : false
        }, 
        title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        comleted : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
            defaultValue : false
        },
    },
    {
        sequelize :db,
        tableName : 'todos'
    }
)