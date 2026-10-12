const express=require("express");

const router=express.Router();

const upload=require("../middleware/serviceMiddleware");

const{

createService,

getAllService,

getSingleService,

getServiceBySlug,

getServiceDetail,

updateService,

deleteService,

getServiceImage

}=require("../controllers/serviceController");

router.post(

"/create",

upload.single("image"),

createService

);

router.get(

"/all",

getAllService

);

router.get(

"/:id",

getSingleService

);

router.put(

"/update/:id",

upload.single("image"),

updateService

);

router.delete(

"/delete/:id",

deleteService

);

router.get(

"/image/:filename",

getServiceImage

);

router.get(

"/slug/:slug",

getServiceBySlug

);

router.get(
    "/detail/:detailSlug",
    getServiceDetail
);

module.exports=router;