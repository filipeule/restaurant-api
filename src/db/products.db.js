import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  group: {
    type: mongoose.ObjectId,
    ref: 'Group',
    required: true
  }
});

export default mongoose.model('Product', productSchema);

// TODO: Alterar o tipo do group para ObjectID e fazer o relacionamento toda vez que for adicionar ou ler um novo produto