const {Router}= require('express');
const { getToDo,  createToDo,updateToDo,deleteToDo } = require('../controllers/ToDoController');

const router=Router()

router.get('/',getToDo);
router.post('/add',createToDo);
router.post('/update',updateToDo);
router.post('/delete',deleteToDo);





module.exports = router;