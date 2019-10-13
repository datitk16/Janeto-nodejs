import { Router } from 'express'

const router = new Router()
router.get('/', (req, res) => res.send('GET LIST USER'))
router.get('/:id', (req, res) => res.send('GET USER DETAIL'))
router.post('/', (req, res) => res.send('POST USER'))
router.put('/', (req, res) => res.send('PUT USER'))
router.delete('/', (req, res) => res.send('DELTE USER'))

export default router