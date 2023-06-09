import multer from 'multer';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import requireAuth from '../middleware/requireAuth.js';
import tutorialController from '../controllers/tutorialController.js';


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './backend/public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + file.originalname);
    }
});

let upload = multer({ storage: storage, limits: { filesize: 300000 } });


const router = express.Router();
// router.use((req, res, next) => {
//     const { tutorial } = req.params;
//     console.log(req.path,req.params,tutorial, "vägen")
//     next()
//     })
router.use(requireAuth);

router.get('/', tutorialController.getTutorials);

router.get('/usertutorials', tutorialController.getUserTutorial);

router.get('/:id', tutorialController.getTutorial);

router.put('/:id/like', tutorialController.saveTutorial);

router.post('/', upload.single('filename'), tutorialController.createTutorial);

router.delete('/:id', tutorialController.deleteTutorial);

router.patch('/:id', tutorialController.updateTutorial);


export default router;