import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import './add.css'

const Add = () => {

    const[image, setImage] = useState(false);
    const[data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"salad"

    })
    const onChangeHandler =(event)=>{
        const name =event.target.name;
        const value = event.target.value;
        setData({...data, [name]:value})
    }

    useEffect(()=>{
        console.log(data)
    },[data])

  return (
    <div className='add'>
        <form className='flex-col'>
        <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
                <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id ="image" hidden required />

        </div>
        <div className="add-product-name fex-col">
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here'/>
        </div>
        <div className="add-product-description flex-col">
            <p>Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='write content here'></textarea>

        </div>
        <div className="add-category-price">
            <div className="add-category">
                <p>Product Category</p>
                <select onChange={onChangeHandler} name="category">
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Product Price</p>
                <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20'/>
            </div>
        </div>
        <button type='submit' className='add-btn'>Add</button>
        </form>
    </div>
  )
}

export default Add