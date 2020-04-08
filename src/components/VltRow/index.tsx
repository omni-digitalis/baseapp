import * as React from 'react';

const Component = ({ children, reference, droppableProps, ...rest }) => {
  return (
    <div
        ref={reference}
        className="row"
        {...droppableProps}
        {...rest}
    >
        {children}
    </div>
  );
}

export const VltRow = React.memo(Component);
