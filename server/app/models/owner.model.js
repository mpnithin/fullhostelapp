module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        hostelname: String,
        ownername: String,
        address: String,
        email: String,
        phone: String,
        noofrooms: String,
        vacantrooms: String,
        roomtype:String,
        rent:String,
        published: Boolean
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Owner = mongoose.model("owner", schema);
    return Owner;

    
  };