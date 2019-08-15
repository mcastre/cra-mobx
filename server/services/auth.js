const secret = process.env.ROCO_USER_PW || '1234';

module.exports = answer => answer === secret;
