import {Button} from "antd";
import {useNavigate} from "react-router";
import './style.css'
export default function NotFoundPage() {
    const navigate = useNavigate()
    return (
        <div className={'container'}>
            <div>page not found</div>
            <Button shape={"round"} type={"primary"} onClick={() => navigate("/")}>Back To Home</Button>
        </div>
    )
}