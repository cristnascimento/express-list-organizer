const add = async (Lists, item) => {
    console.log(item);
    const newItem = await Lists.create(item);
    // Jane exists in the database now!
    console.log(newItem.id); // true
    console.log(newItem.description); // "Jane"
    return newItem
}

const findAll = async (Items, listId) => {
    return await Items.findAll({where: {fk_listId: listId}});
}

const updateItem = async (Items, item) => {
    return await Items.update({description: item.description},
        {
            where: {id: item.id}
        }
    );
}

const deleteItem = async (Items, id) => {
    return await Items.destroy({
        where: {
          id: id
        }
      });
}

module.exports = {
    add,
    findAll,
    updateItem,
    deleteItem
}