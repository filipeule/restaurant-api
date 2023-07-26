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
  salad: {
    type: [mongoose.ObjectId],
    ref: 'Product',
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: () => new Date(),
  }
});

export default mongoose.model('Menu', menuSchema);