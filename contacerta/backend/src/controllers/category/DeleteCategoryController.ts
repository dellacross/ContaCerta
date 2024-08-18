import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";

class DeleteCategoryController {
    async handle(req: Request, res: Response) {
        const { category_id } = req.body

        const deleteCategory = new DeleteCategoryService()

        const category = await deleteCategory.execute({category_id})

        return res.json({
            message: `Categoria ${category.name} deletada com sucesso!`,
            category: category
        })
    }
}

export { DeleteCategoryController }