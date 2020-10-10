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

const update = async (Category, category) => {
    return await Category.update({name: category.name},
        {
            where: {id: category.id}
        }
    );
}

const deleteCategory = async (Category, id) => {
    return await Category.destroy({
        where: {
          id: id
        }
      });
}

module.exports = {
    add,
    findAll,
    findOne,
    update,
    deleteCategory
}