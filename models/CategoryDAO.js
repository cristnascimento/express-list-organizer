const add = async (Category, item) => {
    console.log(item);
    const newItem = await Category.create(item);
    // Jane exists in the database now!
    console.log(newItem.id); // true
    console.log(newItem.name); // "Jane"
    return newItem
}

const findAll = async (Category) => {
    return await Category.findAll({});
}

const findOne = async (Category, categoryId) => {
    return await Category.findAll({where: {id: categoryId}});
}

module.exports = {
    add,
    findAll,
    findOne
}