import { useState, useEffect } from 'react'
import axios from "axios";
import Header from '../container/Header';
 
const Subsciber = () => {
    const [products, setProduct] = useState([]);
 
    useEffect(() => {
        getProducts();
    }, []);
 
    const getProducts = async () => {
        const response = await axios.get('http://localhost:9010/subsciber');
        setProduct(response.data);
    }
 
    return (
        <div className='container'>
            <Header />
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Data</th>
                        <th>Queue</th>
                    </tr>
                </thead>
                <tbody>
                    { products.map((product, index) => (
                        <tr>
                            <td>{ index + 1 }</td>
                            <td>{ product.data }</td>
                            <td>{ product.queue }</td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default Subsciber