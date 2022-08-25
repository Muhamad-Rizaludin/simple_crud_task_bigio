/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const updateProduct= async(e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:5000/products/${id}`,{
            title:title,
            price:price
        });
        history.push("/");
    }
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getProductById = async() => {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setTitle(response.data.title);
        setPrice(response.data.price);
    }

    useEffect(() =>{
      getProductById();  
    }, []);
    

  return (
    <div>
        <form onSubmit={ updateProduct }>
            <div className='card mt-3'>
                <div className='container mt-2'>
                    <h3 className='text-center'>Form update product</h3>
                    <div className='mb-2'>
                        <label className='label'>Title</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Title"
                            value={ title }
                            onChange={ (e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <label className='label'>Price</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Price"
                            value={ price }
                            onChange={ (e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <button className="btn btn-md btn-success">Update</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default EditProduct