import * as React from 'react';
// drag and drop
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// styles
import './VltDashboardScreen.css';
// images
import eyeSVG from '../../assets/vlt-images/icons/eye.svg';
import { VltCard, VltSecurityAlert, VltMyWallet, VltApplicationsCard, VltMarkets, VltPeriodPrices } from '../../components';

interface Card {
    cardId: string
}

const VltDashboardScreen = props => {
    const [cardsOfFirstLine, setCardsOfFirstLine] = React.useState<Card[]>([]);
    const jsxElements = [
        {
            title: "minha carteira",
            cardId: 'myWallet-card',
            content: <VltMyWallet />,
            adorned: true,
            flex: 2
        },
        {
            title: "valores investidos",
            cardId: 'applications-card',
            content: <VltApplicationsCard />,
            adorned: true,
            flex: 1
        },
        {
            title: "mercado",
            cardId: 'market-card',
            content: <VltMarkets />,
            flex: 1
        }
    ]

    React.useEffect(() => {
        const dataOnLocalStorage = localStorage.getItem('cards_of_first_line_position');

        if (dataOnLocalStorage) {
            setCardsOfFirstLine(JSON.parse(dataOnLocalStorage))
        } else {
            setCardsOfFirstLine([
                {
                    cardId: 'myWallet-card'
                },
                {
                    cardId: 'applications-card'
                },
                {
                    cardId: 'market-card'
                }
            ])
        }
    }, []);

    React.useEffect(() => {
        const cardsOfFirstLinePosition = JSON.stringify(cardsOfFirstLine);
        localStorage.setItem('cards_of_first_line_position', cardsOfFirstLinePosition);
    });

    function reorder(list: Card[], startIndex: number, endIndex: number): Card[] {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    function onDragEndFirstLine(result: any) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const cards = reorder(
            cardsOfFirstLine,
            result.source.index,
            result.destination.index
        );

        setCardsOfFirstLine(cards);
    }

    return (
        <>
            <div className="vlt-container">
                <VltSecurityAlert />
            </div>

            <div className="vlt-section-container">
                <div className="vlt-title-container">
                    <div className="vlt-title-row">
                        <h1>Dashboard</h1>
                        <div className="vlt-title-icon">
                            <img src={eyeSVG} alt="Eye" />
                        </div>
                    </div>

                    <div className="vlt-actions-row">
                        <div>
                            <span>Modo de exibição:</span>
                            <select className="vlt-button-secondary vlt-exibition-mode">
                                <option value="">Personalizado</option>
                                <option value="">Padrão</option>
                            </select>
                        </div>
                        <button className="vlt-button-primary">+ Adicionar cards</button>
                    </div>
                </div>

                <DragDropContext onDragEnd={onDragEndFirstLine}>
                    <Droppable droppableId="droppable" direction="horizontal">
                        {(provided, snapshot) => (
                            <section
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {cardsOfFirstLine.map((card, index) => (
                                    jsxElements.map(element => {
                                        if (card.cardId === element.cardId) {
                                            return (
                                                <Draggable key={card.cardId} draggableId={card.cardId} index={index}>
                                                    {(provided) => (
                                                        <VltCard
                                                            title={element.title}
                                                            ref={provided.innerRef}
                                                            provided={provided}
                                                            className={["vlt-card",
                                                                element.adorned && "vlt-card-adorned",
                                                                element.flex === 1 ? 'vlt-flex-1' : 'vlt-flex-2'
                                                            ].join(" ")}
                                                        >
                                                            {element.content}
                                                        </VltCard>
                                                    )}
                                                </Draggable>
                                            )
                                        } else {
                                            return <div />
                                        }
                                    })
                                ))}
                                {provided.placeholder}
                            </section>
                        )}
                    </Droppable>
                </DragDropContext>

                <section>
                    <VltPeriodPrices className="vlt-card vlt-flex-1" />
                </section>

                <section>
                    <div className="vlt-card vlt-flex-1"></div>
                    <div className="vlt-card vlt-flex-1"></div>
                    <div className="vlt-card vlt-flex-1"></div>
                    <div className="vlt-card vlt-flex-1"></div>
                </section>

                <section>
                    <div className="vlt-card vlt-flex-1"></div>
                    <div className="vlt-card vlt-flex-1"></div>
                </section>
            </div>
        </>
    );
};

export { VltDashboardScreen };
