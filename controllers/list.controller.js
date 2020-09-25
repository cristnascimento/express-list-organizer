const service = require('../services/list.service');

const findAll = (req,res) => {
    service.hello();
    let contacts = service.getContacts();
    res.render('lists', {data: contacts});
}

module.exports = {
    findAll
}