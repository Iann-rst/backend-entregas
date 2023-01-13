import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateClientController } from './modules/accounts/useCases/authenticateClient/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { Router } from "express";
import { AuthenticateDeliverymanController } from './modules/accounts/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();

const findAllAvailableController = new FindAllAvailableController();

//Clients
routes.post("/client/authenticate/", authenticateClientController.handle)
routes.post("/client/", createClientController.handle);

//Deliveryman
routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post("/deliveryman/authenticate/", authenticateDeliverymanController.handle);

//Deliveries
routes.post("/delivery", ensureAuthenticateClient, createDeliveryController.handle);
routes.get("/delivery/available", findAllAvailableController.handle)

export { routes };