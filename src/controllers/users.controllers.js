import {pool} from '../db.js'

export const getUsers = async(req,res) =>{
    
    const {rows}= await pool.query('SELECT * FROM users')
    console.log(rows)
    res.json(rows)
};

export const searchUsers = async(req,res) =>{
    const {userId} =req.params;
    const {rows} = await pool.query('SELECT * FROM users WHERE userId =  $1', [userId]);
    
    if (rows.length === 0){
        return res.status(404).json({message: "Usuario no encontrado"});
    }
    res.json(rows[0]);
};

export const createUsers = async(req,res) =>{
    const data = req.body
    console.log(data)
    const result = await pool.query('INSERT INTO users (nombre, email, contra) VALUES ($1, $2, $3)', [data.nombre, data.email, data.contra])
    res.json(result)
    console.log(result)
}
export const deleteUsers = async(req,res) =>{
    const {userId} =req.params;
    const {rowCount} = await pool.query('DELETE FROM users WHERE userId =  $1', [userId]);
    
    if (rowCount.length === 0){
        return res.status(404).json({message: "Usuario no encontrado"});
    }
    res.json(rowCount)
};

export const updateUsers = async(req,res) =>{
    const {userId} =req.params;
    const data = req.body;

    const {rows} = await pool.query('UPDATE users SET nombre = $1, email = $2, contra = $3 WHERE userId=$4 RETURNING *', [data.nombre, data.email, data.contra, userId])
    console.log(rows)
    return res.json(rows[0])
};

