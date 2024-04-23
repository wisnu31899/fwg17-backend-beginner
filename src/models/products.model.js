const db = require('../lib/db.lib')

exports.findAll = async (keyword = '', sortBy, orderBy, page = 1, limit = 4, category) => {
    const sort = ['idProduct', 'createdAt', 'name', 'basePrice', 'categoriesName'];
    const order = ['asc', 'desc'];
    const limitData = limit;
    const offset = (page - 1) * limitData;
    sortBy = sort.includes(sortBy) ? sortBy : 'idProduct';
    orderBy = order.includes(orderBy) ? orderBy : 'asc';
    let sql = `SELECT "products"."name" AS "productName", "products"."id" AS "idProduct", "image", "basePrice", "description", "isRecommended", "categories"."name" AS "categoriesName"
               FROM "products"
               FULL JOIN "productCategories" ON "productCategories"."productId" = "products"."id"
               FULL JOIN "categories" ON "productCategories"."categoryId" = "categories"."id"
               WHERE "products"."name" ILIKE $1`;

    // Tambahkan kriteria pencarian berdasarkan kategori
    if (category) {
        sql += ` AND "categories"."name" = $2`;
    }

    // Tambahkan kriteria pencarian untuk bestSeller
    if (bestSeller) {
        sql += ` AND "isRecommended" = true`;
    }

    sql += ` ORDER BY "${sortBy}" ${orderBy}
             LIMIT ${limitData} OFFSET ${offset}`;

    const values = [`%${keyword}%`];
    if (category) {
        values.push(category);
    }

    const { rows } = await db.query(sql, values);
    return rows;
}


exports.countAll = async (keyword='')=>{
    const sql = `SELECT COUNT("id")
    FROM "products"
    WHERE "name" ILIKE $1`
    const values = [`%${keyword}%`]
    const{rows} = await db.query(sql, values)
    return parseInt(rows[0].count)//BANYAKNYA DATA YANG DISIMPAN
}


//tambahan untuk get detail product yang digabungkan dengan findOne di halaman detail product
exports.findDetailProduct = async (id) => {
    const sql = `SELECT 
    "p"."id", 
    "p"."name", 
    "p"."description", 
    "p"."basePrice", 
    "p"."image",
    (
        SELECT jsonb_build_object(
            'id', "ps"."id",
            'size', "ps"."size",
            'additionalPrice', "ps"."additionalPrice"
        )
    ) as "sizes",
    (
        SELECT jsonb_build_object(
            'id', "pv"."id",
            'name', "pv"."name",
            'additionalPrice', "pv"."additionalPrice"
        )
    ) as "variants",
    "p"."discount", 
    "p"."isRecommended",
    "p"."createdAt",
    "p"."updatedAt"
    FROM "products" "p"
    LEFT JOIN "productVariant" "pv" ON "pv"."productId" = "p"."id"
    LEFT JOIN "productSize" "ps" ON "ps"."productId" = "p"."id"
    WHERE "p"."id" = $1
    GROUP BY "p"."id", "ps"."productId", "ps"."id", "pv"."productId", "pv"."id"`
    const values = [id]
    const{rows} = await db.query(sql, values)
    return rows
}


exports.findOne = async (id)=> {
    const sql = 'SELECT * FROM products WHERE id = $1'
    const values = [id]
    const{rows} = await db.query(sql, values)
    return rows[0]
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

exports.update = async (id, data)=> {
    // //MANUAL 1 PER 1
    // const sql = `UPDATE "products" 
    // SET "image" = $1
    // WHERE "id" = $2
    // RETURNING *`
    // const values = [data.image,id]
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
    SET ${key.join(', ')}, "updatedAt" = now() 
    WHERE id = $1
    RETURNING *`
    const {rows} = await db.query(sql, values)
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