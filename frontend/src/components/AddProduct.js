import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();

    const saveProduct= async(e) =>{
        e.preventDefault();
        await axios.post('http://localhost:5000/products',{
            title:title,
            price:price
        });
        history.push("/");
    }

  return (
    <>
        <div>
            <form onSubmit={ saveProduct }>
                <div className='card mt-3'>
                    <div className='container mt-2'>
                    <h3 className='text-center'>Form Create Product</h3>
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
                            <button className="btn btn-primary btn-md">Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>
    
  )
}

export default AddProduct