import TaskModels from '../models/postTasks.js';

// export to use in /routes/tasks.js
// controllers separated from the routes
//set up routes, request and response. async await
export const getTasks = async (req, res) => {
    try {
      // finding something in TaskModels takes time, so it's asynchronos
      const taskModels = await TaskModels.find();
      console.log(taskModels)
      // status(200) everything went okay.
      res.status(200).json(taskModels)
    } catch (error) {
      res.status(404).json({message: error.message})
    }
  }

  export const createTask = async (req, res) => {
    const body = req.body

    const newTask = new TaskModels(body);
    try {
      await newTask.save()
      // 201 successful creation. HTTP status codes
      res.status(201).json(newTask)
    } catch (error) {
      res.status(409).json({message: error.message})
    }
  }