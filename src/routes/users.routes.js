import { Router } from "express";
import {pool} from '../db.js'

const router = Router();

//Obtener lista de usuarios
router.get('/users', async(req,res) =>{
    
   const {rows}= await pool.query('SELECT * FROM users')
   console.log(rows)
   res.json(rows)
});

//Buscar usuario por ID
router.get('/users/:userId', async(req,res) =>{
    const {userId} =req.params
    const {rows} = await pool.query(`SELECT * FROM users WHERE userId = ${userId}`)
    res.json(rows)
});

//Crear usuario
router.post('/users', (req,res) =>{
    res.send('creando usuaio')
});

//Eliminar usuario
router.delete('/users/:userId', (req,res) =>{
    const {userId} =req.params
    res.send('obteniendo usuaios')
});

//Actualizar usuario
router.put('/users/:id', (req,res) =>{
    const {userId} =req.params
    res.send('obteniendo usuaios')
});

export default router;