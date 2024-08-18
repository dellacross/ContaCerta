import { Request, Response } from "express";
import { DeletePaymentMethodService } from "../../services/paymentmethod/DeletePaymentMethodService";

class DeletePaymentMethodController {
    async handle(req: Request, res: Response) {
        const { payment_method_id } = req.body

        const deletePaymentMethod = new DeletePaymentMethodService()

        const paymentMethod = await deletePaymentMethod.execute({payment_method_id})

        return res.json({
            message: `O método de pagamento ${paymentMethod.name} foi deletado com sucesso!`,
            paymentMethod: paymentMethod
        })
    }
}

export { DeletePaymentMethodController }