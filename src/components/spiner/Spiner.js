import { Spin } from 'antd';

const Spiner = ({loading}) => {
    return loading ? <Spin tip="Loading" size="large"/>: null
}

export default Spiner