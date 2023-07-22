export type ToolType = {
  name: string,
  url: string
}

export type ProjectType = {
  name: string;
  description: string;
  story: string;
  tools: ToolType[];
  id: number;
  images?: string[];
  productionSrc?: string;
  gitLinks: LinkMap;
}

export type LinkMap = {
  deployment: string,
  clone: string,
  repo: string
}

export const projects: ProjectType[] = [
  {
    name: "Roomy",
    description:
      "Roomy seeks to provide a straightforward chat experience, free from noisy bells and whistles.",
    story: "Roomy defines my first meaningful foray into the world of websocket communication.  Socket.io provides the application with a clean and consistent API for establishing communication between the server and potentially many clients. : Built with a keen interest in scalability, the server is designed to support both WebSocket and traditional HTTP protocols.  It persists all messages on the back-end through MongoDB, providing the user with a reliable and responsive full-stack chat experience.",
    tools: [
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "React", url: "https://react.dev/" },
      { name: "Node", url: "https://nodejs.dev/en/about/" },
      { name: "Express", url: "https://expressjs.com/" },
      { name: "MongoDB", url: "" },
      { name: "Socket.io", url: "https://socket.io/" },
      { name: "Vite", url: "https://vitejs.dev/" }
    ],
    id: 2,
    images: ["/roomy-img-1.png", "/roomy-img-2.png", "/roomy-img-3.png"],
    gitLinks: { deployment: "https://meep-mountain.herokuapp.com/", clone: "git@github.com:JaynewDee/jd-2023.git", repo: "https://github.com/JaynewDee/jd-2023" }
  },
  {
    name: "Portfolio 2022",
    description:
      "An earlier version of my creative portfolio, focused on optimizing interactivity for an app-forward experience.",
    story:
      "I went in with a coat full of footguns on this one, but it was a rewarding experience to set myself fully free to experiment with technologies I was excited about, to build the full stack myself according to my very own decisions, and learn by doing. : Unfortunately, this also led to some silly beginner mistakes, such as failing to properly accomodate mobile viewports! : Finally, this project represents my first attempt to host a full-stack application on an AWS EC2 instance with a custom domain name, and it was a smashing success!",
    tools: [{ name: "JavaScript", url: "" }, { name: "Express", url: "https://expressjs.com/" }, { name: "AWS", url: "https://aws.amazon.com/pm/ec2/" }],
    id: 3,
    images: ["/portfolio-2022-1.png", "/portfolio-2022-2.png", "/portfolio-2022-3.png"],
    gitLinks: { deployment: "https://syntheticrain.net/", clone: "git@github.com:JaynewDee/jaynewd_.git", repo: "https://github.com/JaynewDee/jaynewd_" },
  },
  {
    name: "Grouperjs",
    description:
      "Designed to make classroom grouping decisions as an edX instructor as fast, simple and equitable as possible.",
    story:
      "As a junior developer and teaching assistant faced for the first time with the problem of assigning students to appropriate groups, I wondered if this was a problem in any way fit for a program.  I wondered if the Python code representation would play out straightforwardly as it did in my head. : It didn't. : But the program worked!  One could read an entirely unformatted csv gradebook file and receive randomly assigned student groups as json output! I realized then that the same algorithm could be augmented with a way to ensure that students are grouped based on an even distribution of grade point averages. : I rewrote the script as a Node.js package using Commander.js and implemented an iterative solution that would measure each output against a target standard deviation until the target had been met.",
    tools: [
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "Node", url: "https://nodejs.dev/en/about/" }
    ],
    id: 4,
    images: ["/grouperjs2.png", "/grouperjs1.png"],
    gitLinks: { deployment: "https://www.npmjs.com/package/grouperjs", clone: "git@github.com:JaynewDee/grouper-js.git", repo: "https://github.com/JaynewDee/grouper-js" }
  },
  {
    name: "Spider",
    description:
      "Utilizing Rust for lightweight performance, Spider is a convenient portal into the power of web scraping.",
    story:
      "This Tauri-based desktop application offers two primary functionalities - Web Scraping and Domain Monitoring.  Currently supported scraping sources include HackerNews and Reddit, results filtered by input of key terms. Domain monitoring pings the user's personally-hosted web domains to report the health status of each remote server.",
    tools: [
      { name: "Rust", url: "" },
      { name: "Tauri", url: "https://tauri.app/" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/" }
    ],
    id: 5,
    images: ["/spider2.png", "/spider1.png"],
    gitLinks: { deployment: "", clone: "git@github.com:JaynewDee/spider.git", repo: "https://github.com/JaynewDee/spider" }
  },
  {
    name: "Cheep",
    description: "Cheap cheats from the charitable!",
    story:
      "Just a few months into learning programming, the bookmarks feature of my chrome browser was filling up.  There were dozens of bookmarks pointing to tutorials and literature on the concepts I had so far encountered, and it was becoming difficult to sort through it all. : I began to imagine an application that presented my favorite learning resources ergonomically, in a way that wouldn't suffer the attrition of increased input size ...  I am building Cheep with the intention of optimizing the user experience of recording resources by way of pagination, visual efficiency, and filtering tools.",
    tools: [
      { name: "React", url: "https://react.dev/" },
      { name: "Vite", url: "https://vitejs.dev/" }
    ],
    id: 6,
    images: ["/cheep1.png", "/cheep2.png"],
    gitLinks: { deployment: "https://cheep-eight.vercel.app/", clone: "git@github.com:JaynewDee/cheep.git", repo: "https://github.com/JaynewDee/cheep" }
  },
  {
    name: "Imagent",
    description:
      "Generate an entire range of application-appropriate thumbnail sizes from any image with a single command.",
    story:
      "With each web project, I wondered how best to produce the array of thumbnail sizes that the web manifest requires in order to accomodate all platforms.  While recently writing a chrome extension, I realized finally that I could easily write a program to handle this myself. :  Imagent takes a single image file as input and produces many common app thumbnail sizes as output in just a few seconds.",
    tools: [{ name: "Python", url: "" }],
    id: 7,
    images: ["/imagent1.png", "/imagent2.png"],
    gitLinks: { deployment: "", clone: "git@github.com:JaynewDee/imagent.git", repo: "https://github.com/JaynewDee/imagent" }
  },
  {
    name: "Synthbrain",
    description:
      "Command-line AI assistant",
    story: "",
    tools: [
      { name: "Rust", url: "" }, { name: "OpenAI", url: "" }
    ],
    id: 0,
    images: ["/synth1.png", "", ""],
    gitLinks: { deployment: "https://meep-mountain.herokuapp.com/", clone: "git@github.com:JaynewDee/jd-2023.git", repo: "https://github.com/JaynewDee/jd-2023" }
  },
  {
    name: "Catch-Flow",
    description:
      "Rapidly prototype asynchronous JS with iterable try-catch decorators.",
    story: "Inspired by the Functional programming paradigm for some time, my journey led me to explore the concepts of decorators and closures.  This tiny library is a slice of that experimentation, and the full code is available to the world through NPM.",
    tools: [
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "Node", url: "https://nodejs.dev/en/about/" }
    ],
    id: 1,
    images: ["/catchflow1.png", "/catchflow2.png", ""],
    gitLinks: { deployment: "https://www.npmjs.com/package/catch-flow", clone: "git@github.com:JaynewDee/jd-2023.git", repo: "https://github.com/JaynewDee/jd-2023" }

  },
  {
    name: "Read-Gen",
    description:
      "Pass command-line options to generate an attractive README file for any new project.",
    story:
      "This program is a Rust re-write of an early bootcamp project originally written in JavaScript.  A single command will generate a default README in a matter of seconds, and a `prompt` option allows for more user-friendly control.  And of course it's ~blazingly fast~! ",
    tools: [{ name: "Rust", url: "" }],
    id: 8,
    images: ["/readgen1.png", "/readgen2.png", "/readgen3.png"],
    gitLinks: { deployment: "", clone: "git@github.com:JaynewDee/readme_generator.git", repo: "https://github.com/JaynewDee/readme_generator" }
  },
  {
    name: "Present",
    description:
      "A handy attendance-taking chrome extension.",
    story:
      "I built Present as a way to save time during class periods, optimizing away the need to individually click boxes.  The extension uses Chrome APIs, most notably `chrome.debugger` to acquire programmatic access to a foreign iframe without Cross-Origin permissions.",
    tools: [{ name: "JavaScript", url: "" }, { name: "Chrome API", url: "https://developer.chrome.com/docs/extensions/reference/" }],
    id: 9,
    images: ["/present1.png", "/present2.png"],
    gitLinks: { deployment: "", clone: "git@github.com:JaynewDee/readme_generator.git", repo: "https://github.com/JaynewDee/readme_generator" }
  },
  {
    name: "Termkey.js",
    description:
      "Simple and secure command-line file encryption.",
    story:
      "This program started as an exploration of encryption when I decided through experimentation to write myself a program to encrypt my files. :  I also used this experience as an opportunity to explore specific topics related to encryption, such as various encryption standards and their relative levels of security. : Termkey uses the AES-256-CBC SSL encryption standard along with a password-based key derivation function (PBKDF2) to encrypt and decrypt sensitive text information.",
    tools: [
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "Node", url: "https://nodejs.dev/en/about/" },
    ],
    id: 10,
    images: ["/termkey1.png"],
    gitLinks: { deployment: "https://www.npmjs.com/package/termkey?activeTab=readme", clone: "git@github.com:JaynewDee/termkey-js.git", repo: "https://github.com/JaynewDee/termkey-js" }
  },
];

const aggregateTags = (projectsData: ProjectType[]): string[] => {
  const tools = projectsData.map(project => project.tools);
  const tags = tools.map((toolset: ToolType[]) => toolset.flatMap((tool) => tool.name));
  const uniques = new Set(tags.flat());
  console.log(uniques)
  return Array.from(uniques).sort();
}

export const aggregatedTagFilters = aggregateTags(projects);
