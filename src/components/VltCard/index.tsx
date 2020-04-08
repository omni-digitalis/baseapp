import * as React from 'react';

const Component = ({ children, classes, reference, draggableProps, dragHandleProps, ...rest }) => {
    return (
        <div
            ref={reference}
            {...draggableProps}
            className={`${classes}`}
            {...rest}
        >
            <div className="vlt-card-header" {...dragHandleProps} />
            {children}
        </div>
      );
}

export const VltCard = React.memo(Component);
