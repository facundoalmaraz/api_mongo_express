import Roles from "../models/Roles.js";

export const createRole = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newRole = new Roles({
      name,
      description,
    });

    const roleSaved = await newRole.save();

    res.status(201).json(roleSaved);
  } catch (error) {
    console.error(error);
  }
};

export const getRoles = async (req, res) => {
  const roles = await Roles.find();
  res.json(roles);
};

export const getRole = async (req, res) => {
  const role = await Roles.findById(req.params.id);
  res.status(200).json(role);
};

export const updateRole = async (req, res) => {
  const updatedRole = await Roles.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(204).json(updatedRole);
};

export const deleteRole = async (req, res) => {
  await Roles.findByIdAndDelete(req.params.id);
  res.status(204).json();
};
