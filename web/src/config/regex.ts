export const regex = {
  // at least 12 characters, at least one uppercase letter, one lowercase letter, one number and one special character
  strong_password:
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$/,
};
