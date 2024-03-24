import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true, 'Please add a name'],
        unique : true,
        trim : true,
        maxlength : [50, 'Name can not be more than 50 characters']
    },
    address: {
        type : String,
        required : [true, 'Please add an address']
    },
    district: {
        type : String,
        required : [true, 'Please add a district']
    },
    province: {
        type : String,
        required : [true, 'Please add a province']
    },
    postalcode: {
        type : String,
        required : [true, 'Please add a postal code'],
        maxlength : [5, 'Postal code can not be more than 5 digits']
    },
    website: {
        type : String,
        required : [true, 'Please add a website']
    },
    description: {
        type : String,
        required : [true, 'Please add a description'],
        maxlength : [200, 'Name can not be more than 200 characters']
    },
    tel : {
        type : String,
    },
    region : {
        type : String,
        required : [true, 'Please add a region']
    },
} , {
    toJSON : {virtuals : true},
    toObject : {virtuals : true}
});

const Company = mongoose.models.Company || mongoose.model("Company", CompanySchema);
export default Company;