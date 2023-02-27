import { Component } from "react";

import { Alert } from 'antd';

import './errorBoundary.scss'


class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
        this.setState({
            error: true,
        })
    }

    render() {
        const { error } = this.state
        if (error) {
            return (
                <div className="error-boundary__wrapper">
                    <Alert  type='error'
                            showIcon 
                            message="Ошибка"
                            description="Что-то полшо не так..."
                            style={{'width': '100%'}}/>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary