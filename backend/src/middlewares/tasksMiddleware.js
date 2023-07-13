//arquivo para validações de dados das requisições
//middlewares - é o que fica no meio do caminho, porque no arquivo rotas, aparece antes da função createTask
const validateBody = (req, res, next) => {
  const { body } = req;
  if (body.title === undefined) {
    //se 'title' for indefinido
    return res.status(400).json({ message: "The field 'title' is required." });
  }
  if (body.title === "") {
    //se 'title' for vazio
    return res.status(400).json({ message: " 'title' cannot be empty." });
  }
  next(); //após passar pelas duas verificações, irá passar para o próximo, que no caso é o 'tasksController.createTask' que está em router.js
};

const validateStatus = (req, res, next) => {
  const { body } = req;
  if (body.status === undefined) {
    return res.status(400).json({ message: "The field 'status' is required." });
  }
  if (body.status === "") {
    return res.status(400).json({ message: " 'status' cannot be empty." });
  }
  next();
};

module.exports = {
  validateBody,
  validateStatus
};
