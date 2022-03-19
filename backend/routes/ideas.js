import { Router } from 'express'
import * as ideasCtrl from '../controllers/ideas.js'

const router = Router()

// index
router.get('/', ideasCtrl.index)

// create
router.post('/', ideasCtrl.create)

// delete
router.delete('/:id', ideasCtrl.delete)

// put
router.put('/:id', ideasCtrl.update)

// show
router.get('/:id', ideasCtrl.show)

export {
  router
}
