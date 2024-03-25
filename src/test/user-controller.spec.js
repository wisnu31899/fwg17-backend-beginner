// const { describe, it } = require("mocha");
// const { expect } = require("chai");

// const userController = require('../controllers/admin/users.controller');
// const userModel = require('../models/users.model');

// const req = {
//     params: {},
//     query: {},
//     body: {},
// }

// const res = {
//     status: (status) => {
//         return res
//     },
//     json: (param) => {
//         return param
//     },
// }

// describe('list all users', () =>{
//     it('should return type: object', async () => {
//         const response = await userController.getallusers(req, res)
//         expect(typeof response).to.be.eq('object')
//     })
//     it('should return success true and message', async() => {
//         const response = await userController.getallusers(req, res)
//         expect(response.success).to.be.eq(true)
//         expect(response.message).to.be.eq('list all users')
//     })
// })

// describe('details user', () => {
//     it('should return type: object', async () => {
//         const response = await userController.getdetailuser(req, res)
//         expect(typeof response).to.be.eq('object')
//     })
//     const req = {
//         params: {
//             id: 20
//         }
//     }

//     it('should return success true and message', async() => {
//         const response = await userController.getdetailuser(req, res)
//         expect(response.success).to.be.eq(true)
//         expect(response.message).to.be.eq('detail user')
//     })
//     it('should return results type: object', async () => {
//         const response = await userController.getdetailuser(req, res)
//         expect(typeof response.result).to.be.eq('object')
//     })

//     it('should error with status 404 if user not found and message', async() => {
//         const req = {
//             params: {
//                 id: 1000
//             }
//         }
//         const response = await userController.getdetailuser(req, res)
//         expect(response.success).to.be.eq(false)
//         expect(response.message).to.be.eq('user not found')
//     })

// })

// describe('create user', () => {
//     it('should return type: object', async() => {
//         const req = {
//             body: {
//                 fullName: "guest",
//                 email: `guest${new Date().getTime()}@mail.com`,
//                 password: "1234",
//                 role: "customer"
//             }
//         }
//         const response = await userController.createusers(req, res)
//         expect(typeof response).to.be.eq('object')
//     })
//     it('should return success true', async() => {
//         const req = {
//             body: {
//                 fullName: "guest",
//                 email: `guest${new Date().getTime()}@mail.com`,
//                 password: "1234",
//                 role: "customer"
//             }
//         }
//         const response = await userController.createusers(req, res)
//         expect(response.success).to.be.eq(true)
//         expect(response.message).to.be.eq('create success')
//     })
//     it('should return results type: object', async () => {
//         const req = {
//             body: {
//                 fullName: "guest",
//                 email: `guest${new Date().getTime()}@mail.com`,
//                 password: "1234",
//                 role: "customer"
//             }
//         }
//         const response = await userController.createusers(req, res)
//         expect(typeof response.result).to.be.eq('object')
//     })
//     it('should error if password not supplied', async() => {
//         const req = {
//             body: {
//                 fullName: "guest",
//                 email: `guest${new Date().getTime()}@mail.com`,
//                 password: "",
//                 role: "customer"
//             }
//         }
//         const response = await userController.createusers(req, res)
//         expect(response.success).to.be.false
//     })
//     it('should error if fullname, email, password', async() => {
//         const req = {
//             body: {
//                 fullName: null,
//                 email: `guest${new Date().getTime()}@mail.com`,
//                 password: null,
//                 role: "customer"
//             }
//         }
//         const response = await userController.createusers(req, res)
//         expect(response.success).to.be.false
//         expect(response.message).to.be.eq(`internal server error`)
//     })
// })


// describe('update user', () => {
//     const req = {
//         params: {
//             id: 20
//         },
//         body: {
//             fullName: "wisnu"
//         }
//     }

//     it('should return success true', async() => {
//         const response = await userController.updateusers(req, res)
//         expect(response.success).to.be.eq(true)
//     })

//     it('should update user with id 20 password to 1234', async() => {
//         const req = {
//             params: {
//                 id: 20
//             },
//             body: {
//                 fullName: "wisnu",
//                 password: "1234"
//             }
//         }
//         const response = await userController.updateusers(req, res)
//         expect(response.success).to.be.eq(true)
//     })

//     it('should error when user not exists', async() => {
//         const req = {
//             params: {
//                 id: 1000
//             },
//             body: {
//                 fullName: "wisnu",
//                 password: "1234"
//             }
//         }
//         const response = await userController.updateusers(req, res)
//         expect(response.success).to.be.eq(false)
//     })
// })

// describe('delete user', () => {
//     it('should return message delete user successfully', async() => {
//         const req = {
//             params: {
//                 id: "61"
//             },
//         }

//         const response = await userController.deleteusers(req, res)
//         expect(response.message).to.be.eq("delete success")
//     })
//     it('should return user with id 100 not found', async() => {
//         const req = {
//             params: {
//                 id: "1000"
//             }
//         }

//         const response = await userController.deleteusers(req, res)
//         expect(response.message).to.be.eq("user not found")
//     })
//   })