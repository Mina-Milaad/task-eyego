const Log = require('./schema');

exports.save = async (event) => {
    const log = new Log(event);
    return await log.save();
};

exports.find = async (filter = {}, page = 1, limit = 10) => {
    const skip = (page - 1) * limit;
    const logs = await Log.find(filter).sort({ timestamp: -1 }).skip(skip).limit(limit);
    const total = await Log.countDocuments(filter);
    return { total, logs };
};
