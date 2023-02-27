import { Progress } from 'antd';

const ProgressBar = ({loading, progress}) => {

    return loading 
        ? <Progress status="active" showInfo={false} percent={(progress / 10000) * 100}/> 
        : null
    
}

export default ProgressBar