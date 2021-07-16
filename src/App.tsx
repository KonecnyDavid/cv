import {
    Card,
    Container,
    Grid,
    Header,
    Icon,
    Item,
    Label,
    List,
} from "semantic-ui-react";

import React from "react";

function App() {
    return (
        <Container>
            <div style={{ height: "4rem" }}></div>
            <Header as="h1" size="huge">
                <Header.Content>
                    David Konečný
                    <Header.Subheader>
                        Fullstack webový vývojář
                    </Header.Subheader>
                </Header.Content>
            </Header>
            <List>
                <List.Item icon="marker" content="Brno/Hustopeče" />
                <List.Item
                    icon="mail"
                    content={
                        <a href="mailto:david@konecny.eu">david@konecny.eu</a>
                    }
                />
                <List.Item icon="phone" content={"+420 774 158 774"} />
                <List.Item
                    icon="instagram"
                    content={
                        <a href="https://www.instagram.com/davidkonecny/">
                            davidkonecny
                        </a>
                    }
                />
                <List.Item
                    icon="facebook"
                    content={
                        <a href="https://www.facebook.com/dkonecn">dkonecn</a>
                    }
                />
            </List>
            <Header as="h2" content="Zkušenosti"></Header>
            <div>
                <Label color="blue" size={"large"}>
                    Typescript
                </Label>
                <Label color="blue" size={"large"}>
                    React
                </Label>
                <Label color="blue" size={"large"}>
                    Expressjs
                </Label>
                <Label color="blue" size={"large"}>
                    Symfony
                </Label>
                <Label color="blue" size={"large"}>
                    Docker/Deployment
                </Label>
                <Label color="blue" size={"large"}>
                    C/C++, Python a Java
                </Label>
                <Label color="blue" size={"large"}>
                    Angličtina B2
                </Label>
                <Label color="blue" size={"large"}>
                    Electron
                </Label>
                <Label color="blue" size={"large"}>
                    Linux
                </Label>
                <Label color="blue" size={"large"}>
                    SQL
                </Label>
                <Label color="blue" size={"large"}>
                    Správa projektu
                </Label>
                <Label color="blue" size={"large"}>
                    Git
                </Label>
            </div>
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
                            Studium informatiky mi přínáší mnoho nových
                            dovedností, které bych chtěl dále rozvíjet v praxi.
                            Mé zaměření je spíše na projektové řízení a
                            systémovou architekturu.
                        </Item.Description>
                        <Item.Extra>
                            <Icon name="calendar" /> 2019 - dosud
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
            <Header as="h2" content="Pracovní zkušenosti"></Header>
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header>Fullstack web developer</Item.Header>
                        <Item.Meta>
                            <span className="price">Graweb | Hustopeče</span>
                        </Item.Meta>
                        <Item.Description>
                            Pro firmu vyvíjím interní aplikace a systémy pro
                            externí klienty.
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
                            Ve firmě Homecredit pracuji jako IT podpora, kdy
                            zpracovávám a řeším požadavky.
                        </Item.Description>
                        <Item.Extra>
                            <Icon name="calendar" /> 2018 - dosud
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
            <Header as="h2" content="Projekty"></Header>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Card fluid>
                            <Card.Content>
                                <Card.Header>GRAWEB ISG</Card.Header>
                                <Card.Meta>Graweb</Card.Meta>
                                <Card.Description>
                                    ISG je ERP a CRM systém na evidenci práce a
                                    zákazníků.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Label size="tiny">Symfony</Label>
                                <Label size="tiny">React</Label>
                                <Label size="tiny">SASS</Label>
                            </Card.Content>
                        </Card>
                        <Card fluid>
                            <Card.Content>
                                <Card.Header>KIP Admin</Card.Header>
                                <Card.Meta>KIP Brno</Card.Meta>
                                <Card.Description>
                                    ERP systém na výkazání práce zaměstnanců.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Label size="tiny">Symfony</Label>
                            </Card.Content>
                        </Card>
                        <Card fluid>
                            <Card.Content>
                                <Card.Header>Burza dopravy</Card.Header>
                                <Card.Meta>Agrotec | Graweb</Card.Meta>
                                <Card.Description>
                                    Burza přepravy nákladů.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Label size="tiny">Symfony</Label>
                            </Card.Content>
                        </Card>
                        <Card
                            fluid
                            href="https://konecnydavid.github.io/rozbory/"
                        >
                            <Card.Content>
                                <Card.Header>Maturitní rozbory</Card.Header>
                                <Card.Meta>Maturitní rozbory</Card.Meta>
                                <Card.Description>
                                    Webový portál obsahující zpracované
                                    maturitní rozbory.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Label size="tiny">Next.js</Label>
                                <Label size="tiny">Express</Label>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Card
                            fluid
                            href="https://uloziste.tiskarnahustopece.cz/"
                        >
                            <Card.Content>
                                <Card.Header>Graweb Uložistě</Card.Header>
                                <Card.Meta>Graweb</Card.Meta>
                                <Card.Description>
                                    Webová aplikace sloužící k nahrávání
                                    grafických podkladů.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Label size="tiny">Symfony</Label>
                                <Label size="tiny">React</Label>
                            </Card.Content>
                        </Card>
                        <Card fluid>
                            <Card.Content>
                                <Card.Header>
                                    Přehrávač edukačních videí
                                </Card.Header>
                                <Card.Meta>
                                    Technické muzeum v Brně | Graweb
                                </Card.Meta>
                                <Card.Description>
                                    Desktopvá aplikace na přehrávání
                                    edukativních videí.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Label size="tiny">Electron</Label>
                                <Label size="tiny">React</Label>
                            </Card.Content>
                        </Card>
                        <Card fluid href="https://drunk-cards.cz/">
                            <Card.Content>
                                <Card.Header>Drunk cards</Card.Header>
                                <Card.Meta>Drunk cards</Card.Meta>
                                <Card.Description>
                                    Webová karetní hra na party.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Label size="tiny">React</Label>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default App;
