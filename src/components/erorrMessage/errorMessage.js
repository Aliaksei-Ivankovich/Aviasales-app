import { Alert } from 'antd';


const ErrorMessage = ({error, message}) => {
    return error 
        ? <Alert message={message}
                description="Что-то полшо не так..."
                type="error"/> 
        : null
}

export default ErrorMessage