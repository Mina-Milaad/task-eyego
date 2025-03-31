const repo = require('./repository');

exports.getLogs = async (req, res) => {
    const { page = 1, limit = 10, userId, eventType } = req.query;
    const filter = {};
    if (userId) filter.userId = userId;
    if (eventType) filter.eventType = eventType;
    const data = await repo.find(filter, Number(page), Number(limit));
    res.json(data);
};