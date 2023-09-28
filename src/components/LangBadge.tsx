import { CSSProperties } from 'react'
import { SiRust as Rust, SiTypescript as TS, SiJavascript as JS, SiPython as Python } from 'react-icons/si'
import { TbBrandGolang as Go } from 'react-icons/tb'

export default function Badges({ languages }: { languages: string[] }) {
    const badgeTable: { [key: string]: JSX.Element } = {
        "JavaScript": <JS size=".8em" color="#f7df1e" />,
        "TypeScript": <TS size=".8em" color="white" />,
        "Rust": <Rust size=".8em" color="white" />,
        "Go": <Go size=".8em" style={{ background: "white", color: "rgb(0, 173, 216)" }} />,
        "Python": <Python size=".7em" color="white" />
    }

    const shieldTable: { [key: string]: string } = {
        "JavaScript": "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
        "TypeScript": "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
        "Rust": "https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white",
        "Go": "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
        "Python": "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
    }

    const shieldStyles: { [key: string]: CSSProperties } = {
        "JavaScript": { height: ".8em", width: "3.5em" },
        "TypeScript": { height: ".8em", width: "3.5em" },
        "Rust": { height: "1em", width: "2.8em", padding: "0" },
        "Go": { height: ".8em", width: "2em" },
        "Python": { height: ".8em", width: "2.8em" },
    }

    return <>
        <h5 className="tech-label" style={{ margin: "1em auto" }}>Languages</h5>
        <div style={{ overflowY: "scroll" }}>
            {languages.map(lang => {
                return <div style={{ marginTop: ".5em" }}>
                    <button className="lang-badge">{badgeTable[lang]}
                        {<img src={shieldTable[lang]} style={shieldStyles[lang] || {}} />}
                    </button>
                </div>
            })}
        </div>
    </>
}
