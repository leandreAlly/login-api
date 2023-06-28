import { Router } from "express";
import { registerUser, loginUser } from "../../controllers/user.controller";
import registerValidation from "../../validations/user.validation";

const route = Router();

route.post("/signup", registerValidation, registerUser);
route.post("/login", loginUser);

export default route;
