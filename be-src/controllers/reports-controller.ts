import { Report, Pet, User } from "../models";
import { resend } from "../../lib/resend";

export async function createReport(reportData) {
    try {
        const { name, phone, description, pet_id } = reportData

        const newReport = await Report.create({
            name,
            phone,
            description,
            pet_id
        })

        const pet = await Pet.findByPk(pet_id, { include: [User] })
        const owner = pet.get("user") as any

        await resend.emails.send({
            from: 'PetFinderAR <onboarding@resend.dev>',
            to: ['medimica@gmail.com'],
            subject: `¡Alguien vio a ${pet.get("name")}!`,
            html: `<h2>¡Buenas noticias! Alguien vio a ${pet.get("name")}</h2><p><strong>Nombre:</strong> ${name}</p><p><strong>Teléfono:</strong> ${phone}</p><p><strong>Dónde lo vio:</strong> ${description}</p>`
        })
        return newReport

    } catch (error) {
        console.log(error)
    }
}

export async function markPetAsFound(id) {
    try {
        
        const petFound = await Pet.update({ found: true }, { where: { id } })
        return petFound

    } catch (error) {
        console.log(error)
    }
}