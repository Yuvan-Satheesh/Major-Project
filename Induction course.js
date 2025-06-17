let currentSection = 'overview';
let completedSections = [];
let completedModules = [];
let currentQuestion = 0;
let quizAnswers = {};
let quizScore = null;
let teacherName = '';
let certificateGenerated = false;

// ========== MODULES ==========
const moduleSections = [
  {
    id: 'culture',
    title: 'MFHS School Culture',
    icon: '👥',
    overview: 'MFHS promotes a respectful, inclusive, and high-performing learning environment.',
    keyPoints: [
      'Respect for all students and staff.',
      'Support inclusive and equitable learning.',
      'Be role models for professionalism.',
      'Uphold the school’s core values.'
    ],
    scenario: 'A student says they feel excluded. How should you respond to support MFHS values?'
  },
  {
    id: 'policies',
    title: 'Key Policies at MFHS',
    icon: '📄',
    overview: 'Understanding and applying school-wide policy is critical for safety and compliance.',
    keyPoints: [
      'Follow child protection procedures.',
      'Apply mobile phone rules during class.',
      'Report absences properly.',
      'Use DoE-approved software for school work.',
      'Respond to emergencies using MFHS protocols.'
    ],
    scenario: 'A student is using their phone repeatedly. What policy applies?'
  },
  {
    id: 'standards',
    title: 'Professional Teaching Practice',
    icon: '📚',
    overview: 'Teachers must meet Department and school standards consistently.',
    keyPoints: [
      'Create inclusive, outcomes-based lessons.',
      'Use evidence to inform assessment.',
      'Give timely feedback.',
      'Adapt teaching to suit students.',
      'Collaborate with peers and reflect.'
    ],
    scenario: 'Your students range widely in ability. How do you design your lesson?'
  },
  {
    id: 'ethics',
    title: 'Workplace Ethics at MFHS',
    icon: '🧑‍🏫',
    overview: 'Our school expects staff to behave professionally and ethically at all times.',
    keyPoints: [
      'Be punctual and dressed appropriately.',
      'Maintain confidentiality and professionalism.',
      'Avoid personal social media during class.',
      'Respect cultural and personal differences.',
      'Communicate respectfully with everyone.'
    ],
    scenario: 'A colleague shares a student concern in the staffroom. How do you respond?'
  }
];

// ========== QUIZ ==========
const quiz = [
   {
    question: 'What are the core values of Macquarie Fields High School?',
    options: [
      'Respect, Responsibility, Resilience',
      'Loyalty, Sincerity, Generosity',
      'Integrity, Excellence, Innovation',
      'Learning, Leadership, Service'
    ],
    answer: 0
  },
  {
    question: 'If a student is absent, what is the correct procedure for notifying the school?',
    options: [
      'No action is required',
      'The student should inform their friends',
      'Parents/carers must contact the school office',
      'The student should notify the principal directly'
    ],
    answer: 2
  },
  {
    question: 'Where can staff find the school\'s policies on student behaviour and management?',
    options: [
      'In the staffroom noticeboard',
      'On the school\'s official website under "Rules and policies"',
      'By asking the head teacher',
      'In the local newspaper'
    ],
    answer: 1
  },
  {
    question: 'What is the school\'s stance on bullying?',
    options: [
      'It is tolerated if minor',
      'It is addressed only when reported by parents',
      'It is not addressed',
      'It is not tolerated and is addressed through the school\'s Anti-bullying Plan'
    ],
    answer: 3
  },
  {
    question: 'What is the procedure if a student fails to submit an assessment task on time without a valid reason?',
    options: [
      'They are given an extension automatically',
      'They receive a warning letter and may be awarded a zero',
      'They are expelled',
      'No action is taken'
    ],
    answer: 1
  },
  {
    question: 'Who is the current principal of Macquarie Fields High School?',
    options: [
      'Heather Costa',
      'Justin Perrett',
      'Karyn O\'Brien',
      'Luisa Trieu'
    ],
    answer: 2
  },
  {
    question: 'Who is the Head Teacher of the English department?',
    options: [
      'Natalie Stevens',
      'Troy Neale',
      'Geoff Plowes',
      'Nicole Boyles'
    ],
    answer: 0
  },
  {
    question: 'If you have a concern regarding a student\'s wellbeing in Year 11, whom should you contact?',
    options: [
      'HT Wellbeing for Years 8 & 11',
      'HT Wellbeing for Years 9 & 12',
      'The school counsellor',
      'The student\'s friends'
    ],
    answer: 0
  },
  {
    question: 'Who is responsible for the PDHPE department?',
    options: [
      'Bill Matchett',
      'Nicole Boyles',
      'Philippa O’Sullivan',
      'Ramnik Singh'
    ],
    answer: 1
  },
  {
    question: 'Which staff member should be contacted for career advice?',
    options: [
      'Antony Lustica',
      'Julie Hall',
      'Karen Metcalfe',
      'Leah Buxton'
    ],
    answer: 0
  },
  {
    question: 'You notice a Year 9 student frequently using their phone in class despite multiple reminders. What is the most appropriate first step according to MFHS policy?',
    options: [
      'Confiscate the phone and keep it in your desk',
      'Inform the head teacher immediately',
      'Apply the MFHS Mobile Phone Policy: give a warning, then send the student to the front office if repeated',
      'Ignore the behaviour to avoid escalation'
    ],
    answer: 2
  },
  {
    question: 'You’re supervising lunch duty and witness two students having a heated argument that escalates to pushing. What should you do?',
    options: [
      'Immediately intervene and report the incident to the relevant Deputy Principal',
      'Wait and observe to see if it resolves on its own',
      'Call their parents',
      'Ask another student to get help while you walk away'
    ],
    answer: 0
  },
  {
    question: 'You receive an email from a parent concerned about a classroom incident. What should your response involve?',
    options: [
      'Forward it to your head teacher and wait',
      'Ignore the email if it seems minor',
      'Respond professionally and inform your head teacher',
      'Discipline the student without consultation'
    ],
    answer: 2
  },
  {
    question: 'When is it appropriate to apply the MFHS Student Welfare Policy and involve the Year Adviser?',
    options: [
      'Only for serious misconduct',
      'When any behaviour affects learning or wellbeing',
      'Only after parent complaints',
      'When the student asks for it'
    ],
    answer: 1
  }
];
// ========== NAVIGATION ==========
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.onclick = () => navigate(btn.dataset.section);
  });

  navigate(currentSection);
  renderModules();
  renderResources();
  updateProgress();
});

function navigate(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-section="${id}"]`).classList.add('active');
  currentSection = id;

  if (id === 'quiz') loadQuiz();
  if (id === 'certificate') renderCertificate();
}

function completeSection(id) {
  if (!completedSections.includes(id)) completedSections.push(id);
  updateProgress();

  const next = ['overview', 'module', 'quiz', 'resources', 'certificate'][completedSections.length];
  if (next) navigate(next);
}

function updateProgress() {
  const percent = Math.round((completedSections.length / 4) * 100);
  document.getElementById('headerProgress').style.width = percent + '%';
  document.getElementById('headerProgressText').textContent = `${percent}% Complete`;
}

// ========== MODULE RENDERING ==========
function renderModules() {
  const area = document.getElementById('moduleAccordion');
  area.innerHTML = moduleSections.map(section => `
    <div class="accordion-item">
      <button class="accordion-header" onclick="toggleAccordion('${section.id}')">${section.icon} ${section.title}</button>
      <div class="accordion-content" id="content-${section.id}">
        <p>${section.overview}</p>
        <ul>${section.keyPoints.map(p => `<li>${p}</li>`).join('')}</ul>
        <p><strong>Scenario:</strong> ${section.scenario}</p>
        <button class="btn btn-primary" onclick="markModuleComplete('${section.id}')" ${completedModules.includes(section.id) ? 'disabled' : ''}>
          ${completedModules.includes(section.id) ? 'Completed' : 'Mark as Done'}
        </button>
      </div>
    </div>
  `).join('');
  updateModuleProgress();
}

function toggleAccordion(id) {
  document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
  document.getElementById(`content-${id}`).classList.add('active');
}

function markModuleComplete(id) {
  if (!completedModules.includes(id)) completedModules.push(id);
  renderModules();
  if (completedModules.length === moduleSections.length) {
    document.getElementById('moduleComplete').classList.remove('hidden');
  }
  updateModuleProgress();
}

function updateModuleProgress() {
  const total = moduleSections.length;
  const done = completedModules.length;
  const percent = (done / total) * 100;
  document.getElementById('moduleProgress').textContent = `${done}/${total}`;
  document.getElementById('moduleProgressBar').style.width = `${percent}%`;
}

// ========== QUIZ ==========
function loadQuiz() {
  currentQuestion = 0;
  quizAnswers = {};
  showQuestion();
}

function showQuestion() {
  const q = quiz[currentQuestion];
  document.getElementById('quizProgress').textContent = `Question ${currentQuestion + 1} of ${quiz.length}`;
  document.getElementById('quizProgressBar').style.width = `${((currentQuestion + 1) / quiz.length) * 100}%`;

  const options = q.options.map((opt, i) => `
    <label class="quiz-option">
      <input type="radio" name="q" value="${i}" ${quizAnswers[currentQuestion] === i ? 'checked' : ''} onclick="selectAnswer(${i})">
      ${opt}
    </label>
  `).join('');

  document.getElementById('quizContent').innerHTML = `
    <h3>${q.question}</h3>
    <div>${options}</div>
    <div class="quiz-actions">
      <button class="btn btn-secondary" onclick="prevQ()" ${currentQuestion === 0 ? 'disabled' : ''}>Back</button>
      <button class="btn btn-primary" onclick="nextQ()" ${quizAnswers[currentQuestion] == null ? 'disabled' : ''}>${currentQuestion === quiz.length - 1 ? 'Submit' : 'Next'}</button>
    </div>
  `;
}

function selectAnswer(i) {
  quizAnswers[currentQuestion] = i;
  showQuestion();
}

function nextQ() {
  if (currentQuestion < quiz.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    finishQuiz();
  }
}

function prevQ() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

function finishQuiz() {
  let score = 0;
  quiz.forEach((q, i) => {
    if (quizAnswers[i] === q.answer) score++;
  });
  quizScore = Math.round((score / quiz.length) * 100);
  const passed = quizScore >= 80;

  document.getElementById('quizContent').innerHTML = `
    <div class="quiz-score">${quizScore}%</div>
    <p>${passed ? '✅ You passed the assessment!' : '❌ You did not meet the 80% requirement.'}</p>
    <div class="quiz-actions">
      <button class="btn ${passed ? 'btn-primary' : 'btn-secondary'}" onclick="${passed ? "completeSection('quiz')" : "loadQuiz()"}">
        ${passed ? 'Continue' : 'Try Again'}
      </button>
    </div>
  `;
  if (passed) completeSection('quiz');
}

// ========== RESOURCES ==========
function renderResources() {
  const grid = document.getElementById('resourcesGrid');
  grid.innerHTML = `
    <h3>MFHS Staff Handbook</h3>
    <p><a href="https://education.nsw.gov.au/policy-library" target="_blank">Visit Policy Library 🔗</a></p>
    <h3>School Contacts</h3>
    <ul>
      <li><strong>Principal:</strong> Karyn O'Brien</li>
      <li><strong>Deputy Principals:</strong> Mrs H Costa (Yr 8 & 11), Mrs L Trieu (Yr 9 & 12), Mr J Perrett (Yr 7 & 10)</li>
      <li><strong>School Counsellors:</strong> Mr P Navoev, Ms S Freeman</li>
      <li><strong>Support Officer:</strong> Henry Yoo</li>
      <li><strong>Careers Advisor:</strong> Mr A Lustica</li>
      <li><strong>HT Wellbeing:</strong> Mrs K Metcalfe (Yr 8 & 11), Ms S Bell (Yr 9 & 12), Ms S Gibbs (Yr 7 & 10)</li>
      <li><strong>Student Advisors:</strong> Mrs T Porter (Yr 7), Mrs E Strong (Yr 8), Mr B Newman (Yr 9), Mr V Kumar (Yr 10), Ms K Moore (Yr 11), Ms V Lai (Yr 12)</li>
      <li><strong>Head Teachers:</strong> Admin - Mrs L Buxton, CAPA - Mrs H Davidson, English - Mrs N Stevens & Mrs Ingale, HSIE - Mr T Neale, Maths - Mr G Plowes, PE - Mrs N Boyles, Science - Mr B Matchett, Special Ed - Mrs P O'Sullivan, TAS - Mr R Singh, Literacy - Mrs J Hall, T&L - Mrs S Hegde, VET - Mrs G Gonzalez</li>
      <li><strong>Business Manager:</strong> Mrs J Brooker</li>
      <li><strong>Office Manager:</strong> Mrs L Samuels</li>
      <li><strong>Teacher Librarian:</strong> Miss K Hannaford</li>
    </ul>

  `;
}

function renderCertificate() {
  const c = document.getElementById('certificateContent');
  if (!quizScore || quizScore < 80) {
    c.innerHTML = `
      <h3>🔒 Certificate Locked</h3>
      <p>You must pass the quiz and complete all sections.</p>
    `;
    return;
  }

  if (!certificateGenerated) {
    c.innerHTML = `
      <h3>🎓 Certificate of Completion</h3>
      <form onsubmit="generateCertificate(event)">
        <label for="teacherNameInput">Enter your name:</label><br/>
        <input id="teacherNameInput" required placeholder="Your full name"/><br/><br/>
        <button class="btn btn-primary">Generate</button>
      </form>
    `;
  } else {
    c.innerHTML = `
      <div class="certificate-preview">
        <h2>Certificate of Completion</h2>
        <p>This certifies that <strong>${teacherName}</strong> has completed the MFHS Teacher Induction Course.</p>
        <p>Score: ${quizScore}%</p>
      </div>
    `;
  }
}

function generateCertificate(e) {
  e.preventDefault();
  const input = document.getElementById('teacherNameInput');
  teacherName = input.value.trim();
  certificateGenerated = true;
  renderCertificate();
}
