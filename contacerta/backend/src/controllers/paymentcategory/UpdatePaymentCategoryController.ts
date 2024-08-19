import { Request, Response } from "express";
import { UpdatePaymentCategoryService } from "../../services/paymentcategory/UpdatePaymentCategoryService";

class UpdatePaymentCategoryController {
    async handle(req: Request, res: Response) {
        const { payment_category_id, name } = req.body

        const updatePaymentCategory = new UpdatePaymentCategoryService()

        const payment = updatePaymentCategory.execute({payment_category_id, name})

        return res.json({
            message: `A categoria de pagamento ${name} foi atualizada com sucesso!`,
            payment: payment
        })
    }
}

export { UpdatePaymentCategoryController }