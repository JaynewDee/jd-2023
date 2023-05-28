export type ProjectType = {
  name: string;
  description: string;
  story: string;
  tools: { name: string; url: string }[];
  id: number;
  images?: string[];
  production_src?: string
};

//

export const projects: ProjectType[] = [
  {
    name: "Roomy",
    description:
      "Roomy seeks to provide a straightforward chat experience, free from noisy bells and whistles.",
    story: "Roomy defines my first meaningful foray into the world of websocket communication.  Socket.io provides the application with a clean and consistent API for establishing communication between the server and potentially many clients. Built with a keen interest in scalability, the server is designed to support both WebSocket and traditional HTTP protocols.  It persists all messages on the back-end through MongoDB, providing the user with a reliable and responsive full-stack chat experience.",
    tools: [
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "React", url: "https://react.dev/" },
      { name: "Node", url: "https://nodejs.dev/en/about/" },
      { name: "Express", url: "https://expressjs.com/" },
      { name: "MongoDB", url: "" },
      { name: "Socket.io", url: "https://socket.io/" }
    ],
    id: 0,
    images: ["/roomy-img-1.png", "/roomy-img-2.png", "/roomy-img-3.png"],
    production_src: "meep-mountain.herokuapp.com"
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
    id: 1,
    images: ["/spider1.png"]
  },
  {
    name: "Grouperjs",
    description:
      "Designed to make classroom grouping decisions as fast, simple and equitable as possible.",
    story:
      "As a junior developer and teaching assistant faced for the first time with the problem of assigning students to appropriate groups, I wondered if this was a problem in any way fit for a program.  I wondered if the Python code representation would play out straightforwardly as it did in my head. : It didn't. : But the program worked!  One could read an entirely unformatted csv gradebook file and receive randomly assigned student groups as json output! I realized then that the same algorithm could be augmented with a way to ensure that students are grouped based on an even distribution of grade point averages. : I rewrote the script as a Node.js package using Commander.js and implemented an iterative solution that would measure each output against a target standard deviation until the target had been met. : I wrote some tests and published the package to npm, but I lacked confidence in the app's integrity, seeking reasons to further trust in the code I had written, and so I decided to superset the project with TypeScript.  The current and working version is available to download as an NPM package!",
    tools: [
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "Node", url: "https://nodejs.dev/en/about/" }
    ],
    id: 2,
    images: ["/grouperjs1.png", "/grouperjs2.png"]
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
    id: 3
  },
  {
    name: "Imagent",
    description:
      "Generate an entire range of application-appropriate thumbnail sizes from any image with a single command.",
    story:
      "With each web project, I wondered how best to produce the array of thumbnail sizes that the web manifest requires in order to accomodate all platforms.  While recently writing a chrome extension, I realized finally that I could easily write a program to handle this myself. :  Imagent takes a single image file as input and produces many common app thumbnail sizes as output in just a few seconds.",
    tools: [{ name: "Python", url: "" }],
    id: 4
  },
  {
    name: "Portfolio 2022",
    description:
      "An earlier version of my creative portfolio, focused on optimizing interactivity for an app-forward experience.",
    story:
      "I went in with a coat full of footguns on this one, but it was a rewarding experience to set myself fully free to experiment with technologies I was excited about, to build the full stack myself according to my very own decisions, and learn by doing.",
    tools: [{ name: "JavaScript", url: "" }, { name: "Express", url: "https://expressjs.com/" }],
    id: 5 
  }
];
