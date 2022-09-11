const COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "skills",
    description: "My Tech Skills",
  },
  {
    command: "projects",
    description: "My Tech Projects",
  },
  {
    command: "contacts",
    description: "Contact Me",
  },
  {
    command:
      // 'clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
      "clear or cls",
    description: "Clear terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>My Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
        <div class="meaning">${project.description}</div>
      </div>`
      )
      .join("");
  return projectHTML;
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <div style="font-size: 15px">${contact.medium}</div>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};


export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <div style="font-size: 15px">${command.command}</div>
        <div>${command.description}</div>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
  about: () => `My name is Chirag Parmar. I am ${getAge(
    "February 04,2001"
  )} and I\'m a Web developer
    <br/><br/>
    I love coding in Javascript and Typescript, and have worked with frameworks like ReactJS, nextJS. I currently use NodeJS and Gatsby in a some of my projects and exploring web3.
    <br /><br />
    I am a developer at <a href="https://ciphernutz.com" target="_blank">Ciphernutz</a>.
    <br />
  `,

  skills: () => `
  I am experienced with Javascript and Typescript and the web technologies dominating at the time:<br /><br />
  <div class="skill"><b>core</b>: HTML, CSS,Javascript<br /></div>
  <div class="skill"><b>frameworks</b>:React, Gatsby, NextJS<br /></div>
  <div class="skill"><b>database</b>: MongoDB, firebase, and MySQL<br /></div><br />

  I also have experience with Mobile Development with Flutter.
  `,
  projects: getProjects,
  contacts: getContacts,
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
};

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
}
