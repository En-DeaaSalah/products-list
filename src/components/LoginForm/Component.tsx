import style from './style.module.scss'
import IProps from "./props";
import {Button, Form, Input} from 'antd'

export default function Component({
                                      formProps,
                                      isLoading
                                  }: IProps) {
    return (<div className={style.container}>
        <Form {...formProps} layout={"vertical"} className={style.form}>
            <Form.Item name={'username'}
                       extra="you can use 'atuny0' as username"
                       rules={[{
                           required: true,
                           message: "this filed is required !"
                       }]}
                       label={<div className={style.label}>User Name</div>}>
                <Input
                    placeholder={"enter your name please"}
                    className={style.input}/>
            </Form.Item>
            <Form.Item name={"password"}
                       extra="you can use '9uQFF1Lh' as password"
                       rules={[{
                           required: true,
                           message: "this filed is required !"
                       }]}
                       label={<div className={style.label}>Password</div>}>
                <Input.Password
                    placeholder={"enter your password please"}
                    className={style.input}/>
            </Form.Item>
            <Button htmlType={"submit"} loading={isLoading} shape={"round"} type={"primary"} block>Login</Button>
        </Form>
    </div>)
}