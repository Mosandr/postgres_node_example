const { users: service } = require('../../services');

const add = async (req, res, next) => {
  try {
    const newUser = await service.addOne(req.body);
    res.status(201).json({
      status: 'succes',
      code: 201,
      data: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
