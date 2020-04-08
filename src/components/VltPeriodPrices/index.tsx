import * as React from 'react';
import {compose} from 'redux';

interface DispatchProps {
}


interface ReduxProps {
}

export interface Props extends DispatchProps, ReduxProps, React.HTMLAttributes<HTMLDivElement> {

}

const Component: React.FunctionComponent<Props> = (props: Props) => {
    const {
        className,
        ...rest
    } = props;

    return (
        <div
            className={`vlt-period-prices ${className || ""}`}
            {...rest}
        >

        </div>
    );
}

export const VltPeriodPrices = compose(
    React.memo,
    React.forwardRef,
)(Component) as React.FunctionComponent<Props>;