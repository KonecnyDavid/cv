import { Header, List } from "semantic-ui-react";

export const AppHeader = () => (
    <>
        <div className="top-space"></div>
        <Header as="h1" size="huge">
            <Header.Content>
                David Konečný
                <Header.Subheader>Fullstack webový vývojář</Header.Subheader>
            </Header.Content>
        </Header>
        <List>
            <List.Item icon="marker" content="Brno / Hustopeče" />
            <List.Item
                icon="mail"
                content={<a href="mailto:david@konecny.eu">david@konecny.eu</a>}
            />
            <List.Item icon="phone" content={"+420 774 158 774"} />
            <List.Item
                icon="linkedin"
                content={
                    <a href="https://www.linkedin.com/in/david-kone%C4%8Dn%C3%BD-8987b71b9/">
                        David Konečný
                    </a>
                }
            />
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
                content={<a href="https://www.facebook.com/dkonecn">dkonecn</a>}
            />
        </List>
    </>
);
