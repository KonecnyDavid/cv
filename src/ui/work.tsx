import { Header, Icon, Item } from "semantic-ui-react";

export const Work = () => (
    <>
        <Header as="h2" content="Pracovní zkušenosti"></Header>
        <Item.Group>
            <Item>
                <Item.Content>
                    <Item.Header>Fullstack web developer</Item.Header>
                    <Item.Meta>
                        <span className="price">Graweb | Hustopeče</span>
                    </Item.Meta>
                    <Item.Description>
                        Pro firmu vyvíjím interní aplikace a systémy pro externí
                        klienty.
                    </Item.Description>
                    <Item.Extra>
                        <Icon name="calendar" /> 2017 - dosud
                    </Item.Extra>
                </Item.Content>
            </Item>
            <Item>
                <Item.Content>
                    <Item.Header>IT podpora</Item.Header>
                    <Item.Meta>
                        <span className="price">Homecredit | Brno</span>
                    </Item.Meta>
                    <Item.Description>
                        Ve firmě Homecredit pracuji jako IT podpora, kde
                        zpracovávám a řeším požadavky.
                    </Item.Description>
                    <Item.Extra>
                        <Icon name="calendar" /> 2018 - dosud
                    </Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
    </>
);
