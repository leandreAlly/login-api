export const signUp = {
  tags: ["User Authentication"],
  description: "Signup a user",
  operationId: "signUpUser",
  parameters: [],
  requestBody: {
    content: {
      // content-type
      "application/json": {
        schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "user first name",
              example: "myname",
            },
            email: {
              type: "string",
              description: "User email",
              example: "myname@test.com",
            },
            password: {
              type: "string",
              description:
                "password must include one number small letters and characters + capital letters", // desc
              example: "@name123",
            },
          },
        },
      },
    },
  },
  responses: {
    // response code
    201: {
      description: "User created successfully", // response desc
    },
    // response code
    500: {
      description: "Server error", // response desc
    },
  },
};
