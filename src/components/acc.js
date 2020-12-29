import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Acc = ({props}) => {
    if(!props.length) {
        return ''
    }
    const htmlStr = props.map((txt,ind) => {
        return (
            <AccordionItem key={ind}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <strong dangerouslySetInnerHTML={{ __html: txt.title }}></strong>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div dangerouslySetInnerHTML={{ __html: txt.content }}></div>
                </AccordionItemPanel>
            </AccordionItem>
        )
    });
    return (<>
        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
            {htmlStr}
        </Accordion>
    </>)
}

export default Acc;