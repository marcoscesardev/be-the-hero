const express = required('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
  return response.json({
    evento: 'teste',
    aluno: 'Marcos'
  })
});


module.exports = routes;