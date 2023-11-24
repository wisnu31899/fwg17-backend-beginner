const db = require('../lib/db.lib')

exports.findByName = async (keyword='', sortBy, orderBy, pages = 1)=> {
    const sort = ['id', 'created_At', 'basePrice', 'categoriesName']
    const order = ['asc', 'desc']
    const limit = 10
    const offset = (pages - 1) * limit
    sortBy = sort.includes(sortBy)? sortBy : 'id'
    orderBy = order.includes(orderBy)? orderBy : 'asc'
    const sql = `SELECT "products"."name" "productName", "basePrice", image, "categories"."name" "categoriesName"
    FROM "products"
    JOIN "productCategories" ON "productCategories"."productId" = "products"."id"
    JOIN "categories" ON "productCategories"."categoryId" = "categories"."id"
    WHERE "products"."name" ILIKE $1 
    ORDER BY "${sortBy}" ${orderBy}
    LIMIT ${limit} OFFSET ${offset}`
    const values = [`%${keyword}%`]
    const{rows} = await db.query(sql, values)
    return rows
}

exports.findOne = async (id)=> {
    const sql = 'SELECT * FROM products WHERE id = $1'
    const values = [id]
    const{rows} = await db.query(sql, values)
    return rows
}

exports.create = async (data)=> {
    const sql = `INSERT INTO "products"
    ("name","description","basePrice","image","discount","isRecommended","stock")
    VALUES
    ($1,$2,$3,$4,$5,$6,$7)
    RETURNING *`
    const values = [data.name, data.description, data.basePrice, data.image, data.picture, data.isRecommended, data.stock]
    const{rows} = await db.query(sql, values)
    return rows[0]
}

exports.update = async (data, id)=> {
    // const sql = `UPDATE "products" 
    // SET "name" = $1
    // WHERE "id" = $2
    // RETURNING *`
    // const values = [data.name,id]
    // const{rows} = await db.query(sql, values)
    // return rows[0]

    const key = []
    const values = []
    values.push(parseInt(id))
    for(let item in data){
        values.push(data[item])
        key.push(`"${item}"=$${values.length}`)
    }
    const sql = `UPDATE "products"
    SET ${key.join(', ')}, "updated_At" = now() 
    WHERE id = $1
    RETURNING*`
    const{rows} = await db.query(sql, values)
    return rows[0]
}

exports.delete = async (id)=> {
    const sql = `DELETE FROM "products"
    WHERE "id" = $1
    RETURNING *`
    const values = [id]
    const{rows} = await db.query(sql, values)
    return rows[0]
}