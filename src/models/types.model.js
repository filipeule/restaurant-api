import typesDb from '../db/types.db.js';

async function populateTypesCollection() {
  const typesArray = [
    { name: 'Meat' },
    { name: 'Side order' },
    { name: 'Salad' }
  ];

  try {
    for (let type of typesArray) {
      await typesDb.findOneAndUpdate({
        name: type.name
      }, type, {
        upsert: true,
      });
    }

    console.log('Populate types are ready!');
  } catch (error) {
    throw new Error('Cannot populate types in MongoDB.', error)
  }

}

export {
  populateTypesCollection
}