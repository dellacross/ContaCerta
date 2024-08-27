import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface LoginRequest {
    email: string,
    password: string
}

class LoginUserService {
    async execute({email, password}: LoginRequest) {
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(!user) throw new Error('Usuário ou senha incorreto!')

        const passwordMath = await compare(password, user.password)

        if(!passwordMath) throw new Error('Usuário ou senha incorreto!')

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }   
        )

        return {
            id: user.id,
            name: user.name, 
            email: user.email,
            draft: user.draft,
            token: token,
            nickname: user.nickname
        }
    }
}

export { LoginUserService }