import express  from 'express';
import database from './config/database.config'
import todoRouter from "./route/index"

database.sync()
.then(()=>{
    console.log('database is connected')
})

const app =  express();
const port = 9000;      



app.use(express.json())

app.use('/api', todoRouter)




app.listen(port, ()=>{
    console.log('Server is running on 9000')
})