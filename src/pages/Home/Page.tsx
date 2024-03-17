import {ProductsTable} from "../../components/ProductsTabel/index";
import {useProductsQuery} from "../../api/queries/productsQuery/index";
import IProductsModel from "../../models/products.model";
import tableColumns from "../../components/ProductsTabel/columns";
import {useCookies} from "react-cookie";
import {useEffect} from 'react'
import './style.css'
import {useNavigate} from "react-router";

export default function HomePage() {
    const [cookies] = useCookies(['product-app-token']);
    const navigator = useNavigate()
    const {
        isLoading, data, isSuccess
    } = useProductsQuery<{
        data: {
            products: IProductsModel[]
        }
    }>()

    useEffect(() => {
        console.log("cookies ", Object.keys(cookies))
        if (!Object.keys(cookies).includes("product-app-token")) {
            navigator("/login")
        }
    }, [])

    return (<div className={"container"}>
        <div className={'title'}>Products</div>
        <ProductsTable
            tableProps={{
                columns: tableColumns,
                loading: isLoading,
                dataSource: isSuccess ? data.data.products : []
            }}/>

    </div>)
}