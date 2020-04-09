import * as React from 'react';
// images

export interface VltPremierProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Component: React.FunctionComponent<VltPremierProps> = (props: VltPremierProps) => {
    const {
        className,
        ...rest
    } = props;

    return (
        <div
            className={`vlt-premier ${className}`}
            {...rest}
        >
            <h1>Premier</h1>
        </div>
    );
};

export const VltPremier = React.memo(Component);
