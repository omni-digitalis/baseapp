import * as React from 'react';
// drag and drop
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// styles
import './VltDashboardScreen.css';
// images
import eyeSVG from '../../assets/vlt-images/icons/eye.svg';
import {
    VltCard,
    VltSecurityAlert,
    VltMyWallet,
    VltApplicationsCard,
    VltMarkets,
    VltPeriodPrices,
    VltPremier
} from '../../components';

interface Card {
    cardId: string
}

const VltDashboardScreen = props => {
    const [cardsOfFirstSection, setCardsOfFirstSection] = React.useState<Card[]>([]);
    const [cardsOfLastSection, setCardsOfLastSection] = React.useState<Card[]>([]);

    const elementsOfFirstSection = [
        {
            cardId: 'myWallet-card',
            content: <VltMyWallet />,
            hasAdorned: true,
            flex: 2
        },
        {
            cardId: 'applications-card',
            content: <VltApplicationsCard />,
            hasAdorned: true,
            flex: 1
        },
        {
            cardId: 'market-card',
            content: <VltMarkets />,
            hasAdorned: false,
            flex: 1
        }
    ];

    const elementsOfLastSection = [
        {
            cardId: 'blog-card',
            content: <h1>Fique por dentro</h1>,
            hasAdorned: true,
            flex: 1
        },
        {
            cardId: 'premier-card',
            content: <VltPremier />,
            hasAdorned: false,
            flex: 1
        },
    ];

    React.useEffect(() => {
        const dataOfFirstSection = localStorage.getItem('cards_of_first_section_position');
        const dataOfLastSection = localStorage.getItem('cards_of_last_section_position');

        // configurando a posição dos cards da primeira seção
        if (dataOfFirstSection) {
            setCardsOfFirstSection(JSON.parse(dataOfFirstSection))
        } else {
            setCardsOfFirstSection([
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

        // configurando a posição dos cards da útlima seção
        if (dataOfLastSection) {
            setCardsOfLastSection(JSON.parse(dataOfLastSection))
        } else {
            setCardsOfLastSection([
                {
                    cardId: 'blog-card'
                },
                {
                    cardId: 'premier-card'
                }
            ])
        }
    }, []);

    React.useEffect(() => {
        const cardsOfFirstSectionPosition = JSON.stringify(cardsOfFirstSection);
        const cardsOfLastSectionPosition = JSON.stringify(cardsOfLastSection);

        localStorage.setItem('cards_of_first_section_position', cardsOfFirstSectionPosition);
        localStorage.setItem('cards_of_last_section_position', cardsOfLastSectionPosition);
    });

    function reorder(list: Card[], startIndex: number, endIndex: number): Card[] {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEnd = (result: any, cardsOfSection: Card[], sectionName: string) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const cards = reorder(
            cardsOfSection,
            result.source.index,
            result.destination.index
        );

        switch (sectionName) {
            case 'first':
                setCardsOfFirstSection(cards);
                break;
            case 'second':
                // TODO
                break;
            case 'third':
                // TODO
                break;
            case 'last':
                setCardsOfLastSection(cards);
                break;
            default:
                console.error('Seção incorreta');
                break;
        }
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

                <DragDropContext onDragEnd={result => onDragEnd(result, cardsOfFirstSection, 'first')}>
                    <Droppable droppableId="droppable" direction="horizontal">
                        {(provided, snapshot) => (
                            <section
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {cardsOfFirstSection.map((card, index) => (
                                    elementsOfFirstSection.map(element => {
                                        if (card.cardId === element.cardId) {
                                            return (
                                                <Draggable key={card.cardId} draggableId={card.cardId} index={index}>
                                                    {(provided, snapshot) => (
                                                        <VltCard
                                                            reference={provided.innerRef}
                                                            draggableProps={provided.draggableProps}
                                                            dragHandleProps={provided.dragHandleProps}
                                                            style={provided.draggableProps.style}
                                                            classes={`
                                                                vlt-card
                                                                ${element.hasAdorned ? 'vlt-card-adorned' : ''}
                                                                ${element.flex === 1 ? 'vlt-flex-1' : 'vlt-flex-2'}
                                                            `}
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

                <DragDropContext onDragEnd={result => onDragEnd(result, cardsOfLastSection, 'last')}>
                    <Droppable droppableId="droppable" direction="horizontal">
                        {(provided, snapshot) => (
                            <section
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {cardsOfLastSection.map((card, index) => (
                                    elementsOfLastSection.map(element => {
                                        if (card.cardId === element.cardId) {
                                            return (
                                                <Draggable key={card.cardId} draggableId={card.cardId} index={index}>
                                                    {(provided, snapshot) => (
                                                        <VltCard
                                                            reference={provided.innerRef}
                                                            draggableProps={provided.draggableProps}
                                                            dragHandleProps={provided.dragHandleProps}
                                                            style={provided.draggableProps.style}
                                                            classes={`
                                                                vlt-card
                                                                ${element.hasAdorned ? 'vlt-card-adorned' : ''}
                                                                ${element.flex === 1 ? 'vlt-flex-1' : 'vlt-flex-2'}
                                                            `}
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
            </div>
        </>
    );
};

export { VltDashboardScreen };
