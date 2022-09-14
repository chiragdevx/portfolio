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
        <p class="meaning">${project.description}</p>
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
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
  about: () => `Chirag Parmar. I am ${getAge(
    "February 04,2001"
  )} years young Web developer.
    <br/><br/>
    I write clean code and pushing my skills to the limit. My interests include joining an exciting team of passionate people, personal growth and love long walks on the street. I am a team player who brings a lot of laughter to a room and someone who can quickly switch focus when priorities adjust. Currently I am exploring Web3.
    <br /><br />
    <br />
  `,

  skills: () => `
  I am experienced with Javascript and Typescript and the web technologies dominating at the time:<br /><br />
  <div class="skill"><b>core</b>: HTML, CSS,Javascript, NodeJS<br /></div>
  <div class="skill"><b>frameworks</b>:ReactJS, NextJS, ExpressJS, Gatsby<br /></div>
  <div class="skill"><b>database</b>: MongoDB, firebase, and MySQL<br /></div><br />

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
