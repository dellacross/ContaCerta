import { Request, Response } from "express";
import { CreatePaymentMethodService } from "../../services/paymentmethod/CreatePaymentMethodService";

class CreatePaymentMethodController {
    async handle(req: Request, res: Response) {
        const { name } = req.body

        const createPaymentMethod = new CreatePaymentMethodService()

        const paymentMethod = await createPaymentMethod.execute({name})

        return res.json({
            message: `Método de pagamento ${name} criado com sucesso!`,
            paymentMethod: paymentMethod
        })
    }
}

export { CreatePaymentMethodController }