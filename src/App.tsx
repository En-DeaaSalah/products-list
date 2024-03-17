import './App.css'
import {useProductsQuery} from "./api/queries/productsQuery/index";
import IProductsModel from "./models/products.model";
import IAuthUserModel from "./models/authUser.model";
import {useLoginMutation} from "./api/queries/loginQuery/index";
import {useEffect} from 'react'

function App() {
    const {data, isSuccess} = useProductsQuery<{
        data: {
            products: IProductsModel
        }
    }>()
    if (isSuccess) {
        console.log(data.data.products)
    }


    const {mutate, data: response, isSuccess: isLoginSuccess} = useLoginMutation<{
        username: string,
        password: string
    }, IAuthUserModel>()

    useEffect(() => {
        mutate({
            username: "atuny0",
            password: "9uQFF1Lh"
        })
    }, [])


    if (isLoginSuccess) {
        console.log(response.data)
    }

    return (
        <>

        </>
    )
}

export default App
