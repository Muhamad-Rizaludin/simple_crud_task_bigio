import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProduct();
    }, []);

    const getProduct = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data)
    }
    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        getProduct();
    }


  return (
    <>
    <div className='card mt-5'>
        <div className='container-fluid mt-3'>
            <div className='col-lg-12'>
            <Link to="/add" className='btn btn-md btn-success mt-2'>Add New</Link>
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { products.map((product, index) =>(
                            <tr key={ product.id }>
                                <td>{index + 1}</td>
                                <td>{ product.title}</td>
                                <td>{ product.price}</td>
                                <td>
                                    <Link to={`/edit/${product.id}`} className="btn btn-sm btn-warning me-1">Edit</Link>
                                    <button onClick={ ()=> deleteProduct(product.id)} className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        )) }
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductList