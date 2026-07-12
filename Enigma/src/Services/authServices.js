export const loginUser = async (formData) => {
  if (
    formData.email === "admin@cloudcore.com" &&
    formData.password === "123456"
  ) {
    return {
      success: true,
      token: "dummy-jwt-token",
      user: {
        name: "Admin",
        email: formData.email,
      },
    };
  }

  return {
    success: false,
    message: "Invalid credentials",
  };
};
