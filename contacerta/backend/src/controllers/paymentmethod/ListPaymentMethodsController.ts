import { Request, Response } from "express";
import { ListPaymentMethodsService } from "../../services/paymentmethod/ListPaymentMethodsService";

class ListPaymentMethodsController {
    async handle(req: Request, res: Response) {
        const listPaymentMethods = new ListPaymentMethodsService()

        const paymentMethods = await listPaymentMethods.execute()

        return res.json(paymentMethods)
    }
}

export { ListPaymentMethodsController }