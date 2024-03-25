const db = require('../lib/db.lib')

exports.getDataBySizeName = async (name) => {
    const sql = `
    SELECT *
    FROM "productSize" WHERE "size" ILIKE $1
    `
    const  values = [name]
    const {rows} = await db.query(sql, values)
    return rows[0]
}

exports.getDataByVariantName = async (name) => {
    const sql = `
    SELECT *
    FROM "productVariant" WHERE "name" ILIKE $1
    `
    const  values = [name]
    const {rows} = await db.query(sql, values)
    return rows[0]
}

exports.getDataByShipping = async (name) => {
    const sql = `
    SELECT *
    FROM "delivery" WHERE "name" ILIKE $1
    `
    const  values = [name]
    const {rows} = await db.query(sql, values)
    return rows[0]
}