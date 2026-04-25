export const verifyEmailTemplate = (name, url) => {
  return `
  <div style="font-family:Arial;padding:20px">
    <h2>Hello ${name} 👋</h2>

    <p>Welcome! Please verify your email to activate your account.</p>

    <a href="${url}" 
       style="display:inline-block;padding:10px 20px;
       background:#4CAF50;color:white;text-decoration:none;
       border-radius:5px;margin-top:10px;">
       Verify Email
    </a>

    <p style="margin-top:20px;font-size:12px;color:gray;">
      This link will expire soon.
    </p>
  </div>
  `;
};

export const resetPasswordTemplate = (name, url) => {
  return `
  <div style="font-family:Arial;padding:20px">
    <h2>Hi ${name} 🔐</h2>

    <p>We received a request to reset your password.</p>

    <a href="${url}" 
       style="display:inline-block;padding:10px 20px;
       background:#ff4d4d;color:white;text-decoration:none;
       border-radius:5px;margin-top:10px;">
       Reset Password
    </a>

    <p style="margin-top:20px;font-size:12px;color:gray;">
      If you didn't request this, ignore this email.
    </p>
  </div>
  `;
};