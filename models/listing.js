const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./review.js");

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description: String,
    // image:{
        
    //     filename: {
    //         type:String,
    //         default:"listingimage"

    //     },
    //     url: {
    //         type:String,
    //         default:"https://unsplash.com/photos/bare-trees-illuminated-by-red-light-in-dark-forest-SQKI5yqlDqs",
    //         set: (v) => v=== "" ? 
    //         "https://unsplash.com/photos/bare-trees-illuminated-by-red-light-in-dark-forest-SQKI5yqlDqs" :v,

    //     }
    image:{
        url:String,
        filename:String,
    },

        // default:"https://unsplash.com/photos/bare-trees-illuminated-by-red-light-in-dark-forest-SQKI5yqlDqs",
        // set: (v) => v=== "" ? 
        // "https://unsplash.com/photos/bare-trees-illuminated-by-red-light-in-dark-forest-SQKI5yqlDqs" :v,
        
    // },
    price:Number,
    location:String,
    country:String,

    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    geometry:{
        type:{
            type:String,//Don't dp `{location:{type:String}}`
            enum:['Point'],//'location.type' must be 'Point'
            required:true,
        },
        coordinates:{
            type:[Number],
            required:true,
        },
        
    },
    // category:{
    //       type:String,
    //       enum: ["mountains","arctic","farms","deserts"]
    // }
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}});
}
});
    

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;