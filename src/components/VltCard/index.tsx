import * as React from 'react';
import { DraggableProvided, DraggableStateSnapshot, DraggableRubric } from 'react-beautiful-dnd';
import { compose } from 'redux';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    title: string,
    ref?: React.Ref<HTMLDivElement>,
    provided?: DraggableProvided,
    snapshot?: DraggableStateSnapshot,
    rubric?: DraggableRubric,
    onClose?: () => void;
    disableMove?: boolean;
    disableClose?: boolean;
    extraActionsComponents?: React.ReactNode[],
    classes?: {
        root?: string,
        panel?: string,
        body?: string,
    }
}

const Component: React.FunctionComponent<Props> = (props: Props, ref: React.Ref<HTMLDivElement>) => {
    const {
        title,
        children,
        provided = { draggableProps: {}, dragHandleProps: {} },
        className,
        classes,
        extraActionsComponents,
        disableClose,
        disableMove,
        ...rest
    } = props;

    const {
        draggableProps,
        dragHandleProps
    } = provided;

    const conditionalDragHandleProps = disableMove ? {} : dragHandleProps;

    return (
        <div
            ref={ref}
            className={`vlt-draggable-card ${className} ${classes && classes.root}`}
            {...draggableProps}
            {...rest}
        >
            <div
                className={`vlt-draggable-card-panel ${classes && classes.panel}`}
            >
                <span className={"card-title"}>
                    {/* TODO: i18n */}
                    {title}
                </span>
                <div className={"card-options"}>
                    {extraActionsComponents && 
                            extraActionsComponents
                    }
                    <div
                        {...conditionalDragHandleProps}
                    >
                        <button
                            className={"no-pointer-events vlt-card-operation-button"}
                            disabled={disableMove}
                        >
                            <i className="fas fa-arrows-alt" />
                        </button>
                    </div>
                    <button
                        disabled={disableClose}
                        className={"vlt-card-operation-button"}
                    >
                        <i className="fas fa-times" />
                    </button>
                </div>
            </div>
            <div
                className={`vlt-draggable-card-body ${classes && classes.body}`}
            >
                {children}
            </div>
        </div>
    );
}

export const VltCard = compose(
    React.memo,
    React.forwardRef,
)(Component) as React.FunctionComponent<Props>;
