const express = require("express");
const { ProductModel } = require("../model/Product.model");

const ProductRouter = express.Router();






//get Product


/**
* @swagger
* components:
*   schemas:
*       product:
*           type: object
*           properties:
*               name:
*                   type: string
*                   description: The user name
*               pass:
*                    type: string
*                    description: The user email
*               email:
*                     type: string
*                     description: The user email
*               avatar:
*                     type: string
*                     description: The user avatar
*               age:
*                     type: number
*                     description: The user age
*               number:
*                     type: number
*                     description: The user number
*               gender:
*                     type: string
*                     description: The user gender
*/


/**
 * @swagger
 * /products:
 *  get:
 *      summary: This will get all the user data from the database
 *      tags: [Product]
 *      responses:
 *          200:
 *              description: The list of all the users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          item:
 *                              $ref: "#/components/schemas/product"
 *
 */

/**
 * @swagger
 * /products/create:
 *  post:
 *      summary: This is to post a new user to the database.
 *      tags: [Product]
 *
 */


/**
 * @swagger
 * /products/delete/:id:
 *  delete:
 *      summary: This is to post a new user to the database.
 *      tags: [Product]
 *
 */

/**
 * @swagger
 * /products/update/:id:
 *  patch:
 *      summary: This is to post a new user to the database.
 *      tags: [Product]
 *
 */

ProductRouter.get("/",  async(req, res) => {
  const Product = await ProductModel.find()
  res.send(Product);

});

//create Product



ProductRouter.post("/create", async (req, res) => {
  let data = req.body
  const Product = new ProductModel(data)
  await Product.save()
  res.send({ massege: "New Product has been created",data });

});

//delete Product



ProductRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id
  await ProductModel.findByIdAndDelete({_id:id})
  res.send({ massege: `Product ${id} has been deleted` });

});


//update Product



ProductRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id
  const data=req.body
  await ProductModel.findByIdAndUpdate({_id:id},data)
  res.send({ massege: `Product ${id} has been update.` });

});


module.exports = {
  ProductRouter,
};
