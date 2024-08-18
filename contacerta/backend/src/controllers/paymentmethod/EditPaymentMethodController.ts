import { Request, Response } from "express";
import { EditPaymentMethodService } from "../../services/paymentmethod/EditPaymentMethodService";

class EditPaymentMethodController {
    async handle(req: Request, res: Response) {
        const { name, payment_method_id } = req.body

        const editPaymentMethod = new EditPaymentMethodService()

        const paymentMethod = await editPaymentMethod.execute({name, payment_method_id})

        return res.json({
            message: `O método de pagamento foi atualizado para: ${name}`,
            paymentMethod: paymentMethod
        })
    }
}

export { EditPaymentMethodController }