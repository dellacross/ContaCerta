import { Request, Response } from "express";
import { CreatePaymentCategoryService } from "../../services/paymentcategory/CreatePaymentCategoryService";

class CreatePaymentCategoryController {
    async handle(req: Request, res: Response) {
        const { name } = req.body

        const createPaymentCategory = new CreatePaymentCategoryService()

        const paymentCategory = await createPaymentCategory.execute({name})

        return res.json({
            message: "Categoria de pagamento criada com sucesso!",
            paymentCategory: paymentCategory
        })
    }
}

export { CreatePaymentCategoryController }