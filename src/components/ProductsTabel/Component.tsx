import style from './style.module.scss'
import {IProps} from "./props";
import {Table} from 'antd'

export default function Component({
                                      tableProps
                                  }: IProps) {
    return (<div className={style.container}>
        <Table {...tableProps}/>
    </div>)
}