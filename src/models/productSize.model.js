const db = require('../lib/db.lib')

exports.findAll = async ()=> {
    const sql = `SELECT * FROM "productSize"`
    const values = []
    const{rows} = await db.query(sql, values)
    return rows
}

exports.findOne = async (id)=> {
    const sql = 'SELECT * FROM "productSize" WHERE id = $1'
    const values = [id]
    const{rows} = await db.query(sql, values)
    return rows
}

exports.create = async (data)=> {
    const sql = `INSERT INTO "productSize"
    ("size", "aditionalPrice")
    VALUES
    ($1,$2)
    RETURNING *`
    const values = [data.size, data.aditionalPrice]
    const{rows} = await db.query(sql, values)
    return rows[0]
}

exports.update = async (data, id)=> {
    const sql = `UPDATE "productSize" 
    SET "aditionalPrice" = $1
    WHERE "id" = $2
    RETURNING *`
    const values = [data.aditionalPrice,id]
    const{rows} = await db.query(sql, values)
    return rows[0]
}

exports.delete = async (id)=> {
    const sql = `DELETE FROM "productSize"
    WHERE "id" = $1
    RETURNING *`
    const values = [id]
    const{rows} = await db.query(sql, values)
    return rows[0]
}