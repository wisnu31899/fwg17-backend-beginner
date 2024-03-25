// const { describe, it } = require("mocha");
// const { expect } = require("chai")

// const productController = require('../controllers/admin/products.controller');

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

// describe('list all products', () => {
//     it('should return type: object', async () => {
//         const response = await productController.getallproducts(req, res)
//         expect(typeof response).to.be.eq('object')
//     })
//     it('should return success true and message', async () => {
//         const response = await productController.getallproducts(req, res)
//         expect(response.success).to.be.eq(true)
//         expect(response.message).to.be.eq('list all product')
//     })
// })

// describe("detail product", () => {
//     req.params = {
//         id: "1"
//     }

//     it("should return message detail product", async () => {
//         const response = await productController.getdetailproduct(req, res)
//         expect(response.message).to.be.eq("detail product")
//     })
//     it("should return results: object", async () => {
//         req.params = {
//             id: "1"
//         }
//         const response = await productController.getdetailproduct(req, res)
//         expect(typeof response.results).to.be.eq('object')
//     })
//     it("should return success: true", async () => {
//         req.params = {
//             id: "1"
//         }
//         const response = await productController.getdetailproduct(req, res)
//         expect(response.success).to.be.eq(true)
//     })
// })

// describe("create product", () => {
//     const req = {
//                 headers: {
//                     ['content-type'] : "multipart",
//                     ['transfer-encoding'] : ""
//                 },
//                 body: {
//                     name: `guest${new Date().getTime()}`,
//                     basePrice: 10000,
//                 }
//             }
//             console.log(req)
//     it("should return message create success", async () => {
//         const response = await productController.createproduct(req, res)
//         expect(response.message).to.be.eq("create success")
//     })
//     it("should return results: object", async () => {
//         const response = await productController.createproduct(req, res)
//         expect(typeof response.results).to.be.eq('object')
//     })
//     it("should return success: true", async () => {
//         const response = await productController.createproduct(req, res)
//         expect(response.success).to.be.eq(true)
//     })
// })

// describe('update product', () => {
//     const req = {
//         headers: {
//             ['content-type'] : "multipart",
//             ['transfer-encoding'] : ""
//         },
//         params: {
//             id: 22
//         },
//         body: {
//             name: `guest${new Date().getTime()}`,
//             basePrice: 10000,
//         }
//     }

//     it('should return success true', async () => {
//         const response = await productController.updateproduct(req, res)
//         expect(response.success).to.be.eq(true)
//     })
// })

// describe('delete product', () => {
//     it("should return message delete successfully", async () => {
//         const req ={
//             params: {
//                 id: "45"
//             }
//         }

//         const response = await productController.deleteproduct(req, res)
//         expect(response.message).to.be.eq("delete success")
//     })
//     it("should return message products with id 1000 not found", async () => {
//         const req = {
//           params: {
//             id: "1000",
//           },
//         };
          

//         const response = await productController.deleteproduct(req, res)
//         expect(response.message).to.be.eq("product not found")
//     })

// })