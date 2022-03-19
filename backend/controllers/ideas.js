import { Idea } from "../models/idea.js"

const index = (req, res) => {
  console.log('index')
  Idea.find({})
  // .then(ideas => res.json(ideas))
  .then(ideas => {
    console.log(ideas)
    console.log(res.json(ideas))
    res.json(ideas)
  })
  .catch(error => res.json(error))
}

const create = (req, res) => {
  console.log('create')
  Idea.create(req.body)
  .then(idea => res.json(idea))
  .catch(error => res.json(error))
}

const deleteIdea = (req, res) => {
  console.log('deleteIdea')
  Idea.findByIdAndDelete(req.params.id)
  .then(idea => res.json(idea))
  .catch(error => res.json(error))
}

const update = (req, res) => {
  console.log('update')
  Idea.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(idea => res.json(idea))
  .catch(error => res.json(error))
}

const show = (req, res) => {
  console.log('show')
  Idea.findById(req.params.id)
  .then(idea => res.json(idea))
  .catch(error => res.json(error))
}

export {
  index,
  create,
  deleteIdea as delete,
  update,
  show,
}