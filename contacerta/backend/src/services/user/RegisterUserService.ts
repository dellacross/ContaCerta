import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    name: string,
    email: string,
    password: string,
    nickname: string
}

class RegisterUserService {
    async execute({ name, email, password, nickname }: UserRequest) {
        if(!email) throw new Error("Email incorreto!")
        
        // verifica se o email ja esta cadastrado
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        const nicknameAlreadyExists = await prismaClient.user.findFirst({
            where: {
                nickname: nickname
            }
        })

        if(nicknameAlreadyExists) throw new Error("Nickname já existente")

        if(userAlreadyExists) throw new Error("Usuário já existente")

        if(password?.length < 8) throw new Error("Sua senha deve ter, pelo menos, 8 caracteres")
        
        if(nickname?.length > 10) throw new Error("O nickname deve ter, no máximo, 10 caracteres")

        const passwordHash = await hash(password, 8) // senha criptografada

        const user = await prismaClient.user.create({
            data: {
                name: name, 
                email: email,
                password: passwordHash,
                rent: 0,
                nickname: nickname
            },
            select: {
                id: true,
                email: true,
                name: true,
                rent: true,
                nickname: true
            }
        })
    
        return {
            message: "Conta criada com sucesso!",
            datas: user
        }
    }
}

export { RegisterUserService }