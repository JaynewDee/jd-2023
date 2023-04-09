export type ProjectType = {
  name: string;
  description: string;
  story: string;
  tools: { name: string; url: string }[];
  id: number;
};

//

export const projects: ProjectType[] = [
  {
    name: "Roomy",
    description:
      "Roomy seeks to summon the spirit of old-school chat rooms.  TBC ...",
    story: "To be written! Stay tuned for some cool words about nerdy stuff!",
    tools: [
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "React", url: "https://react.dev/" },
      { name: "Node", url: "https://nodejs.dev/en/about/" },
      { name: "Express", url: "https://expressjs.com/" },
      { name: "MongoDB", url: "https://www.mongodb.com/" },
      { name: "Socket.io", url: "https://socket.io/" }
    ],
    id: 0
  },
  {
    name: "Spider",
    description:
      "Lightweight and performant, Spider is a convenient portal into all of the user's favorite media sources!",
    story:
      "Spider is sick... I loved building it! I hope you'll check it out and let me know what you'd like to see added.",
    tools: [
      { name: "Rust", url: "https://www.rust-lang.org/" },
      { name: "Tauri", url: "https://tauri.app/" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/" }
    ],
    id: 1
  },
  {
    name: "Grouperjs",
    description:
      "Grouper is a command-line utility designed for use by myself and other instructional staff of edX/Trilogy/2U Full-Stack web development bootcamps.",
    story:
      "As a junior developer and teaching assistant faced for the first time with the problem of assigning students to appropriate groups, I wondered if this was a problem in any wayfit for a program.  I wondered if the Python code representation would play out straightforwardly as it did in my head. : It didn't. : But the program worked!  One could read an entirely unformatted csv gradebook file and receive randomly assigned student groups as json output! I realized then that the same algorithm could be augmented with a way to ensure that students are grouped based on an even distribution of grade point averages. : I rewrote the script as a Node.js package using Commander.js and implemented an iterative solution that would measure each output against a target standard deviation until the target had been met. : I wrote some tests and published the package to npm, but I lacked confidence in the app's integrity, seeking reasons to further trust in the code I had written, and so I decided to superset the project with TypeScript.  The current and working version is available to download as an NPM package!",
    tools: [
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "Node", url: "https://nodejs.dev/en/about/" }
    ],
    id: 2
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
      "I've built a few tiny chrome extensions and with each project wondered how best to produce the array of thumbnail sizes that the web manifest desires in order to accomodate all platforms.  While recently writing a chrome extension called Present, I realized finally that I could easily write a program to handle this myself. :  Imagent takes a single image file as input and produces many common app thumbnail sizes as output in just a few seconds.  In the future the script may feature myriad ways to quickly manipulate images using command-line flags and options.",
    tools: [{ name: "Python", url: "https://www.python.org/" }],
    id: 4
  }
];
