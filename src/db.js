import pg from 'pg'

export const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    password: "murcielago576",
    database: "bazar",
    port: "5432"
})

pool.query('SELECT NOW()').then(result =>{
    console.log(result);
})