// import { Resend } from 'resend';
// import dotenv from 'dotenv';
// dotenv.config();

// if (!process.env.RESEND_API) {
//   throw new Error('Please define the RESEND_API environment variable inside .env.local');
// }


// const resend = new Resend(process.env.RESEND_API);

// const sendEmail = async({ sendTo, subject ,html})=>{
//     try {
//         const { data, error } = await resend.emails.send({
//             from: 'Binkeyit <onboarding@resend.dev>',
//             to:sendTo,
//             subject: subject,
//             html: html,
//           });
//           if (error) {
//             return console.error({ error });
//           }
//           return data
//     } catch (error) {
//         console.log(error)
//     }
// }

// export default sendEmail;
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('Please define SMTP credentials in .env file');
}

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587, // Default to 587 for TLS
    secure: process.env.SMTP_PORT == 465, // True for 465 (SSL), false for 587 (TLS)
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

const sendEmail = async ({ sendTo, subject, html }) => {
    try {
        const info = await transporter.sendMail({
            from: `"Binkeyit" <${process.env.SMTP_USER}>`,
            to: sendTo,
            subject: subject,
            html: html
        });

        console.log('Email sent: ', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending email: ', error);
        return null;
    }
};

export default sendEmail;
