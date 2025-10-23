const revealBtn = document.getElementById('revealBtn');
const codeInput = document.getElementById('code');
const roleOutput = document.getElementById('role_output');

const roles = {
  "Adn1": {
    name: "Iron Chancellor",
    sabotage: "Altered key treaty clause",
    profit: "Gained political control",
    knowledge: "Knows who opposed treaty secretly; fears being overthrown",
    reason: "Came to control council decisions and secure dominance",
    convos: [
      "Overheard the Diplomat negotiating secretly with an external faction.",
      "Saw the General arguing with the Industrialist about military clauses.",
      "Noticed the Revolutionary whispering about overthrowing council decisions."
    ]
  },
  "A0K2": {
    name: "Diplomat",
    sabotage: "Removed compromise language",
    profit: "Secret alliances externally",
    knowledge: "Knows external deals and potential traitors",
    reason: "Came to broker deals and influence foreign policy",
    convos: [
      "Heard the Iron Chancellor complaining about losing influence.",
      "Overheard the Spy sharing information with an unknown delegate."
    ]
  },
  "ASv3": {
    name: "General",
    sabotage: "Hid military failures",
    profit: "Military influence & favors",
    knowledge: "Knows who ignored orders and who may have sabotaged clauses",
    reason: "Came to protect military interests and assert authority",
    convos: [
      "Overheard the Industrialist asking for military contracts.",
      "Saw the Iron Chancellor giving secret instructions to the Spy."
    ]
  },
  "ANN4": {
    name: "Visionary",
    sabotage: "Withheld visionary clause",
    profit: "Influence future policy",
    knowledge: "Knows likely outcomes of treaty points and who will oppose",
    reason: "Came to shape the council’s long-term strategy",
    convos: [
      "Heard the Idealist refuse to compromise on moral points.",
      "Saw the Revolutionary plotting quietly with the Poet."
    ]
  },
  "AN5": {
    name: "Historian",
    sabotage: "None",
    profit: "Status as truth-keeper",
    knowledge: "Knows past council betrayals and hidden alliances",
    reason: "Came to provide context and uncover lies",
    convos: [
      "Overheard the Secretary mention missing treaty pages.",
      "Knows the Industrialist profited from previous wars."
    ]
  },
  "N16": {
    name: "Priest",
    sabotage: "None",
    profit: "Moral leverage",
    knowledge: "Knows who broke ethical codes or hid lies",
    reason: "Came to guide moral reasoning in council",
    convos: [
      "Heard the Iron Chancellor lying about support for peace clauses.",
      "Observed the General making morally questionable decisions."
    ]
  },
  "Dqq1": {
    name: "Industrialist",
    sabotage: "Encouraged clause benefiting own industries",
    profit: "Economic profit",
    knowledge: "Knows financial motives of other delegates",
    reason: "Came to secure economic advantage for own enterprises",
    convos: [
      "Overheard the Visionary talking about clauses that limit industry.",
      "Saw the Diplomat planning secret trade deals."
    ]
  },
  "A8": {
    name: "Spy",
    sabotage: "Planted false info in treaty",
    profit: "Leverage over factions",
    knowledge: "Knows secret alliances, sabotage plans, and loyalties",
    reason: "Came to gather intelligence and manipulate outcomes",
    convos: [
      "Overheard the Iron Chancellor instructing someone to alter a clause.",
      "Saw the Revolutionary meeting privately with the Poet."
    ]
  },
  "3lEn3": {
    name: "Revolutionary",
    sabotage: "Spread misinformation",
    profit: "Support for overthrow",
    knowledge: "Knows who secretly opposes council authority",
    reason: "Came to foment change and gain allies",
    convos: [
      "Heard the Idealist refuse to compromise.",
      "Overheard whispers about the Iron Chancellor’s hidden plans."
    ]
  },
  "3oo0": {
    name: "Poet",
    sabotage: "Hidden messages in document",
    profit: "Recognition / influence",
    knowledge: "Knows coded hints about sabotage",
    reason: "Came to encode truths and reveal hidden motives",
    convos: [
      "Overheard the Spy giving secret instructions.",
      "Noticed the Historian observing missing papers."
    ]
  },
  "oo12": {
    name: "Idealist",
    sabotage: "Refused to sign certain points",
    profit: "Moral high ground",
    knowledge: "Knows who will never compromise",
    reason: "Came to uphold principles above all",
    convos: [
      "Heard the Visionary plotting to influence future clauses.",
      "Saw the Diplomat talking secretly with external factions."
    ]
  },
  "M4r1": {
    name: "Heir",
    sabotage: "None",
    profit: "Insight into succession",
    knowledge: "Knows hidden family ties and alliances",
    reason: "Came to observe succession dynamics and protect lineage",
    convos: [
      "Overheard the Iron Chancellor questioning loyalty of delegates.",
      "Noticed the Revolutionary plotting quietly."
    ]
  },
  "TM11": {
    name: "Scientist",
    sabotage: "Altered technical clause",
    profit: "Tech advantage",
    knowledge: "Knows secret inventions or leverage points",
    reason: "Came to influence technological and strategic outcomes",
    convos: [
      "Heard the Industrialist trying to secure contracts.",
      "Overheard the Spy discussing hidden info."
    ]
  },
  "An4N0": {
    name: "Envoy",
    sabotage: "None",
    profit: "Diplomatic influence",
    knowledge: "Knows external pressures and reporting delegates",
    reason: "Came to represent external factions and negotiate alliances",
    convos: [
      "Overheard the Diplomat planning secret deals.",
      "Noticed the Iron Chancellor manipulating votes."
    ]
  },
  "Ikr0": {
    name: "Journalist",
    sabotage: "Exaggerated reports",
    profit: "Career / foreign recognition",
    knowledge: "Knows leaks and what’s documented about sabotage",
    reason: "Came to document events and uncover hidden truths",
    convos: [
      "Heard the Secretary mention missing treaty fragments.",
      "Overheard the Revolutionary talking about misinformation."
    ]
  },
  "Mi00": {
    name: "Guard",
    sabotage: "Ignored suspicious behavior",
    profit: "Minor leverage",
    knowledge: "Knows unusual delegate movements",
    reason: "Came to maintain order and observe suspicious activity",
    convos: [
      "Saw the Iron Chancellor meet secretly with the Spy.",
      "Noticed the Industrialist entering the archives at odd hours."
    ]
  },
  "Mn10": {
    name: "Secretary",
    sabotage: "Misplaced treaty fragment",
    profit: "Influence on info flow",
    knowledge: "Knows official minutes and hidden notes",
    reason: "Came to keep accurate records and observe council conduct",
    convos: [
      "Overheard the Journalist discussing leaks.",
      "Noticed the Archivist moving fragments suspiciously."
    ]
  },
  "N4t4Li": {
    name: "Assistant Envoy",
    sabotage: "None",
    profit: "Minor influence",
    knowledge: "Knows whispered alliances and subtle interactions",
    reason: "Came to assist negotiations and gather information",
    convos: [
      "Overheard the Diplomat negotiating secretly.",
      "Saw the Revolutionary talking with the Poet in private."
    ]
  },
  "T1n4": {
    name: "Archivist",
    sabotage: "Lost fragment of treaty",
    profit: "Prestige",
    knowledge: "Knows fragments of destroyed treaty and who handled them",
    reason: "Came to preserve historical documents and guide reconstruction",
    convos: [
      "Saw the Secretary misplacing treaty papers.",
      "Overheard the Iron Chancellor giving instructions about certain clauses."
    ]
  },
  "RZ1": {
    name: "Servant",
    sabotage: "Allowed key paper to disappear",
    profit: "Observational advantage",
    knowledge: "Knows overheard conversations and secret movements",
    reason: "Came to serve council and quietly witness events",
    convos: [
      "Overheard the Spy giving orders.",
      "Noticed the Revolutionary sneaking notes to the Poet."
    ]
  }
};

function revealRole() {
  const code = codeInput.value.trim().toUpperCase();
  if (roles[code]) {
    const role = roles[code];
    let convoHTML = "";
    if (role.convos && role.convos.length > 0) {
      convoHTML = "<strong>Overheard / Intel:</strong><ul>";
      role.convos.forEach(c => {
        convoHTML += `<li>${c}</li>`;
      });
      convoHTML += "</ul>";
    }

    roleOutput.innerHTML = `
      <strong>Role:</strong> ${role.name} <br>
      <strong>Sabotage:</strong> ${role.sabotage} <br>
      <strong>Profit:</strong> ${role.profit} <br>
      <strong>Knowledge:</strong> ${role.knowledge} <br>
      <strong>Reason:</strong> ${role.reason} <br>
      ${convoHTML}
    `;
    roleOutput.style.color = "#b30000"; 
    roleOutput.style.fontWeight = "bold";
  } else {
    roleOutput.textContent = "Invalid code. Please try again.";
    roleOutput.style.color = "#ff4d4d"; 
    roleOutput.style.fontWeight = "normal";
  }
}

revealBtn.addEventListener('click', revealRole);

codeInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    revealRole();
  }
});