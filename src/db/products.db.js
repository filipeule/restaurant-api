import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  group: {
    type: mongoose.ObjectId,
    ref: 'Group',
    required: true,
  }
});

export default mongoose.model('Product', productSchema);