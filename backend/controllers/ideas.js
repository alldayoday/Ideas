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
}

const create = (req, res) => {
  console.log('create')
}

const deleteIdea = (req, res) => {
  console.log('deleteIdea')
}

const update = (req, res) => {
  console.log('update')
}

const show = (req, res) => {
  console.log('show')
}

export {
  index,
  create,
  deleteIdea as delete,
  update,
  show,
}