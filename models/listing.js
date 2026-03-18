const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description: String,
    image:{
        
        filename: {
            type:String,
            default:"listingimage"

        },
        url: {
            type:String,
            default:"https://unsplash.com/photos/bare-trees-illuminated-by-red-light-in-dark-forest-SQKI5yqlDqs",
            set: (v) => v=== "" ? 
            "https://unsplash.com/photos/bare-trees-illuminated-by-red-light-in-dark-forest-SQKI5yqlDqs" :v,

        }
},
        // default:"https://unsplash.com/photos/bare-trees-illuminated-by-red-light-in-dark-forest-SQKI5yqlDqs",
        // set: (v) => v=== "" ? 
        // "https://unsplash.com/photos/bare-trees-illuminated-by-red-light-in-dark-forest-SQKI5yqlDqs" :v,
        
    // },
    price:Number,
    location:String,
    country:String,
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;