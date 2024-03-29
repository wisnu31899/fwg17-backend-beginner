const db = require('../lib/db.lib')

exports.findAll = async ()=> {
    const sql = `SELECT * FROM "orderDetails"`
    const values = []
    const{rows} = await db.query(sql, values)
    return rows
}

exports.findOne = async (id)=> {
    const sql = 'SELECT * FROM "orderDetails" WHERE id = $1'
    const values = [id]
    const{rows} = await db.query(sql, values)
    return rows
}
exports.findOnebyOrderId = async (orderId)=> {
    const sql = 'SELECT "p"."image" AS "productImage", "p"."name" AS "productName", "pv"."name" AS "productVariant", "ps"."size" AS "productSize", "od"."subTotal" AS "orderSubtotal" FROM  "orderDetails" "od" JOIN  "products" "p" ON "od"."productId" = "p"."id" JOIN  "productVariant" "pv" ON "od"."productVariantId" = "pv"."id" JOIN  "productSize" "ps" ON "od"."productSizeId" = "ps"."id" WHERE "od"."orderId" = $1'
    const values = [orderId]
    const{rows} = await db.query(sql, values)
    return rows
}

exports.create = async (data)=> {
    const sql = `INSERT INTO "orderDetails"
    ("productId", "productSizeId", "productVariantId", "quantity", "orderId", "subTotal")
    VALUES
    ($1,$2,$3,$4,$5,$6)
    RETURNING *`
    const values = [data.productId, data.productSizeId, data.productVariantId, data.quantity, data.orderId, data.subTotal]
    const{rows} = await db.query(sql, values)
    return rows[0]
}

exports.update = async (data, id)=> {
    const sql = `UPDATE "orderDetails" 
    SET "quantity" = $1,"subTotal" = $2
    WHERE "id" = $3
    RETURNING *`
    const values = [data.quantity,data.subTotal,id]
    const{rows} = await db.query(sql, values)
    return rows[0]
}

exports.delete = async (id)=> {
    const sql = `DELETE FROM "orderDetails"
    WHERE "id" = $1
    RETURNING *`
    const values = [id]
    const{rows} = await db.query(sql, values)
    return rows[0]
}