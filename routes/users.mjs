import express from 'express'
import path from "path"
import User from "../models/Users.mjs"

const __dirname = path.resolve()
const router = express.Router()

router.use(express.static("public"));

router.get("/users", async (req, res) => {
    try {
        const data = await User.find({})

        res.status(200).send({
            status: "success",
            message: "data fetched successfully.",
            data: data
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "error",
            message: "Something went wrong.",
            error: error
        })
    }
})

router.post("/users", async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!email || !name || !password) {
            throw new Error("missing required params")
        }

        const user = await User.create({
            name: name,
            email: email,
            password: password
        })
        res.send({
            data: user
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: "Something went wrong"
        })
    }
})

router.delete("/users", async (req, res) => {
    try {
        let id = req.body.id

        if (!id) {
            return res.status(400).send({
                status: "error",
                message: "missing required params.",
            })
        }

        await User.findByIdAndDelete(id)
        const data = await User.find({})

        res.status(200).send({
            status: "success",
            message: "data fetched successfully.",
            data: data
        })

    } catch (error) {
        res.status(500).send({
            status: "error",
            message: error.message,
        })
    }
})

router.put("/users", async (req, res) => {
    try {
        const { id, name, password, email } = req.body

        if (!id || !name || !email || !password) {
            return res.status(400).send({
                status: "error",
                message: "missing required params.",
            })
        }

        await User.findByIdAndUpdate(id, {
            name: name,
            email: email,
            password: password
        }, { new: true })

        const data = await User.find({})

        res.status(200).send({
            status: "success",
            message: "data edited successfully.",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            status: "error",
            message: error.message,
        })
    }
})

export default router