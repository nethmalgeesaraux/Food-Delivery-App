import userModel from "../models/userModel.js";

const addcart = async (req, res) => {
    try{
        let userData =await userModel.findById({_id:req.body.userId});
        let cartData = await userData.cart;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = req.body.quantity;
        }else{
            cartData[req.body.itemId] += req.body.quantity;

        }
        await userModel.findByIdAndUpdate({_id:req.body.userId},{cart:cartData});
        res.status(200).json({message:"cart added successfully"});

    }catch(error){
        console.log(error);
        res.status(500).json({message:"something went wrong"});

    }
    
}

const removecart = async (req, res) => {
    try{
        let userData =await userModel.findById({_id:req.body.userId});
        let cartData = await userData.cart;
        delete cartData[req.body.itemId];
        await userModel.findByIdAndUpdate({_id:req.body.userId},{cart:cartData});
        res.status(200).json({message:"cart removed successfully"});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"something went wrong"});
    }
    
}

const getcart = async (req, res) => {
    try{
        let userData =await userModel.findById({_id:req.body.userId});
        let cartData = await userData.cart;
        res.status(200).json({message:"cart fetched successfully",cartData:cartData});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"something went wrong"});
    }
    
}

export{addcart,removecart,getcart}