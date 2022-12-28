 const checkAuth = async (req, res, next) => {
  console.log("Usuario autenticado");
  next();
};

export default checkAuth;
