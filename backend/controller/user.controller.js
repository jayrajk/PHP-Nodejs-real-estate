const db = require('../models/index');
const user = db.user;
const property = db.property;

user.hasMany(property);

module.exports = {
    getAll() {
        return user.findAll({
            where: {
                name: 'JK'
            },
            include: [
                {
                    model: property,
                    attributes: {
                        include: ['name', 'address'],
                        exclude: ['createdAt', 'updatedAt']
                    }
                },
            ]
        })
            .then((result) => {
                res.send(result);
            })
            .catch(() => {

            })
    }
};