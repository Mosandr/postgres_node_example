const { users: service } = require('../../services');

const update = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await service.updateOne(id, req.body);
    res.status(200).json({
      status: 'succes',
      code: 200,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
