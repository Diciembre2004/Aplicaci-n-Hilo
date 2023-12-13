import {connect} from '.../database.js'

export const getUser = async (req,res) => {
    const [rows] = await connect.query('SELECT * FROM Usuarios')
    console.log(rows)
    res.send('hi')
}

export const getRecor = (req,res) => {
    res.send('hi')
}

export const getRecorCount = (req,res) => {
    res.send('hi')
}

export const saveRecor = (req,res) => {
    res.send('hi')
}

export const deleteRecor = (req,res) => {
    res.send('hi')
}

export const updateRecor = (req,res) => {
    res.send('hi')
}

export { getUser, getRecor, getRecorCount, saveRecor, deleteRecor, updateRecor };
