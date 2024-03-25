const db = require('../lib/db.lib')

exports.insertOtp = async(data) => {
    const sql = `
    INSERT INTO "resetPassword" ("phoneNumber", "otp", "userId")
    VALUES ($1, $2, $3)
    RETURNING *
    `

    const values = [data.phoneNumber, data.otp, data.userId]
    const {rows} = await db.query(sql, values)
    return rows[0]
}

exports.findOneByOtp = async (otp)=>{
    const sql = `
    SELECT * FROM "resetPassword" WHERE otp = $1
    `

    const values = [otp]
    const {rows} = await db.query(sql, values)
    return rows[0]
}

exports.deleteOtp = async(id) => {
    const sql = `
    DELETE FROM "resetPassword" WHERE id = $1
    RETURNING *
    `

    const values = [id]
    const {rows} = await db.query(sql, values)
    return rows[0]
}