const Joi = require("joi");
const createError = require("../utils/create-error");

const registerSchema = Joi.object({
  username: Joi.string()
    .min(3)
    .max(40)
    .pattern(new RegExp("^[a-zA-Z0-9_]+$"))
    .messages({
      "string.pattern.base":
        "Username can only contain letters, numbers and underscores",
      "string.min": " user must be at least 3 characters long",
      "any.required": "Username is required",
    }),
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.email": "Invalid email",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).max(30).required().messages({
    "string.min": "Password must be at least 6 characters long",
    "string.max": "Password must be at most 30 characters long",
    "any.required": "Password is required",
  }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "Passwords do not match",
    "any.required": "Please confirm your password ",
  }),
}).required();

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.email": "Invalid email",
    "any.required": "Email is required",
  }),
  password: Joi.string().required().min(6).max(30).messages({
    "string.min": "Password be at least 6 characters long",
    "string.max": "Password be at most 30 characters long",
    "any.required": "Password is required",
  }),
}).required();

const createCommentSchema = Joi.object({
  text: Joi.string().required(),
  messages: {
    "string.empty": "Text is required",
  }
})

const validateSchema = (schema) => (req, res, next) => {
  console.log("body ===", req.body);
  const { value, error } = schema.validate(req.body);
  if (error) {
    console.log(error);
    const errorMessage = error.details[0].message;
    const err = createError(400, errorMessage);
    return next(err);
  }
  req.input = value;
  next();
};

exports.registerValidator = validateSchema(registerSchema);
exports.loginValidation = validateSchema(loginSchema);
exports.createCommentValidation = validateSchema(createCommentSchema)