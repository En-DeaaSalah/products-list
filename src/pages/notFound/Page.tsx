import {Button} from "antd";
import {useNavigate} from "react-router";

export default function NotFoundPage() {
    const navigate = useNavigate()
    return (
        <div>
            <div>page not found</div>
            <Button shape={"round"} type={"primary"} onClick={() => navigate("/")}>Back To Home</Button>
        </div>
    )
}