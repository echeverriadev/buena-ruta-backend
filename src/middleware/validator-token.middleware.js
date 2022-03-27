const { response, request } = require("express");
const jwt = require("jsonwebtoken");

const verifyToken = async (req = request, res = response, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({
        msg: "No hay token en la petición",
      });
    }

    jwt.verify(token, process.env.SEED, (error, decoded) => {
      if (error) {
        return res.status(401).json({
          msg: "Token no válido",
        });
      }
      req.user = decoded.user;
      
      if (!req.user.status && !req.user.is_active) {
        return res.status(401).json({
          msg: "Token no válido - usuario con estado: false",
        });
      }
    });

    next();
  } catch (error) {
    res.status(500).json({
      error,
      msg: "Hable por favor con la administracion de buena ruta",
    });
  }
};

module.exports = {
  verifyToken,
};
