const db = require('../lib/db.lib')

exports.findAll = async (keyword='', sortBy, orderBy, page = 1, limit = 4)=> {
    const sort = ['id', 'createdAt', 'fullName']
    const order = ['asc', 'desc']
    const limitData = limit
    const offset = (page - 1) * limitData
    sortBy = sort.includes(sortBy)? sortBy : 'id'
    orderBy = order.includes(orderBy)? orderBy : 'asc'
    const sql = `SELECT *
    FROM "users" WHERE "fullName" ILIKE $1
    ORDER BY "${sortBy}" ${orderBy}
    LIMIT ${limitData} OFFSET ${offset}`
    const values = [`%${keyword}%`]
    const{rows} = await db.query(sql, values)
    return rows
}

exports.countAll = async (keyword='')=>{
    const sql = `SELECT COUNT("id")
    FROM "users"
    WHERE "fullName" ILIKE $1`
    const values = [`%${keyword}%`]
    const{rows} = await db.query(sql, values)
    return parseInt(rows[0].count)//BANYAKNYA DATA YANG DISIMPAN
}

exports.findOneUser = async (id) => {
    const sql = `SELECT * FROM users WHERE "id" = $1`
    const values = [id]
    const { rows } = await db.query(sql, values)
    return rows
}

exports.findOneByEmail = async (email) => {
    const sql = `SELECT * FROM users WHERE "email" ILIKE $1`
    const values = [email]
    const { rows } = await db.query(sql, values)
    return rows[0]
}

exports.create = async (data) => {
    const sql = `INSERT INTO "users"
    ("fullName","email","password","address","picture","phoneNumber","role")
    VALUES
    ($1,$2,$3,$4,$5,$6,$7)
    RETURNING *`
    const values = [data.fullName, data.email, data.password, data.address, data.picture, data.phoneNumber, data.role]
    const { rows } = await db.query(sql, values)
    return rows[0]
}

// exports.registrasi = async (data) => {
//     try {
//         const sql = `INSERT INTO "users"
// ("fullName","email","password","address","picture","phoneNumber","role")
// VALUES
// ($1,$2,$3,$4,$5,$6,$7)
// RETURNING *`
//         const values = [data.fullName, data.email, data.password, data.address, data.picture, data.phoneNumber, data.role]
//         const { rows } = await db.query(sql, values)
//         if(rows){
//             return rows[0]
//         } else{
//             return null
//         }
//     }catch(err){
//         throw err
//     }
    
// }

exports.registrasi = async (data) => {
    const sql = `INSERT INTO "users"
    ("fullName","email","password","address","picture","phoneNumber","role")
    VALUES
    ($1,$2,$3,$4,$5,$6,$7)
    RETURNING *`
    const values = [data.fullName, data.email, data.password, data.address, data.picture, data.phoneNumber, data.role]
    const { rows } = await db.query(sql, values)
    return rows[0]
}

// exports.registrasi = async (data) => {
//     const columns = Object.keys(data).join('","');
//     const placeholders = Object.keys(data).map((key, index) => `$${index + 1}`).join(',');

//     const sql = `INSERT INTO "users"("${columns}")
//     VALUES
//     (${placeholders})
//     RETURNING *`;

//     const values = Object.values(data);

//     const { rows } = await db.query(sql, values);
//     return rows[0];
// }



exports.update = async (id, data) => {
    // const sql = `UPDATE "users" 
    // SET "password" = $1
    // WHERE "id" = $2
    // RETURNING *`
    // const values = [data.password,id]
    // const{rows} = await db.query(sql, values)
    // return rows[0]

    const key = []
    const values = []
    values.push(parseInt(id))
    for (let item in data) {
        if(data[item]){
            values.push(data[item])
        key.push(`"${item}"=$${values.length}`)
        }
    }
    const sql = `UPDATE "users"
    SET ${key.join(', ')}, "updatedAt" = now() 
    WHERE id = $1
    RETURNING*`
    const { rows } = await db.query(sql, values)
    return rows[0]
}

exports.delete = async (id) => {
    const sql = `DELETE FROM "users"
    WHERE "id" = $1
    RETURNING *`
    const values = [id]
    const { rows } = await db.query(sql, values)
    return rows[0]
}

exports.findOneByPhoneNumber = async (phoneNumber) => {
    const sql = `SELECT * FROM "users" WHERE "phoneNumber" ILIKE $1`
    const values = [phoneNumber]
    const { rows } = await db.query(sql, values)
    return rows[0]
}