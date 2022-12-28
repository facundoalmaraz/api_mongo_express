import Tasks from "../models/Tasks.js";

export const createTask = async (req, res) => {
    const { name, description } = req.body;
    
    try {
        const newTask = new Tasks({
        name,
        description
    
        });
    
        const taskSaved = await newTask.save();
    
        res.status(201).json(taskSaved);
    } catch (error) {
        console.error(error);
    }
    }

export const getTasks = async (req, res) => {
    const tasks = await Tasks.find();
    res.json(tasks);
    }

export const getTask = async (req, res) => {
    const task = await Tasks.findById(req.params.id);
    res.status(200).json(task);
    }

export const updateTask = async (req, res) => {
    const updatedTask = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(204).json(updatedTask);
    }

export const deleteTask = async (req, res) => {
    await Tasks.findByIdAndDelete(req.params.id);
    res.status(204).json();
    }