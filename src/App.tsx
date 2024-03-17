import './App.css'
import {useProductsQuery} from "./api/queries/productsQuery/index";
import IProductsModel from "./models/products.model";

function App() {
    const {data, isSuccess} = useProductsQuery<{
        data: {
            products: IProductsModel
        }
    }>()
    if (isSuccess) {
        console.log(data.data.products)
    }

    return (
        <>

        </>
    )
}

export default App
