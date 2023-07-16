import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true
  }
});

export default mongoose.model('Product', productSchema);

// TODO: Alterar o tipo do type para ObjectID e fazer o relacionamento toda vez que for adicionar ou ler um novo produto