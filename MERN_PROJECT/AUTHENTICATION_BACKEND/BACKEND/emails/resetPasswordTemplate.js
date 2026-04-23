export const resetPasswordTemplate = (resetLink) => {
  return `
  <div style="font-family:Arial;padding:20px;text-align:center">
    <h2>Reset Password</h2>
    <p>Click below to reset your password</p>

    <a href="${resetLink}" 
       style="padding:10px 20px;background:red;color:white;text-decoration:none;border-radius:5px;">
       Reset Password
    </a>

    <p>This link expires in 15 minutes.</p>
  </div>
  `
}