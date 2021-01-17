import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Collapse = (props) => {
    return (<Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    <strong>
                        { props.title }
                    </strong>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                { props.children }
            </AccordionItemPanel>
        </AccordionItem>
    </Accordion>)
};

export default Collapse;