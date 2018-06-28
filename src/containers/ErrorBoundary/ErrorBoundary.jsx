// @flow
import React from 'react';

import style from './style.scss';

type ErrorBoundaryProps = {
    children: Array<any>
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, {error: boolean, errorInfo: Object | null}> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { error: false, errorInfo: null };
    }

    componentDidCatch(error: boolean, errorInfo: Object | null) {
        this.setState({
            error,
            errorInfo,
        });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div className={style['error-boundary']}>
                    <h2>Something went wrong.</h2>
                    <details>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
