const index = (request, response) => {
  response.status(200).json({ chave: "valor" });
};

export default index;
