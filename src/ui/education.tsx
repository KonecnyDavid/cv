import { Header, Icon, Item } from "semantic-ui-react";

export const Education = () => (
    <>
        <Header as="h2" content="Vzdělání"></Header>
        <Item.Group>
            <Item>
                <Item.Content>
                    <Item.Header>Programování a vývoj aplikací</Item.Header>
                    <Item.Meta>
                        <span className="price">
                            Fakulta informatiky | Masarykova univerizta
                        </span>
                    </Item.Meta>
                    <Item.Description>
                        Studium informatiky mi přínáší mnoho nových dovedností,
                        které bych chtěl dále rozvíjet v praxi. Mé zaměření je
                        spíše na projektové řízení a softwarovou architekturu.
                    </Item.Description>
                    <Item.Extra>
                        <Icon name="calendar" /> 2019 - dosud
                    </Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
    </>
);
