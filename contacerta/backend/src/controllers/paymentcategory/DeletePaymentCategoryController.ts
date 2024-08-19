import { Request, Response } from "express";
import { DeletePaymentCategoryService } from "../../services/paymentcategory/DeletePaymentCategoryService";

class DeletePaymentCategoryController {
    async handle(req: Request, res: Response) {
        const { payment_category_id } = req.body

        const deletePaymentCategory = new DeletePaymentCategoryService()

        const payment = await deletePaymentCategory.execute({payment_category_id})

        return res.json({
            message: `A categoria de pagamento ${payment.name} foi deletada com sucesso!`,
            payment: payment
        })
    }
}

export { DeletePaymentCategoryController }