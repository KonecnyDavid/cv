import "./app.css";

import { Container, Grid, Header, Icon, Label } from "semantic-ui-react";
import { Project, projects } from "./data/projects";
import React, { useState } from "react";

import { AppHeader } from "./ui/header";
import { Education } from "./ui/education";
import { Work } from "./ui/work";
import { skills as defaultSkills } from "./data/skills";

function App() {
    const [skills, setSkills] = useState(defaultSkills);

    const handleSelect = (index_to_select: number) => {
        const newSelected: string[] = [];
        setSkills(
            skills.map((skill, index) => {
                if (index_to_select === index) {
                    if (!skill.selected) {
                        newSelected.push(skill.name);
                    }
                    return { ...skill, selected: !skill.selected };
                }
                if (!skill.selected) {
                    newSelected.push(skill.name);
                }
                return skill;
            })
        );
    };

    const projectFilter = (project: Project) => {
        const selected: Set<string> = new Set(
            skills.filter((skill) => skill.selected).map((skill) => skill.name)
        );
        return (
            selected.size === 0 ||
            project.skills.filter((skill) => selected.has(skill)).length > 0
        );
    };

    const isSelected = (skill: string) => {
        const selected: Set<string> = new Set(
            skills.filter((skill) => skill.selected).map((skill) => skill.name)
        );
        return selected.has(skill);
    };

    const clear = () => {
        setSkills(skills.map((skill) => ({ ...skill, selected: false })));
    };

    return (
        <Container>
            <AppHeader />
            <Header as="h2" content="Zkušenosti"></Header>
            <div className="skill-container">
                {skills.map((skill, index) => (
                    <Label
                        color={skill.selected ? "black" : "blue"}
                        size={"large"}
                        onClick={() => handleSelect(index)}
                        className="cursor-pointer"
                    >
                        {skill.name}
                    </Label>
                ))}
                <Label className="cursor-pointer" size="large" onClick={clear}>
                    <Icon name="cancel" style={{ margin: 0 }} />
                </Label>
            </div>
            <Education />
            <Work />
            <Header as="h2" content="Projekty"></Header>
            <Grid>
                <Grid.Row>
                    {projects.filter(projectFilter).map((project) => (
                        <Grid.Column width={8}>
                            <section style={{ marginBottom: "1rem" }}>
                                <Header as="h5">
                                    <Header.Content>
                                        {project.name}
                                        <Header.Subheader>
                                            {project.customer}
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                                <div
                                    style={{
                                        marginTop: "-.75rem",
                                        marginBottom: ".25rem",
                                    }}
                                >
                                    {project.description}
                                </div>
                                {project.skills.map((skill: string) => (
                                    <>
                                        {isSelected(skill) && (
                                            <Label size="tiny" color={"black"}>
                                                {skill}
                                            </Label>
                                        )}
                                        {!isSelected(skill) && (
                                            <Label size="tiny" color={"blue"}>
                                                {skill}
                                            </Label>
                                        )}
                                    </>
                                ))}
                            </section>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default App;
