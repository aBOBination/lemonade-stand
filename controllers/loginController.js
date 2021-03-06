const db = require('../models');
const validateLoginInput = require('../validation/login');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

// Defining methods for the booksController
module.exports = {
  loginUser: function (req, res) {
    const { errors, isValid } = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    db.User.findOne({ email }).then((user) => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: 'Email not found' });
      }

      // Check password
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            email: user.email,
            imageUrl: user.imageUrl,
            items: user.items
          };

          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: 'Password incorrect' });
        }
      });
    });
  }
};
