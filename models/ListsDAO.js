const add = async (Lists, item) => {
    console.log(item);
    const newItem = await Lists.create(item);
    // Jane exists in the database now!
    console.log(newItem.id); // true
    console.log(newItem.description); // "Jane"
    return newItem
}

const findAll = async (Lists, categoryId) => {
    return await Lists.findAll({where:{categoryId: categoryId}});
}

const findSpecific = async (Lists, id) => {
    return await Lists.findAll({where:{categoryId: id}});
}

const update = async (Lists, list) => {
    return await Lists.update({description: list.description},
        {
            where: {id: list.id}
        }
    );
}

module.exports = {
    add,
    findAll,
    findSpecific
}