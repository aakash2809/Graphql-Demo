const {Widgets} = require('./dbconnections');
const { reject } = require('lodash')

const resolvers = {
    getProduct : ({id}) =>{
        // return new productDatabase(id, productDatabase[id]);
        return new promise((resolve)=>{
            Widgets.findById({'_id': id},(error ,product) =>{
                if(error) reject(error)
                else resolve(product)
            })
        })

    },

    getAllProduct : () =>{
        return Widgets.find({});
    },
  
    createProduct: async({ input }) => {
        const newWidget = new Widgets({
            name: input.name,
            description: input.description,
            price: input.price,
            soldout: input.soldout,
            inventory: input.inventory,
            stores: input.stores,
        });

        newWidget.id = newWidget._id;
        const result = await newWidget.save(); // Make sure to wrap this code in an async function
        console.log(result);
        return result;
    },

    updateProduct: async({input}) =>{
            return await Widgets.findOneAndUpdate({_id: input.id},input, {'new': true});
    },

    deleteProduct: async({id}) =>{
        try{
            await Widgets.findOneAndRemove({_id:id});
            return 'Sucessfully deleted widget';
        }
        catch(err) {
            return `failed to delete widget${err}`;
        }    
    }
}

module.exports =  resolvers;