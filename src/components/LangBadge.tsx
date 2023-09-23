import { CSSProperties } from 'react'
import { SiRust as Rust, SiTypescript as TS, SiJavascript as JS, SiPython as Python } from 'react-icons/si'
import { TbBrandGolang as Go } from 'react-icons/tb'

export default function Badges({ languages }: { languages: string[] }) {
    const badgeTable: { [key: string]: JSX.Element } = {
        "JavaScript": <JS color="#f7df1e" />,
        "TypeScript": <TS size="1em" />,
        "Rust": <Rust />,
        "Go": <Go />,
        "Python": <Python />
    }

    const shieldTable: { [key: string]: string } = {
        "JavaScript": "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
        "TypeScript": "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
        "Rust": "https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white",
        "Go": "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
        "Python": "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
    }

    const shieldStyles: { [key: string]: CSSProperties } = {
        "JavaScript": { height: "1.3em", width: "5em" },
        "TypeScript": { height: "1.1em", width: "5em" },
        "Rust": { height: "1.1em", width: "3em" },
        "Go": { height: "1.1em", width: "3.5em" },
        "Python": { height: "1.1em", width: "4em" },
    }

    return languages.map(lang => {

        return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1em" }}>
            {badgeTable[lang]}
            {<img src={shieldTable[lang]} style={shieldStyles[lang] || {}} />}
        </div>
    })
}
