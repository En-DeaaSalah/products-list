import {LoginForm} from "../../components/LoginForm/index";
import './style.css'
import {useLoginMutation} from "../../api/queries/loginQuery/index";
import IAuthUserModel from "../../models/authUser.model";
import {useNavigate} from "react-router";

export default function LoginPage() {

    const {mutateAsync, isLoading} = useLoginMutation<{
        username: string,
        password: string
    }, IAuthUserModel>()

    const navigator = useNavigate()

    return (<div className={'container'}>
        <LoginForm
            isLoading={isLoading}
            formProps={{
                onFinish: (data) => {
                    mutateAsync(data).then(() => {
                        navigator('/')
                    })
                }
            }}/>
    </div>)
}