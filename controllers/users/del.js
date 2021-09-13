const { users: service } = require('../../services');

const del = async (req, res, next) => {
  const { id } = req.params;

  try {
    await service.deleteOne(id);
    res.status(204).json({
      status: 'succes',
      code: 204,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

module.exports = del;
