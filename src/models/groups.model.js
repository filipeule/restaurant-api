import groupDb from '../db/groups.db.js';

const groupsArray = [
  { name: 'Beef' },
  { name: 'Pork' },
  { name: 'Poultry' },
  { name: 'Fish' },
  { name: 'Broth' },
  { name: 'Pasta' },
  { name: 'Legumes' },
  { name: 'Vegetable' },
  { name: 'Leaf Vegetable' },
];

async function populateGroupsCollection() {
  try {
    for (let group of groupsArray) {
      await groupDb.findOneAndUpdate({
        name: group.name
      }, group, {
        upsert: true,
      });
    }

    console.log('Populate food groups are ready!');
  } catch (error) {
    throw new Error('Cannot populate food groups in MongoDB.', error)
  }
}

async function getGroupIdByName(name) {
  try {
    const group = await groupDb.findOne({ name: name });

    if (!group) return;
  
    return group._id
  } catch (error) {
    throw new Error(error);
  }
}

export {
  populateGroupsCollection,
  getGroupIdByName,
}