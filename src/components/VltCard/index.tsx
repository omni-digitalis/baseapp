import * as React from 'react';
import { DraggableProvided, DraggableStateSnapshot, DraggableRubric } from 'react-beautiful-dnd';
import { compose } from 'redux';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    ref: React.Ref<HTMLDivElement>,
    provided: DraggableProvided,
    title: string,
    onClose?: () => void;
    snapshot?: DraggableStateSnapshot,
    rubric?: DraggableRubric,
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
        provided,
        className,
        classes,
        ...rest
    } = props;

    const {
        draggableProps,
        dragHandleProps
    } = provided;

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
                    <div
                        className={"vlt-card-operation-button"}
                        {...dragHandleProps}

                    >
                        <i className="fas fa-arrows-alt" />
                    </div>
                    <button
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
