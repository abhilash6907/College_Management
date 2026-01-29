
const userDao = require('../daos/userDao.js')

const createUser = async (req, res) => {
   try {
      const user = await userDao.createUser(req.body);
      return res.status(201).json({ user })
   } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
   }
}

const getUsers = async (req, res) => {
   try {
      const users = await userDao.getAllUsers();
      return res.status(200).json({ users });
   } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });

   }
}

const getUserById = async (req, res) => {
   try {
      const user = await userDao.getUserById(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      return res.status(200).json({ user });
   } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message })
   }
}

const updateUser = async (req, res) => {
   try {
      const user = await userDao.updateUser(req.params.id, req.body);
      if (!user) return res.status(404).json({ error: 'User not found' });

      return res.status(200).json({ msg: "User updated" })

   } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message })
   }
}

const deleteUser = async (req, res) => {
   try {
      const result = await userDao.deleteUser(req.params.id);
      if (result === null) return res.status(404).json({ error: 'User not found' });

      return res.status(200).json({ msg: 'user deleted' })

   } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message })
   }
}

module.exports={
   createUser,getUsers,getUserById, updateUser, deleteUser
}