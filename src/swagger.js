import dotenv from "dotenv/config";
import { signUp, loginUser } from "./documents/user.docs";

export const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "Login Flow APIs Document",
    description: "Login: an login api for allowing user to regiter and login",
    termsOfService: "",
    contact: {
      name: "Leandre",
      email: "tuyambazeleandre@gmail.com",
      url: "https://leandredev.netlify.app/",
    },
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}`, // url
      description: "Local server", //
    },
    {
      url: "https://login-flow-api.onrender.com/", // url
      description: "Hosted version", // name
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "apiKey",
        name: "Authorization",
        scheme: "bearer",
        in: "header",
      },
    },
  },
  paths: {
    "/api/v1/users/signup": {
      post: signUp,
    },
    "/api/v1/users/login": {
      post: loginUser,
    },
  },
};
