import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ideaSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  mvp: {type: String},
  icebox: {type: String, default: "none"},
}, {
  timestamps: true
})

const Idea = mongoose.model('Idea', ideaSchema)

export {Idea}