const data=require('./data.json')
const resolvers={
    Query:{
        getAll() {
            return  data
        }
    }

}
module.exports=resolvers;
