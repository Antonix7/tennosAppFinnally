import {Products} from "../model/Products.js";

export const registerProduct = async (req, res) => {
    try {
        const newProduct = Products.create({
            name,
            price,
            creationDate
        })
        res.json(newProduct)
    } catch (error) {
        console.log('Fallo al intentar registrar',error);
        res.send(500).json({
            message: 'Fallo al intentar registrar'
        })
    }
}
export const consulteAllProducts = async (req, res) => {
    try {
        const products = await Products.findAll()
        res.json(products);
    } catch (error) {
        console.log('Fallo al intentar mostrar', error);
        res.send(500).json({
            message: 'Fallo al intentar mostrar'
        })
    }
}
export const consulteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Products.findOne({
            where: {
                id
            }
        })
        res.json(product);
    } catch (error) {
        console.log('Fallo al intentar mostrar',error);
        res.send(500).json({
            message: 'Fallo al intentar mostrar'
        })
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        await Products.destroy({
            where: {
                id
            }
        })
        res.json(Products);
    } catch (error) {
        console.log('Fallo al intentar eliminar',error)
        res.send(500).json({
            message: 'Fallo al intentar eliminar'
        })
    }
}
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const { name, price, creationDate } = req.body

        const product = await Products.findByPk(id)

        product.name = name
        product.price = price
        product.creationDate = creationDate

        await product.save();
        res.json(product)
    } catch (error) {
        console.log('Fallo al intentar actualizar', error)
        res.send.json({
            message: 'Fallo al intentar actualizar'
        })
    }
}