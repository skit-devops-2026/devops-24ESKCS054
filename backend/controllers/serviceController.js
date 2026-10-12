const Services = require("../models/Services");
const slugify = require("slugify");
const path = require("path");

// ======================
// Create Service
// ======================

exports.createService = async (req, res) => {
   
    try {

        console.log("Body:", req.body);

        console.log("File:", req.file);
        
        const {
            name,
            service,
            ageGroup,
            gender,
            vital,
            preventiveWellness,
            shortDescription,
            longDescription,
            mrp,
            sellingPrice,
            status
        } = req.body;

        if (
            !name||
            !service ||
            !ageGroup ||
            !gender ||
            !vital ||
            !preventiveWellness ||
            !shortDescription ||
            !longDescription ||
            !mrp ||
            !sellingPrice ||
            !req.file
        ) {
            return res.status(400).json({
                success: false,
                message: "All Fields are Required"
            });
        }
        const newService = await Services.create({
            name,
            service,

            slug: slugify(service,{
             lower:true,
             strict:true
            }),
            detailSlug: slugify(name,{
            lower:true,
            strict:true
            }),
            ageGroup,
            gender,
            vital,
            preventiveWellness,
            shortDescription,
            longDescription,
            mrp,
            sellingPrice,
            status,
            image:req.file.filename,
        });

        res.status(201).json({
            success: true,
            message: "Service Created Successfully",
            data: newService
        });
    }

    catch (error) {

    console.log("Create Service Error:", error);

    res.status(500).json({
        success: false,
        message: error.message
    });

  }
};



// ======================
// Get All Services
// ======================

exports.getAllService = async (req, res) => {
    try {
        const services = await Services.find();
        res.status(200).json({
            success: true,
            count: services.length,
            data: services
        });
    }

    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



// ======================
// Get Single Service
// ======================

exports.getSingleService = async (req, res) => {
    try {
        const service = await Services.findById(req.params.id);
        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: service
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};




// ======================
// Update Service
// ======================

exports.updateService = async (req, res) => {

    try {
        const service = await Services.findById(req.params.id);
        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service Not Found"
            });
        }
        
        service.name = req.body.name || service.name;

        if(req.body.name){
        service.detailSlug = slugify(req.body.name,{
        lower:true,
        strict:true
         });
        }
        
        service.service = req.body.service || service.service;

        if(req.body.service){

         service.slug = slugify(req.body.service,{
        lower:true,
        strict:true
       });

    }

        service.ageGroup = req.body.ageGroup || service.ageGroup;

        service.gender = req.body.gender || service.gender;

        service.vital = req.body.vital || service.vital;

        service.preventiveWellness =
            req.body.preventiveWellness || service.preventiveWellness;

        service.shortDescription =
            req.body.shortDescription || service.shortDescription;

        service.longDescription =
            req.body.longDescription || service.longDescription;

        service.mrp = req.body.mrp || service.mrp;

        service.sellingPrice =
            req.body.sellingPrice || service.sellingPrice;

        service.status = req.body.status ?? service.status;

        if (req.file) {
            service.image=req.file.filename;
        }

        await service.save();
        res.status(200).json({
            success: true,
            message: "Service Updated Successfully",
            data: service
        });

    }

    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



// ======================
// Delete Service
// ======================

exports.deleteService = async (req, res) => {
    try {
        const service = await Services.findById(req.params.id);
        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service Not Found"
            });
        }

        await Services.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Service Deleted Successfully"
        });

    }

    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message

        });

    }

};



// ======================
// Get Image
// ======================

exports.getServiceImage = (req, res) => {

    res.sendFile(
        path.join(
            __dirname,
            "../uploads",
            req.params.filename
        )
    );
};

// ======================
// Get slug
// ======================
exports.getServiceBySlug = async (req, res) => {

    try {
        const services = await Services.find({
            slug: req.params.slug
        });

        if (services.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Service Not Found"
            });
        }
        res.status(200).json({
            success: true,
            count: services.length,
            data: services
        });
    }

    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// ======================
// Get Name slug
// ======================
exports.getServiceDetail = async (req, res) => {

    try {

        console.log("detailSlug =", req.params.detailSlug);

        const service = await Services.findOne({
            detailSlug: req.params.detailSlug
        });

        console.log("Mongo Result =", service);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: service
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};