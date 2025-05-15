const express = require('express');
const router = require('express').Router()
const blogController = require('../controllers/blogController');
const { uploadSingle } = require('../middleware/multer');

// const uploadMultiple = require('../middleware/multer')


router.post('/blogs' , uploadSingle , blogController.createBlog )

router.get('/blogs' , blogController.getBlogs );

router.put('/blogs/:id' , blogController.updateBlog );

router.delete('/blogs/:id' , blogController.deleteBlog)


//xtras
//router.post('/blogsMulImg', uploadmultiple.array("mulImages"), blogController.uploadmultiple )


module.exports  = router;
