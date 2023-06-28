import Joi from "joi";

const registerValidationSchema = Joi.object({
  name: Joi.string().required().max(255),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }) // restrict only valid email
    .required()
    .max(255),
  password: Joi.string().required().min(8).max(16),
});

const registerValidation = async (req, res, next) => {
  const { error } = registerValidationSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    return res.status(400).json({
      error: error.details[0].message.replace(/[^a-zA-Z0-9 ]/g, ""),
    });
  }
  next();
};

export default registerValidation;
