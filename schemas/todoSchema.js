const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  date: {   
    type: Date,
    default: Date.now,
  },
  user:{
    type:mongoose.Types.ObjectId,
    ref:"User"
  }
});

// instance methods
todoSchema.methods = {
  findActive: function (cb) {
    return mongoose.model("Todo").find({status:"active"},cb)
  },
};

// static methods
todoSchema.statics = {

    // if title has keyword "js" in it
    findByJs: function (cb) {
        return this.find({title:/js/i},cb)
    }
}

// query helper 
todoSchema.query  = {
    byLanguage: function (language,cb) {
        return this.find({title: new RegExp(language,"i")},cb)
    }
}

module.exports = todoSchema;
