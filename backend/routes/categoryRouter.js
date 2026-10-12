const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const {
  createCategory,
  getAllCategory,
  getSingleCategory,
  getCategoryImage,
  updateCategory,
  deleteCategory
} = require("../controllers/categoryController");

router.post(

"/create",

upload.single("image"),

createCategory

);

// Get All Category

router.get(

"/all",

getAllCategory

);

// Get Single Category

router.get(

"/:id",

getSingleCategory

);

// Get Image

router.get(

"/image/:filename",

getCategoryImage

);

// Update Category
router.put(
  "/update/:id",
  upload.single("image"),
  updateCategory
);

// Delete Category
router.delete(
  "/delete/:id",
  deleteCategory
);

module.exports = router;