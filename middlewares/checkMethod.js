function checkMethod(req, res, next) {
  console.log(`Metodo: ${req.method} desde la URL: ${req.url}`);
  next();
}

export default checkMethod;