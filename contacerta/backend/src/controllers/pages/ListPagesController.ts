import { Request, Response } from 'express';
import { ListPagesService } from '../../services/pages/ListPagesService';

class ListPagesController {
    async handle(req: Request, res: Response) {
        const listPages = new ListPagesService()

        const pages = await listPages.execute()

        return res.json(pages)
    }
}

export { ListPagesController }