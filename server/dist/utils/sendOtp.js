import nodemailer from "nodemailer";
export const sendOtp = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        secure: true,
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        }
    });
    const mailOptions = {
        from: `"DevMate" <${process.env.MAIL_USER}>`,
        to: email,
        subject: "Yout OTP Code",
        text: `Your OTP is ${otp}.It will expire in 5 minutes`
    };
    await transporter.sendMail(mailOptions);
};
