const responses = (statusCode, datas, message, res) => {
  res.json({
    pagination: {
      prev: "",
      next: "",
      max: "",
    },
    payload: {
      statusCode,
      message,
      datas,
    },
  });
};

export default responses;
