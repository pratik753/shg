const mongoose=require('mongoose');

const BusSchema = new mongoose.Schema({
  posts:{
    type:[[Number]]
  } 
})
const Bus = mongoose.model('Bus', BusSchema);

module.exports=Bus;
