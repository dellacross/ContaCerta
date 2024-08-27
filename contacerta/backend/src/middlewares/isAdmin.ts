import { Request, Response, NextFunction } from "express";
import prismaClient from "../prisma";

interface Admin {
    user_id: string
}

class isAdminService {
    async execute({ user_id }: Admin) {
        
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        })

        return user.admin
    }
}

export function isAdmin(req: Request, res: Response, next: NextFunction) {

    const { user_id } = req.body

    const isAdm = new isAdminService()

    const admin = isAdm.execute({ user_id })

    if(admin) {
        return next()
    } else {
        return res.status(401).end()
    }
}