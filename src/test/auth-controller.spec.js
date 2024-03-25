const { describe, it } = require("mocha")
const { expect } = require("chai")

const forgotPasswordModel = require('../models/forgotPassword.model')

const authController = require('../controllers/auth.controller')
const userModel = require('../models/users.model')

const req = {
    params: {},
    query: {},
    body: {},
}

const res = {
    status: (status) => {
        return res
    },
    json: (param) => {
        return param
    },
}

describe("login user", () => {
    it("should return error: please enter your email when email is empty", async () => {
        const req = {
            body: {
                email: "",
                password: "abc123"
            }
        }
        const response = await authController.login(req, res);
        expect(response.success).to.be.false
        expect(response.message).to.be.eq("please enter your email");
    })
    it("should return error: email not registered when email empty in db", async () => {
        const req = {
            body: {
                email: "abc@mail.com",
                password: "abc123"
            }
        }
        const response = await authController.login(req, res);
        expect(response.success).to.be.false
        expect(response.message).to.be.eq("email not registered, try again");
    })
    it("should return error: please enter your password when password is empty", async () => {
        const req = {
            body: {
                email: "guest1@mail.com",
                password: ""
            }
        }
        const response = await authController.login(req, res);
        expect(response.success).to.be.false
        expect(response.message).to.be.eq("please enter your password");
    })
    it("should return error: wrong email or password when password is incorrect", async () => {
        const req = {
            body: {
                email: "guest1@mail.com",
                password: "incorrectpassword"
            }
        }
        const response = await authController.login(req, res);
        expect(response.success).to.be.false;
        expect(response.message).to.be.eq("wrong email or password");
    })
    it("should return not null when login is successful", async () => {
        const req = {
            body: {
                email: "guest2@mail.com",
                password: "abc123"
            }
        };
        const res = {
            statusCode: 200,
            responseData: null,
            status: function (code) {
                this.statusCode = code;
                return this;
            },
            json: function (data) {
                this.responseData = data;
                return this;
            }
        };
        await authController.login(req, res);
        // Pastikan res.json telah dipanggil
        expect(res.responseData).to.not.be.null;
    })
    it("should return success true when login is successful", async () => {
        const req = {
            body: {
                email: "guest1@mail.com",
                password: "abc123"
            }
        };
        const res = {
            statusCode: 200,
            responseData: null,
            status: function (code) {
                this.statusCode = code;
                return this;
            },
            json: function (data) {
                this.responseData = data;
                return this;
            }
        };
        await authController.login(req, res);
        const response = res.responseData;
        expect(response.success).to.be.true;
    })
    it("should return message: login success, welcome to coffee shop app when login is successful", async () => {
        const req = {
            body: {
                email: "guest1@mail.com",
                password: "abc123"
            }
        };
        const res = {
            statusCode: 200,
            responseData: null,
            status: function (code) {
                this.statusCode = code;
                return this;
            },
            json: function (data) {
                this.responseData = data;
                return this;
            }
        };
        await authController.login(req, res);
        const response = res.responseData;
       expect(response.message).to.equal('login success, welcome to coffee shop app');
    })
    it("should return token when login is successful", async () => {
        const req = {
            body: {
                email: "guest1@mail.com",
                password: "abc123"
            }
        };
        const res = {
            statusCode: 200,
            responseData: null,
            status: function (code) {
                this.statusCode = code;
                return this;
            },
            json: function (data) {
                this.responseData = data;
                return this;
            }
        };
        await authController.login(req, res);
        const response = res.responseData;
        expect(response.results.token).to.exist;
    })
})

describe("register user", () => {
    it("should register user successfully", async () => {
        // Persiapkan objek request untuk registrasi
        const req = {
            body: {
                fullName: "John Doe",
                email: `guest${new Date().getTime()}@mail.com`,
                password: "password123",
                phoneNumber: "1234567890",
            }
        };

        // Panggil fungsi register dari authController
        const response = await authController.register(req, res);

        // Periksa bahwa response yang diberikan adalah yang diharapkan
        expect(response.success).to.be.true;
        expect(response.message).to.equal("register success, welcome to coffee shop app");
    });

    it("should return message: email is already in use", async () => {
        // Persiapkan objek request dengan email yang sudah terdaftar
        const req = {
            body: {
                fullName: "Jane Doe",
                email: "guest2@mail.com",
                password: "password456",
                phoneNumber: "0987654321",
            }
        };

        // Panggil fungsi register dari authController
        const response = await authController.register(req, res);

        // Periksa bahwa response yang diberikan adalah yang diharapkan
        expect(response.success).to.be.false;
        expect(response.message).to.equal("email is already in use");
    })
})

// describe("forgotPassword user", () => {
//     it("should send OTP to email when email is found", async () => {
//         const req = {
//             body: {
//                 email: "guest2@mail.com"
//             }
//         }
//         const response = await authController.forgotPassword(req, res);
//         expect(response.success).to.be.true;
//         expect(response.message).to.contain("forgot password to send");
//     })
//     it("should return error when OTP is not found", async () => {
//         const req = {
//             body: {
//                 otp: "123456"
//             }
//         }
//         const response = await authController.forgotPassword(req, res);
//         expect(response.success).to.be.false;
//         expect(response.message).to.equal("failed to reset password and try again");
//     })
//     it("should return error when password confirmation fails", async () => {
//         const req = {
//             body: {
//                 otp: "625093",
//                 newPassword: "abc1234",
//                 confirmPassword: "abc1243"
//             }
//         }
//         const response = await authController.forgotPassword(req, res);
//         expect(response.success).to.be.false;
//         expect(response.message).to.equal("confirm password does not match, please try again");
//     })
//     it("should return message new password saved", async () => {
//         const req = {
//             body: {
//                 otp: "625093",
//                 newPassword: "abc1234",
//                 confirmPassword: "abc1234"
//             }
//         }
//         const response = await authController.forgotPassword(req, res);
//         expect(response.success).to.be.true;
//         expect(response.message).to.equal("new password saved");
//     })
// })