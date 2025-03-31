const service = require('./service');

exports.login = async (req, res) => {
    await service.sendAuthEvent({ userId: req.body.userId, eventType: 'LOGIN' });
    res.status(200).json({ message: 'User logged in' });
};

exports.logout = async (req, res) => {
    await service.sendAuthEvent({ userId: req.body.userId, eventType: 'LOGOUT' });
    res.status(200).json({ message: 'User logged out' });
};
