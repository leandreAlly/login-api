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

export const loginUser = {
  tags: ["User Authentication"],
  description: "Logs in a user",
  operationId: "loginUser",
  parameters: [],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            email: {
              type: "string",
              description: "User email",
              example: "user@test.com",
            },
            password: {
              type: "string",
              description: "User password",
              example: "password123",
            },
          },
          required: ["email", "password"],
        },
      },
    },
  },
  responses: {
    200: {
      description: "Successful login",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Successful login",
              },
              token: {
                type: "string",
                example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
              },
            },
          },
        },
      },
    },
    401: {
      description: "Invalid email or password",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Invalid email or password",
              },
            },
          },
        },
      },
    },
    404: {
      description: "User not found",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "User not found",
              },
            },
          },
        },
      },
    },
    500: {
      description: "Server error",
    },
  },
};
