const add = async (Lists, item) => {
    console.log(item);
    const newItem = await Lists.create(item);
    // Jane exists in the database now!
    console.log(newItem.id); // true
    console.log(newItem.description); // "Jane"
    return newItem
}

const findAll = async (Lists) => {
    return await Lists.findAll({});
}

module.exports = {
    add,
    findAll
}