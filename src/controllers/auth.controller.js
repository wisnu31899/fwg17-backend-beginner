const userModel = require("../models/users.model");
const forgotPasswordModel = require("../models/forgotPassword.model");
const argon = require("argon2");
const jwt = require("jsonwebtoken");
// const nodemailer = require("nodemailer")
// const twilio = require('twilio');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error(`please enter your email!`);
    }
    const user = await userModel.findOneByEmail(email);

    if (!user) {
      throw new Error(`email not registered, try again!`);
    }
    if (!password) {
      throw new Error(`please enter your password!`);
    }
    const verify = await argon.verify(user.password, password);
    if (!verify) {
      throw new Error("wrong password, try again!");
    }

    // penggunaan jwt
    const payload = {
      id: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, process.env.APP_SECRET || "secretkey");
    return res.json({
      success: true,
      message: "login success, welcome to coffee shop app ☕",
      results: {
        token,
      },
    });
  } catch (err) {
    if (err.message) {
      return res.status(401).json({
        success: false,
        message: err.message,
      });
    }
  }
};

exports.register = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword } = req.body;

    if (!fullName) {
      throw new Error(`please input full Name!`);
    }

    if (!email) {
      throw new Error(`please input email!`);
    }
    if (!password) {
      throw new Error(`please input password!`);
    }
    if (confirmPassword !== password) {
      throw new Error(`password do not match!`);
    }

    const user = await userModel.findOneByEmail(email);
    if (user) {
      throw new Error(`email already registered, try again!`);
    }

    const hashed = await argon.hash(password);
    await userModel.registrasi({
      fullName,
      email,
      password: hashed,
      role: "customer",
    });
    return res.json({
      success: true,
      message: "register success, welcome to coffee shop app",
    });
  } catch (err) {
    if (err.message) {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: `internal server error`,
    });
  }
};

exports.forgotPassword = async (req, res) => {
   try{
    const {email, otp, newPassword, confirmPassword} = req.body
    if(email){
        const user = await userModel.findOneByEmail(email)
        if(user){
            const {customAlphabet} = await import('nanoid')
            const rand = customAlphabet('1234567890', 6)
            const otp = rand()
            // // INI TANPA NANOID
            // const otp = String(Math.round(Math.random() * 100000)).padEnd(6, '0')
            console.log(otp)
            const request =  await forgotPasswordModel.insertOtp({
                otp,
                email: user.email,
                userId: user.id
            })
            //BUATKAN LOGIC KIRIM OTP KE EMAIL
            //BUATKAN LOGIC KIRIM OTP KE WA
            //BUATKAN LOGIC KIRIM OTP KE SMS
            return res.json({
                success: true,
                message: `forgot password to send ${request.email}, please check your email`
            })
        }
    }else{
        if(otp){
            const found = await forgotPasswordModel.findOneByOtp(otp)
            if(!found){
                throw "failed"
            }
            // TAMBAHKAN EXPIRED OTP DENGAN LOGIC CEK createdAt
            // createdAt + 15m > date.now then throw 'expired_otp'
            const user = await userModel.findOneByEmail(found.email)
            if(newPassword !== confirmPassword){
                throw "confirmFailed"
            }
            const hash = await argon.hash(newPassword)
            const update = await userModel.update(user.id, {
                password: hash
            })

            await forgotPasswordModel.deleteOtp(found.id)
            return res.json({
                success: true,
                message: "new password saved"
            })
        }
    }
   }catch(err){
    if(err === "failed"){
        return res.status(400).json({
            success: false,
            message: "failed to reset password and try again"
        })
    }
    if(err === "confirmFailed"){
        return res.status(400).json({
            success: false,
            message: "confirm password does not match, please try again"
        })
    }
   }
}


// exports.forgotPassword = async (req, res) => {
//     try {
//       const { phoneNumber, otp, newPassword, confirmPassword } = req.body;
  
//       if (phoneNumber) {
//         const user = await userModel.findOneByPhoneNumber(phoneNumber);
//         if (user) {
//           const { customAlphabet } = await import('nanoid');
//           const rand = customAlphabet('1234567890', 6);
//           const generatedOTP = rand();
//           console.log(generatedOTP);
  
//           const request = await forgotPasswordModel.insertOtp({
//             otp: generatedOTP,
//             phoneNumber: user.phoneNumber,
//             userId: user.id
//           });
  
//           // Kirim OTP melalui WhatsApp
//           await sendOTPViaWhatsApp(user.phoneNumber, generatedOTP);
  
//           return res.json({
//             success: true,
//             message: `Forgot password: OTP sent to ${user.phoneNumber}. Please check your WhatsApp.`
//           });
//         }
//       } else {
//         if (otp) {
//           const found = await forgotPasswordModel.findOneByOtp(otp);
//           if (!found) {
//             throw "failed";
//           }
//           // TAMBAHKAN EXPIRED OTP DENGAN LOGIC CEK createdAt
//           // createdAt + 15m > date.now then throw 'expired_otp'
//           const user = await userModel.findOneByPhoneNumber(found.phoneNumber);
//           if (newPassword !== confirmPassword) {
//             throw "confirmFailed";
//           }
//           const hash = await argon.hash(newPassword);
//           const update = await userModel.update(user.id, {
//             password: hash
//           });
  
//           await forgotPasswordModel.deleteOtp(found.id);
//           return res.json({
//             success: true,
//             message: "New password saved"
//           });
//         }
//       }
//     } catch (err) {
//       if (err === "failed") {
//         return res.status(400).json({
//           success: false,
//           message: "Failed to reset password and try again"
//         });
//       }
//       if (err === "confirmFailed") {
//         return res.status(400).json({
//           success: false,
//           message: "Confirm password does not match, please try again"
//         });
//       }
//       console.error(err);
//       return res.status(500).json({
//         success: false,
//         message: "Internal server error"
//       });
//     }
//   };

// async function sendOTPViaWhatsApp(phoneNumber, otp) {
//   try {
//     // Kirim pesan WhatsApp dengan OTP
//     await client.messages.create({
//       from: 'whatsapp:+6282316014465', // Nomor WhatsApp dari Twilio Sandbox
//       to: `whatsapp:${phoneNumber}`, // Nomor WhatsApp penerima
//       body: `Your OTP is: ${otp}`, // Isi pesan OTP
//     });

//     console.log('OTP message sent via WhatsApp');
//   } catch (error) {
//     console.error('Failed to send OTP message via WhatsApp:', error);
//     throw new Error('Failed to send OTP message via WhatsApp');
//   }
// }
