export const verifyEmailTemplate = (verifyLink) => {
  return `
  <div style="font-family:Arial;padding:20px;text-align:center">
    <h2>Verify Your Email</h2>
    <p>Click below to verify your account</p>

    <a href="${verifyLink}" 
       style="padding:10px 20px;background:green;color:white;text-decoration:none;border-radius:5px;">
       Verify Email
    </a>

    <p>This link will expire soon.</p>
  </div>
  `
}