function status(request, response) {
  response.status(200).json({ mensagem: "O Felipe é muito fod@" });
}

export default status;
