import Users from "../models/User.js";

export const createUser = async (req, res) => {
  const { name, lastName, age, address, role } = req.body;

  try {
    const newUser = new Users({
      name,
      lastName,
      age,
      address,
      role,

    });

    const userSaved = await newUser.save();

    res.status(201).json(userSaved);
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user)
  } catch (error) {
    console.error(error);
  }
};

export const updateUserById = async (req, res) => {
  const updateUser = await Users.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateUser);
};

export const deleteUserById = async (req, res) => {
  const { id } = req.params;
  await Users.findByIdAndDelete(id);
  res.status(204).json();
  res.send("User deleted");
};
