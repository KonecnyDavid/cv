import "./app.css";

import {
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
            <div className="top-space"></div>
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
            <div className="skill-container">
                <Label color="blue" size={"large"}>
                    <strong>Typescript</strong>
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
                    Rust
                </Label>
                <Label color="blue" size={"large"}>
                    Docker/Deployment
                </Label>
                <Label color="blue" size={"large"}>
                    CI/CD
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
                <Label color="blue" size={"large"}>
                    Haskell
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
                            Ve firmě Homecredit pracuji jako IT podpora, kde
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
                        <section style={{marginBottom: "1rem"}}>
                            <Header as="h5">
                                <Header.Content>
                                    GRAWEB ISG
                                    <Header.Subheader>Graweb</Header.Subheader>
                                </Header.Content>
                            </Header>
                            <div
                                style={{
                                    marginTop: "-.75rem",
                                    marginBottom: ".25rem",
                                }}
                            >
                                ISG je ERP a CRM systém na evidenci práce a
                                zákazníků.
                            </div>
                            <Label size="tiny">Symfony</Label>
                            <Label size="tiny">React</Label>
                            <Label size="tiny">SASS</Label>
                        </section>
                        <section style={{marginBottom: "1rem"}}>
                            <Header as="h5">
                                <Header.Content>
                                    KIP Admin
                                    <Header.Subheader>
                                        KIP Brno
                                    </Header.Subheader>
                                </Header.Content>
                            </Header>
                            <div
                                style={{
                                    marginTop: "-.75rem",
                                    marginBottom: ".25rem",
                                }}
                            >
                                ERP systém na výkazání práce zaměstnanců.
                            </div>
                            <Label size="tiny">Symfony</Label>
                        </section>
                        <section style={{marginBottom: "1rem"}}>
                            <Header as="h5">
                                <Header.Content>
                                    Burza dopravy
                                    <Header.Subheader>
                                        Agrotec | Graweb
                                    </Header.Subheader>
                                </Header.Content>
                            </Header>
                            <div
                                style={{
                                    marginTop: "-.75rem",
                                    marginBottom: ".25rem",
                                }}
                            >
                                Burza přepravy nákladů.
                            </div>
                            <Label size="tiny">Symfony</Label>
                        </section>
                        <section>
                            <Header as="h5">
                                <Header.Content>
                                    Maturitní rozbory
                                    <Header.Subheader>
                                        Maturitní rozbory
                                    </Header.Subheader>
                                </Header.Content>
                            </Header>
                            <div
                                style={{
                                    marginTop: "-.75rem",
                                    marginBottom: ".25rem",
                                }}
                            >
                                Webový portál obsahující zpracované maturitní
                                rozbory.
                            </div>
                            <Label size="tiny">Next.js</Label>
                            <Label size="tiny">Express</Label>
                        </section>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <section style={{marginBottom: "1rem"}}>
                            <Header as="h5">
                                <Header.Content>
                                    Graweb Uložistě
                                    <Header.Subheader>Graweb</Header.Subheader>
                                </Header.Content>
                            </Header>
                            <div
                                style={{
                                    marginTop: "-.75rem",
                                    marginBottom: ".25rem",
                                }}
                            >
                                Webová aplikace sloužící k nahrávání grafických
                                podkladů.
                            </div>
                            <Label size="tiny">Symfony</Label>
                            <Label size="tiny">React</Label>
                        </section>
                        <section style={{marginBottom: "1rem"}}>
                            <Header as="h5">
                                <Header.Content>
                                    Přehrávač edukačních videí
                                    <Header.Subheader>
                                        Technické muzeum v Brně | Graweb
                                    </Header.Subheader>
                                </Header.Content>
                            </Header>
                            <div
                                style={{
                                    marginTop: "-.75rem",
                                    marginBottom: ".25rem",
                                }}
                            >
                                Desktopvá aplikace na přehrávání edukativních
                                videí.
                            </div>
                            <Label size="tiny">Electron</Label>
                            <Label size="tiny">React</Label>
                        </section>
                        <section>
                            <Header as="h5">
                                <Header.Content>
                                    Drunk cards
                                    <Header.Subheader>
                                        Drunk cards
                                    </Header.Subheader>
                                </Header.Content>
                            </Header>
                            <div
                                style={{
                                    marginTop: "-.75rem",
                                    marginBottom: ".25rem",
                                }}
                            >
                                Webová karetní hra na party.
                            </div>
                            <Label size="tiny">React</Label>
                        </section>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default App;
