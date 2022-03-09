const mongoose=require('mongoose');

const SellerSchema = new mongoose.Schema({
  sghname: {
    type: String,
    required:true,
  }, 
  sghfoundername:{
    type: String,
    required:true
  },
  sghaddress:{
    type: String,
    required:true
  },
  productdetails:{
   type:[String],
   required:true
  },
  accountno:
  {
    type:String,
    required:true
  },
  bankname:{
    type:String,
    required:true
  },
  ifsccode:{
    type:String,
    required:true
  },
  branch:{
    type:String,
    required:true
  }
});

const Seller = mongoose.model('Seller', SellerSchema);
module.exports=Seller;
