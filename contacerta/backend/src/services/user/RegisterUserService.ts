import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class RegisterUserService {
    async execute({ name, email, password}: UserRequest) {
        if(!email) throw new Error("Email incorreto!")
        
        // verifica se o email ja esta cadastrado
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(userAlreadyExists) throw new Error("Usuário já existente")

        const passwordHash = await hash(password, 8) // senha criptografada

        const user = await prismaClient.user.create({
            data: {
                name: name, 
                email: email,
                password: passwordHash,
                rent: 0
            },
            select: {
                id: true,
                email: true,
                name: true,
                rent: true
            }
        })
    
        return {
            message: "Conta criada com sucesso!",
            datas: user
        }
    }
}

export { RegisterUserService }