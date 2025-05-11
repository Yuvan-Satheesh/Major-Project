// Quiz Data for Each Module
const modulesData = {
    'school-culture': {
        title: "School Culture",
        description: "Test your knowledge of MFHS culture and values",
        questions: [
            {
                question: "What is the mission of Macquarie Fields High School?",
                options: [
                    "To achieve the highest exam results in NSW",
                    "To provide a supportive and inclusive learning environment",
                    "To focus exclusively on academic achievement",
                    "To be the largest school in the region"
                ],
                correct: "To provide a supportive and inclusive learning environment",
                feedback: "Our mission focuses on creating an environment that supports all aspects of student development."
            },
            {
                question: "What are the school's core values?",
                options: [
                    "Respect, Responsibility, Resilience, Excellence",
                    "Achievement, Competition, Discipline, Results",
                    "Knowledge, Skills, Attitude, Behavior",
                    "Growth, Innovation, Collaboration, Success"
                ],
                correct: "Respect, Responsibility, Resilience, Excellence",
                feedback: "These four values guide all our interactions and decision-making at MFHS."
            },
            {
                question: "What is the school's approach to student diversity and inclusion?",
                options: [
                    "The school promotes equity and celebrates diversity",
                    "The school has a uniform approach for all students",
                    "The school focuses primarily on academic achievement",
                    "Diversity is acknowledged but not actively promoted"
                ],
                correct: "The school promotes equity and celebrates diversity",
                feedback: "We actively work to create an inclusive environment that values all students."
            },
            {
                question: "How does the school ensure all students feel valued?",
                options: [
                    "Through inclusive policies and practices",
                    "By focusing only on high-achieving students",
                    "By minimizing differences between students",
                    "Through competitive academic programs"
                ],
                correct: "Through inclusive policies and practices",
                feedback: "Our policies are designed to recognize and accommodate diverse student needs."
            },
            {
                question: "What does the school emphasize besides academic achievement?",
                options: [
                    "Personal growth and community engagement",
                    "Sports performance",
                    "Standardized test results",
                    "Uniform compliance"
                ],
                correct: "Personal growth and community engagement",
                feedback: "We believe education encompasses more than just academic results."
            }
        ]
    },
    'policies': {
        title: "Policies & Procedures",
        description: "Essential school policies every teacher must know",
        questions: [
            {
                question: "What should you do if you need to report a student incident?",
                options: [
                    "Tell a colleague and let them handle it",
                    "Report to the Head Teacher or Deputy Principal",
                    "Wait to see if it happens again",
                    "Send an email to the principal when you have time"
                ],
                correct: "Report to the Head Teacher or Deputy Principal",
                feedback: "All incidents should be reported promptly to ensure proper documentation and follow-up."
            },
            {
                question: "What is the school's policy on bullying?",
                options: [
                    "Zero-tolerance with clear reporting processes",
                    "Teachers handle it as they see fit",
                    "Only serious cases are reported",
                    "Students are encouraged to work it out themselves"
                ],
                correct: "Zero-tolerance with clear reporting processes",
                feedback: "We have a strict anti-bullying policy with defined reporting procedures."
            },
            {
                question: "How should homework be assigned according to school policy?",
                options: [
                    "Purposeful and differentiated",
                    "The same for all students in a class",
                    "As much as possible to ensure learning",
                    "Only for students who are falling behind"
                ],
                correct: "Purposeful and differentiated",
                feedback: "Homework should be meaningful and tailored to student needs."
            },
            {
                question: "What is the process for handling student absences?",
                options: [
                    "Parents must notify the school, unexplained absences are followed up",
                    "Teachers should call parents after each absence",
                    "Only absences longer than 3 days are followed up",
                    "Absences are only recorded but not followed up"
                ],
                correct: "Parents must notify the school, unexplained absences are followed up",
                feedback: "We have a systematic approach to monitoring and following up on student attendance."
            },
            {
                question: "Which of these is NOT a key school policy?",
                options: [
                    "Behavior Management",
                    "Child Protection",
                    "Teacher Preference",
                    "ICT Acceptable Use"
                ],
                correct: "Teacher Preference",
                feedback: "While we value teacher input, 'Teacher Preference' is not an official school policy."
            },
            {
                question: "What platform is used for recording student incidents?",
                options: [
                    "Google Classroom",
                    "Sentral",
                    "Microsoft Teams",
                    "The school newsletter"
                ],
                correct: "Sentral",
                feedback: "Sentral is our official student management system for recording incidents."
            }
        ]
    },
    'teaching': {
        title: "Teaching & Learning",
        description: "Our approach to curriculum and pedagogy",
        questions: [
            {
                question: "Which curriculum frameworks are used at MFHS?",
                options: [
                    "NSW Education Standards Authority (NESA) syllabuses",
                    "International Baccalaureate",
                    "Cambridge International Curriculum",
                    "National Curriculum Framework"
                ],
                correct: "NSW Education Standards Authority (NESA) syllabuses",
                feedback: "We follow the official NSW curriculum frameworks for all subjects."
            },
            {
                question: "How are assessments structured at MFHS?",
                options: [
                    "Regular formative and summative assessments with formal reports twice yearly",
                    "Only end-of-term exams",
                    "Weekly standardized tests",
                    "Teacher discretion with no set schedule"
                ],
                correct: "Regular formative and summative assessments with formal reports twice yearly",
                feedback: "We use a balanced assessment approach to monitor student progress."
            },
            {
                question: "Which teaching strategies are encouraged at MFHS?",
                options: [
                    "Differentiated instruction, explicit teaching, collaborative learning",
                    "Lecture-style teaching only",
                    "Self-directed learning with minimal teacher input",
                    "Competitive classroom environments"
                ],
                correct: "Differentiated instruction, explicit teaching, collaborative learning",
                feedback: "These evidence-based strategies form the foundation of our teaching approach."
            },
            {
                question: "How does the school support students with additional learning needs?",
                options: [
                    "Through Learning Support Teams (LST), IEPs, and collaboration with support staff",
                    "By placing them in separate classes",
                    "Through after-school tutoring only",
                    "By recommending external specialists"
                ],
                correct: "Through Learning Support Teams (LST), IEPs, and collaboration with support staff",
                feedback: "We have a comprehensive support system for students with diverse learning needs."
            },
            {
                question: "What is the school's approach to technology integration?",
                options: [
                    "Purposeful integration aligned with learning outcomes",
                    "Minimal technology use in classrooms",
                    "Exclusive use of traditional teaching methods",
                    "Technology use at teacher discretion"
                ],
                correct: "Purposeful integration aligned with learning outcomes",
                feedback: "We use technology strategically to enhance learning experiences."
            }
        ]
    }
};

// DOM Elements
const modulesSection = document.getElementById('modules-section');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const moduleTitle = document.getElementById('module-title');
const moduleDescription = document.getElementById('module-description');
const questionNumberElement = document.getElementById('question-number');
const questionTextElement = document.getElementById('question-text');
const optionsGrid = document.getElementById('options-grid');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score-display');
const totalQuestionsElement = document.getElementById('total-questions');
const scorePercentage = document.getElementById('score-percentage');
const resultFeedback = document.getElementById('result-feedback');
const retakeBtn = document.getElementById('retake-btn');
const backToModulesLinks = document.querySelectorAll('.back-to-modules');

// Quiz Variables
let currentModule = '';
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
const completedModules = [];

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners
    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    retakeBtn.addEventListener('click', retakeQuiz);
    backToModulesLinks.forEach(link => {
        link.addEventListener('click', returnToModules);
    });
    
    // Initialize module status indicators
    updateModuleStatus();
});

// Open a module and start its quiz
function openModule(moduleId) {
    currentModule = moduleId;
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    // Hide modules section and show quiz container
    modulesSection.style.display = 'none';
    quizContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    
    // Set module title and description
    moduleTitle.textContent = modulesData[moduleId].title;
    moduleDescription.textContent = modulesData[moduleId].description;
    
    // Display first question
    displayQuestion();
}

// Display the current question
function displayQuestion() {
    const currentQuestion = modulesData[currentModule].questions[currentQuestionIndex];
    
    // Update question number
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}/${modulesData[currentModule].questions.length}`;
    
    // Set question text
    questionTextElement.textContent = currentQuestion.question;
    
    // Clear previous options
    optionsGrid.innerHTML = '';
    
    // Create and display options
    currentQuestion.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option;
        
        // Check if this option was previously selected
        if (userAnswers[currentQuestionIndex] === option) {
            optionBtn.classList.add('selected');
        }
        
        optionBtn.addEventListener('click', () => selectAnswer(option, currentQuestion.correct));
        optionsGrid.appendChild(optionBtn);
    });
    
    // Update navigation buttons
    updateNavButtons();
}

// Handle answer selection
function selectAnswer(selectedOption, correctAnswer) {
    // Store user answer
    userAnswers[currentQuestionIndex] = selectedOption;
    
    // Highlight selected option
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.classList.remove('selected', 'correct', 'incorrect');
        
        if (button.textContent === selectedOption) {
            button.classList.add('selected');
        }
        
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedOption && selectedOption !== correctAnswer) {
            button.classList.add('incorrect');
        }
    });
    
    // Enable next button
    nextBtn.disabled = false;
}

// Update navigation buttons state
function updateNavButtons() {
    // Hide previous button on first question
    prevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    
    // Update next button text on last question
    if (currentQuestionIndex === modulesData[currentModule].questions.length - 1) {
        nextBtn.textContent = 'Finish Quiz';
    } else {
        nextBtn.textContent = 'Next Question';
    }
    
    // Disable next button if no answer selected
    nextBtn.disabled = !userAnswers[currentQuestionIndex];
}

// Move to the next question
function nextQuestion() {
    // Check if this is the last question
    if (currentQuestionIndex === modulesData[currentModule].questions.length - 1) {
        finishQuiz();
        return;
    }
    
    // Move to next question
    currentQuestionIndex++;
    displayQuestion();
}

// Move to the previous question
function prevQuestion() {
    // Move to previous question
    currentQuestionIndex--;
    displayQuestion();
}

// Finish the quiz and show results
function finishQuiz() {
    // Calculate score
    score = 0;
    modulesData[currentModule].questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });
    
    // Calculate percentage
    const percentage = Math.round((score / modulesData[currentModule].questions.length) * 100);
    
    // Display results
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    scoreDisplay.textContent = score;
    totalQuestionsElement.textContent = modulesData[currentModule].questions.length;
    scorePercentage.textContent = `${percentage}%`;
    
    // Set feedback message
    if (percentage === 100) {
        resultFeedback.textContent = "Perfect! You've mastered this module.";
        // Mark module as completed if 100%
        if (!completedModules.includes(currentModule)) {
            completedModules.push(currentModule);
            updateModuleStatus();
        }
    } else if (percentage >= 80) {
        resultFeedback.textContent = "Great job! You have a strong understanding of this material.";
    } else if (percentage >= 60) {
        resultFeedback.textContent = "Good effort. Consider reviewing the material before retaking.";
    } else {
        resultFeedback.textContent = "Keep practicing. Review the material and try again.";
    }
}

// Retake the current quiz
function retakeQuiz() {
    openModule(currentModule);
}

// Return to the modules section
function returnToModules(e) {
    e.preventDefault();
    modulesSection.style.display = 'block';
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'none';
}

// Update module status indicators
function updateModuleStatus() {
    completedModules.forEach(moduleId => {
        const statusElement = document.getElementById(`${moduleId}-status`);
        if (statusElement) {
            statusElement.classList.add('completed');
            statusElement.innerHTML = '<i class="fas fa-check"></i>';
        }
    });
}