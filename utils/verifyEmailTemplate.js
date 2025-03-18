const verifyEmailTemplate = ({ name, url }) => {
    return `
<div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; border: 1px solid #ddd; border-radius: 10px; padding: 20px; background-color: #f9f9f9; text-align: center;">
    
    <h2 style="color: #333;">Email Verification</h2>
    <p style="font-size: 16px; color: #555;">Dear <strong>${name}</strong>,</p>
    <p style="font-size: 16px; color: #555;">Thank you for registering with Binkeyit. Please verify your email address by clicking the button below.</p>
    <a href="${url}" style="display: inline-block; background: #ff8c00; color: white; padding: 15px 25px; font-size: 18px; text-decoration: none; border-radius: 5px; margin-top: 20px;">Verify Email</a>
    <p style="font-size: 14px; color: #777; margin-top: 20px;">If you did not request this, please ignore this email.</p>
    <br>
    <p style="font-size: 14px; color: #777;">Thanks,</p>
    <p style="font-size: 16px; font-weight: bold; color: #333;">Binkeyit Team</p>
</div>
    `;
};

export default verifyEmailTemplate;
