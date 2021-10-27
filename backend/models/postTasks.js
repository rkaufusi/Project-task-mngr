import mongoose from 'mongoose'

// defines the shape of the documents within that collection
const taskSchema = mongoose.Schema({
  title: String,
  text: String,
  importance: Number,
  assigned: String,
  createdDate: {
      type: Date,
      default: new Date()
    }
})
// To use our schema definition, we need to convert our taskSchema into a Model. To do so, we pass it into mongoose.model(modelName, schema):
const TaskModel = mongoose.model('TaskModel', taskSchema)

export default TaskModel;