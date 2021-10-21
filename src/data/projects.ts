export type Project = {
    name: string;
    description: string;
    customer: string;
    skills: string[];
};

export const projects: Project[] = [
    {
        name: "GRAWEB ISG",
        description:
            "ISG je ERP a CRM systém na evidenci práce a zákazníků.",
        customer: "Graweb",
        skills: ["Symfony", "React", "Docker/Deployment", "Linux"],
    },
    {
        name: "KIP Admin",
        description: "ERP systém na výkazání práce zaměstnanců.",
        customer: "KIP Brno",
        skills: ["Symfony"],
    },
    {
        name: "Burza dopravy",
        description: "Burza přepravy nákladů.",
        customer: "Agrotec | Graweb",
        skills: ["Symfony"],
    },
    {
        name: "Maturitní rozbory",
        description:
            "Webový portál obsahující zpracované maturitní rozbory.",
        customer: "Maturitní rozbory",
        skills: ["Typescript", "Next.js"],
    },
    {
        name: "Přehrávač edukačních videí",
        description: "Desktopvá aplikace na přehrávání edukativních videí.",
        customer: "Technické muzeum v Brně | Graweb",
        skills: ["React", "Electron"],
    },
    {
        name: "Graweb Uložistě",
        description:
            "Webová aplikace sloužící k nahrávání grafických podkladů.",
        customer: "Graweb",
        skills: ["React", "Symfony"],
    },
    {
        name: "Drunk cards",
        description: "Webová karetní hra.",
        customer: "Drunk cards",
        skills: ["React"],
    },
];