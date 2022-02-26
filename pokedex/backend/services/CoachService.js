const database = require('../database/models/');

const CoachService = {
    create: async ({ nome, email, senha }) => {
        const newcoach = await database.Coach.create({ nome, email, senha });
        return newcoach;
    }
}

module.exports = CoachService;