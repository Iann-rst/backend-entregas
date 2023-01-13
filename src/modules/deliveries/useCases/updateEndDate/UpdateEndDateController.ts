import { UpdateEndDateUseCase } from './UpdateEndDateUseCase';
import { Request, Response } from "express";

export class UpdateEndDateController {
  async handle(request: Request, response: Response) {

    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateEndDateUseCase = new UpdateEndDateUseCase();

    const delivery = await updateEndDateUseCase.execute({ id_delivery, id_deliveryman });

    return response.json(delivery);
  }
}