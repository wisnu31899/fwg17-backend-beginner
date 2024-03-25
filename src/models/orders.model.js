const db = require('../lib/db.lib')

exports.findAll = async (userId) => {
    const sql = `SELECT * FROM "orders" WHERE "userId" = $1`
    const values = [userId]
    const { rows } = await db.query(sql, values)
    return rows
}

exports.findOne = async (id) => {
    const sql = 'SELECT * FROM "orders" WHERE id = $1'
    const values = [id]
    const { rows } = await db.query(sql, values)
    return rows
}

exports.create = async (data) => {
    const sql = `INSERT INTO "orders"
    ("userId", "orderNumber", "promoId", "total", "taxAmount", "status", "address", "fullName", "email")
    VALUES
    ($1,$2,$3,$4,$5,$6,$7,$8,$9)
    RETURNING *`
    const values = [data.userId, data.orderNumber, data.promoId, data.total, data.taxAmount, data.status, data.address, data.fullName, data.email]
    const { rows } = await db.query(sql, values)
    return rows[0]
}

exports.update = async (data, id) => {
    // const sql = `UPDATE "orders" 
    // SET "total" = $1, "status" = $2
    // WHERE "id" = $3
    // RETURNING *`
    // const values = [data.total,data.status,id]
    // const{rows} = await db.query(sql, values)
    // return rows[0]
    const key = []
    const values = []
    values.push(parseInt(id))
    for (let item in data) {
        values.push(data[item])
        key.push(`"${item}"=$${values.length}`)
    }
    const sql = `UPDATE "orders"
    SET ${key.join(', ')}, "updated_At" = now() 
    WHERE id = $1
    RETURNING*`
    const { rows } = await db.query(sql, values)
    return rows[0]
}

exports.delete = async (id) => {
    const sql = `DELETE FROM "orders"
    WHERE "id" = $1
    RETURNING *`
    const values = [id]
    const { rows } = await db.query(sql, values)
    return rows[0]
}


exports.getLastOrderId = async () => {
    const sql = `SELECT MAX("id") FROM "orders"`
    const values = []
    const { rows } = await db.query(sql, values)
    // console.log(rows)
    return rows
}

exports.findOneByIdUser = async (userId) => {
    const sql = `
    SELECT o."id", o."userId", o."orderNumber", o."promoId", o."total", o."taxAmount", o."status",
           o."deliveryAddress", o."fullName", o."email", "delivery"."name" AS "deliveryName", p."name" AS "productName",
           ps."size" AS "sizeName", pv."name" AS "variantName",
           o."createdAt", o."updatedAt"
    FROM "orders" o
    LEFT JOIN "delivery" ON o."deliveryId" = "delivery"."id"
    LEFT JOIN "products" p ON o."productId" = p."id"
    LEFT JOIN "productSize" ps ON o."sizeId" = ps."id"
    LEFT JOIN "productVariant" pv ON o."variantId" = pv."id"
    WHERE o."userId" = $1
`
    const values = [userId]
    const { rows } = await db.query(sql, values)
    return rows
}

exports.findPriceByIdUser = async (userId) => {
    const sql = `
    SELECT o."id", o."userId", o."orderNumber", o."promoId", o."total", o."taxAmount", o."status",
           o."deliveryAddress", o."fullName", o."email", "delivery"."additionalPrice" AS "deliveryPrice", p."basePrice" AS "productPrice",
           ps."additionalPrice" AS "sizePrice", pv."additionalPrice" AS "variantPrice",
           o."createdAt", o."updatedAt"
    FROM "orders" o
    LEFT JOIN "delivery" ON o."deliveryId" = "delivery"."id"
    LEFT JOIN "products" p ON o."productId" = p."id"
    LEFT JOIN "productSize" ps ON o."sizeId" = ps."id"
    LEFT JOIN "productVariant" pv ON o."variantId" = pv."id"
    WHERE o."userId" = $1
`
    const values = [userId]
    const { rows } = await db.query(sql, values)
    return rows
}

exports.findOneByFullUser = async (userId) => {
    const sql = `
    SELECT o."orderNumber", o."fullName", "delivery"."name" AS "deliveryName", u."phoneNumber", o."deliveryAddress", o."status", o."userId", o."total", p."name" AS "productName",
       ps."size" AS "sizeName", pv."name" AS "variantName",
       o."createdAt", o."updatedAt"
FROM "orders" o
LEFT JOIN "delivery" ON o."deliveryId" = "delivery"."id"
LEFT JOIN "products" p ON o."productId" = p."id"
LEFT JOIN "productSize" ps ON o."sizeId" = ps."id"
LEFT JOIN "productVariant" pv ON o."variantId" = pv."id"
LEFT JOIN "users" u ON o."userId" = u."id"
WHERE o."userId" = $1
`
    const values = [userId]
    const { rows } = await db.query(sql, values)
    return rows
}

