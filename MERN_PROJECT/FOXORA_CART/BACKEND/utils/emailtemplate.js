// 📩 VERIFY EMAIL TEMPLATE
export const verifyEmailTemplate = (url) => `
<!DOCTYPE html>
<html>
<body style="background:#0f0f0f;font-family:Arial;text-align:center;padding:30px;color:#fff;">
  <h2 style="color:#ff7a18;">Verify Your Email</h2>
  <p>Click below to verify your account</p>
  <a href="${url}" style="padding:12px 25px;background:#ff7a18;color:#000;text-decoration:none;border-radius:5px;">
    Verify Email
  </a>
</body>
</html>
`;

// 🔁 RESET PASSWORD TEMPLATE
export const resetPasswordTemplate = (url) => `
<!DOCTYPE html>
<html>
<body style="background:#0f0f0f;font-family:Arial;text-align:center;padding:30px;color:#fff;">
  <h2 style="color:#ff4b2b;">Reset Password</h2>
  <p>Click below to reset your password</p>
  <a href="${url}" style="padding:12px 25px;background:#ff4b2b;color:#fff;text-decoration:none;border-radius:5px;">
    Reset Password
  </a>
  <p style="font-size:12px;color:#aaa;">Link expires in 10 minutes</p>
</body>
</html>
`;