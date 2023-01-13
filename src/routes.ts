import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateClientController } from './modules/accounts/useCases/authenticateClient/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { Router } from "express";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

const createDeliverymanController = new CreateDeliverymanController();

//Clients
routes.post("/authenticate", authenticateClientController.handle)
routes.post("/client/", createClientController.handle);

//Deliveryman
routes.post("/deliveryman/", createDeliverymanController.handle)

export { routes };