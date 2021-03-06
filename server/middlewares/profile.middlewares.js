import Joi from 'joi';
import joiFormater from '../helpers/joiFormater';
import profileSchema from '../joiSchema/profileSchema';
import validations from '../helpers/validations';

const middleware = {
  validateUpdateProfile(req, res, next) {
    if (!Object.keys(req.body).length) {
      return res.status(400).json({
        error: 'no input provided',
      });
    }

    if (!validations.validEditableProfileBody(req.body)) {
      return res.status(400).json({
        error: 'invalid input properties',
      });
    }

    const { error } = Joi.validate(req.body, profileSchema());

    if (error) {
      const { message } = error.details[0];
      const formatedMessage = joiFormater(message);
      return res.status(400).send({
        message: formatedMessage,
      });
    }

    return next();
  },
};

export default middleware;
