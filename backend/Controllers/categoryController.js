exports.categoryController = (req, res) => {
  console.log(req.params.language);

  res.status(200);
  res.json({
    status: 'success',
    data: null,
  });
};
