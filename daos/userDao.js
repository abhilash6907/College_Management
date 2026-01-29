const { UserModel } = require('../model/userModel');

const createUser = async (userData) => {
    return await UserModel.create(userData);
};

const getAllUsers = async () => {
    return await UserModel.findAll();
};

const getUserById = async (id) => {
    return await UserModel.findByPk(id);
};

const updateUser = async (id, userData) => {
    const user = await UserModel.findByPk(id);
    if (!user) return null;
    return await user.update(userData);
};

const deleteUser = async (id) => {
    const user = await UserModel.findByPk(id);
    if (!user) return null;
    return await user.destroy();
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
