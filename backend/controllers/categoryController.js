const Category = require("../models/Category");
const path = require("path");

exports.createCategory = async (req, res) => {
  try {

    console.log("Body:", req.body);
    console.log("File:", req.file);

    // Trim values
    const name = req.body.name?.trim();
    const description = req.body.description?.trim();

    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Required"
      });
    }

    // Image Validation
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please Upload Image"
      });
    }

    const categoryExist = await Category.findOne({ name });

    if (categoryExist) {
      return res.status(400).json({
        success: false,
        message: "Category Already Exists"
      });
    }

    const category = new Category({
      name,
      description,
       image: req.file.filename
    });

    await category.save();

    res.status(201).json({
      success: true,
      message: "Category Created Successfully",
      data: category
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

//get all category  http://localhost:3000/api/category/all
exports.getAllCategory = async (req, res) => {

    try {
        const category = await Category.find();
        res.status(200).json({
            success: true,
            count: category.length,
            data: category
        });
    }

    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//Get Single Category   GET http://localhost:3000/api/category/6872xxxxxxxx
exports.getSingleCategory = async (req, res) => {

    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: category
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//Browser Me Image Open  http://localhost:3000/api/category/image/6872xxxxxxxx
exports.getCategoryImage = (req, res) => {

    res.sendFile(

        path.join(

            __dirname,

            "../uploads",

            req.params.filename

        )

    );

};

//update category  http://localhost:3000/api/category/update/<category_id>
exports.updateCategory = async (req, res) => {

  console.log(req.body);
  console.log(req.file);
  try {

    const { name, description } = req.body;
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category Not Found"
      });
    }

    category.name = name || category.name;
    category.description = description || category.description;

    // Agar new image upload hui hai
    if (req.file) {
     category.image = req.file.filename;
    }

    await category.save();

    res.status(200).json({
      success: true,
      message: "Category Updated Successfully",
      data: category
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

//delete category api   http://localhost:3000/api/category/delete/<category_id>
exports.deleteCategory = async (req, res) => {
  try {

    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category Not Found"
      });
    }

    await Category.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Category Deleted Successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};