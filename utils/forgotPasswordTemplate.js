const forgotPasswordTemplate = ({ name, otp }) => {
    return `
<div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; border: 1px solid #ddd; border-radius: 10px; padding: 20px; background-color: #f9f9f9; text-align: center;">
    
    <h2 style="color: #333;">Password Reset Request</h2>
    <p style="font-size: 16px; color: #555;">Dear <strong>${name}</strong>,</p>
    <p style="font-size: 16px; color: #555;">You have requested a password reset. Please use the following OTP code to reset your password.</p>
    <div style="background: #ffd700; color: #333; font-size: 24px; padding: 15px; margin: 20px auto; width: 60%; border-radius: 5px; font-weight: bold;">
        ${otp}
    </div>
    <p style="font-size: 14px; color: #777;">This OTP is valid for <strong>1 hour</strong>. Enter this OTP on the Binkeyit website to proceed with resetting your password.</p>
    <br>
    <p style="font-size: 14px; color: #777;">Thanks,</p>
    <p style="font-size: 16px; font-weight: bold; color: #333;">Binkeyit Team</p>
</div>
    `;
};

export default forgotPasswordTemplate;
