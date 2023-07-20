import mongoose from 'mongoose';

const menuSchema = mongoose.Schema({
  meats: {
    type: [mongoose.ObjectId],
    ref: 'Product',
    required: true,
  },
  sideOrders: {
    type: [mongoose.ObjectId],
    ref: 'Product',
    required: true,
  },
  data: {
    type: Date,
    required: true,
    default: () => new Date(),
  }
});

export default mongoose.model('Menu', menuSchema);