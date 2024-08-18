import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { name, color } = req.body

        const createCategory = new CreateCategoryService()

        const category = await createCategory.execute({name, color})

        res.json({
            message: "Categoria criada com sucesso!",
            category: category
        })
    }
}

export { CreateCategoryController }