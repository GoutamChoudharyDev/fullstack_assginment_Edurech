import { Contact } from "../models/contact.model.js";

const createContact = async (req, res) => {
    try {
        // get data from frontend
        const { fullName, email, subject, message } = req.body;

        // validation   
        if (!fullName || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        // create object
        const contact = await Contact.create({
            fullName,
            email,
            subject,
            message
        })

        if (!contact) {
            return res.status(500).json({
                success: false,
                message: "Contact creation failed"
            })
        }

        // return success res
        return res.status(200).json({
            success: true,
            message: "Message sent successfully",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
}

export { createContact }