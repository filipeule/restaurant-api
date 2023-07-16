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

export {
  populateGroupsCollection
}