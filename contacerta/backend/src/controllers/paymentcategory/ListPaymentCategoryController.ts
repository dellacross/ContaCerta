import { Request, Response } from "express";
import { ListPaymentCategoryService } from "../../services/paymentcategory/ListPaymentCategoryService";

class ListPaymentCategoryController {
    async handle(req: Request, res: Response) {
        const listPaymentCategory = new ListPaymentCategoryService()

        const payments = await listPaymentCategory.execute()

        return res.json(payments)
    }
}

export { ListPaymentCategoryController }