// University Database
const universities = [
    // ITALY
    {
        name: "Politecnico di Milano",
        country: "Italy",
        location: "Milan, Italy",
        description: "Leading technical university specializing in engineering, architecture, and design. Known for innovation and strong industry connections.",
        strengths: ["engineering", "technology", "design", "practical", "innovation", "research"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Bologna",
        country: "Italy",
        location: "Bologna, Italy",
        description: "The oldest university in the world, offering comprehensive programs across humanities, sciences, and law with a rich historical tradition.",
        strengths: ["humanities", "law", "history", "theoretical", "tradition", "diverse"],
        size: "large",
        environment: "urban"
    },
    {
        name: "Sapienza University of Rome",
        country: "Italy",
        location: "Rome, Italy",
        description: "One of Europe's largest universities offering extensive programs in arts, sciences, and social sciences in the heart of Rome.",
        strengths: ["diverse", "arts", "sciences", "social", "history", "culture"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Padua",
        country: "Italy",
        location: "Padua, Italy",
        description: "Historic university with strong emphasis on scientific research, medicine, and natural sciences with a collegiate atmosphere.",
        strengths: ["sciences", "medicine", "research", "theoretical", "tradition"],
        size: "medium",
        environment: "small-town"
    },
    {
        name: "Bocconi University",
        country: "Italy",
        location: "Milan, Italy",
        description: "Premier institution for economics, management, and finance with strong international focus and business connections.",
        strengths: ["business", "economics", "finance", "practical", "international"],
        size: "medium",
        environment: "urban"
    },

    // AUSTRIA
    {
        name: "University of Vienna",
        country: "Austria",
        location: "Vienna, Austria",
        description: "Austria's largest university offering comprehensive programs in humanities, sciences, and social sciences with a strong research focus.",
        strengths: ["humanities", "sciences", "social", "research", "diverse", "culture"],
        size: "large",
        environment: "urban"
    },
    {
        name: "Vienna University of Technology (TU Wien)",
        country: "Austria",
        location: "Vienna, Austria",
        description: "Leading technical university specializing in engineering, technology, and natural sciences with excellent research facilities.",
        strengths: ["engineering", "technology", "research", "innovation", "practical"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Innsbruck",
        country: "Austria",
        location: "Innsbruck, Austria",
        description: "Comprehensive university in the Alps offering strong programs in natural sciences, humanities, and mountain research.",
        strengths: ["sciences", "nature", "sports", "research", "mountains"],
        size: "medium",
        environment: "small-town"
    },
    {
        name: "WU Vienna University of Economics and Business",
        country: "Austria",
        location: "Vienna, Austria",
        description: "Europe's largest business university specializing in economics, business administration, and social sciences.",
        strengths: ["business", "economics", "social", "international", "practical"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Graz",
        country: "Austria",
        location: "Graz, Austria",
        description: "Historic university offering diverse programs with particular strength in environmental sciences and social studies.",
        strengths: ["sciences", "environment", "social", "diverse", "research"],
        size: "medium",
        environment: "urban"
    },

    // SWITZERLAND
    {
        name: "ETH Zurich",
        country: "Switzerland",
        location: "Zurich, Switzerland",
        description: "World-renowned technical university known for excellence in science, technology, engineering, and mathematics.",
        strengths: ["engineering", "technology", "sciences", "research", "innovation", "prestigious"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "University of Zurich",
        country: "Switzerland",
        location: "Zurich, Switzerland",
        description: "Largest Swiss university offering comprehensive programs across sciences, humanities, medicine, and social sciences.",
        strengths: ["sciences", "medicine", "humanities", "research", "diverse"],
        size: "large",
        environment: "urban"
    },
    {
        name: "EPFL (École Polytechnique Fédérale de Lausanne)",
        country: "Switzerland",
        location: "Lausanne, Switzerland",
        description: "Leading technical university specializing in engineering, technology, and natural sciences with cutting-edge research.",
        strengths: ["engineering", "technology", "innovation", "research", "sciences"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "University of Geneva",
        country: "Switzerland",
        location: "Geneva, Switzerland",
        description: "International university offering strong programs in international relations, law, sciences, and humanities.",
        strengths: ["international", "law", "sciences", "humanities", "languages"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Bern",
        country: "Switzerland",
        location: "Bern, Switzerland",
        description: "Comprehensive university in the Swiss capital with particular strengths in sciences, medicine, and social sciences.",
        strengths: ["sciences", "medicine", "social", "research", "diverse"],
        size: "medium",
        environment: "urban"
    },

    // GERMANY
    {
        name: "Technical University of Munich (TUM)",
        country: "Germany",
        location: "Munich, Germany",
        description: "Germany's top technical university excelling in engineering, technology, natural sciences, and entrepreneurship.",
        strengths: ["engineering", "technology", "sciences", "innovation", "research", "practical"],
        size: "large",
        environment: "urban"
    },
    {
        name: "Ludwig Maximilian University of Munich (LMU)",
        country: "Germany",
        location: "Munich, Germany",
        description: "One of Europe's premier universities offering comprehensive programs in humanities, sciences, law, and medicine.",
        strengths: ["humanities", "sciences", "medicine", "research", "diverse", "prestigious"],
        size: "large",
        environment: "urban"
    },
    {
        name: "Heidelberg University",
        country: "Germany",
        location: "Heidelberg, Germany",
        description: "Germany's oldest university with exceptional programs in humanities, sciences, and medicine in a picturesque setting.",
        strengths: ["humanities", "sciences", "medicine", "research", "tradition", "culture"],
        size: "large",
        environment: "small-town"
    },
    {
        name: "RWTH Aachen University",
        country: "Germany",
        location: "Aachen, Germany",
        description: "Leading technical university specializing in engineering and technology with strong industry partnerships.",
        strengths: ["engineering", "technology", "practical", "innovation", "research"],
        size: "large",
        environment: "urban"
    },
    {
        name: "Humboldt University of Berlin",
        country: "Germany",
        location: "Berlin, Germany",
        description: "Historic university in Germany's capital offering comprehensive programs with strengths in humanities and social sciences.",
        strengths: ["humanities", "social", "arts", "culture", "diverse", "history"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Freiburg",
        country: "Germany",
        location: "Freiburg, Germany",
        description: "Traditional university known for environmental sciences, humanities, and a strong focus on sustainability.",
        strengths: ["environment", "sciences", "humanities", "nature", "research"],
        size: "medium",
        environment: "small-town"
    },
    {
        name: "Free University of Berlin",
        country: "Germany",
        location: "Berlin, Germany",
        description: "Research university with particular strengths in humanities, social sciences, and international studies.",
        strengths: ["humanities", "social", "international", "research", "culture"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Mannheim",
        country: "Germany",
        location: "Mannheim, Germany",
        description: "Premier business university in Germany specializing in business administration, economics, and social sciences.",
        strengths: ["business", "economics", "social", "practical", "international"],
        size: "medium",
        environment: "urban"
    }
];

// Questions Database
const questions = [
    {
        id: 1,
        type: "country",
        question: "Which country would you prefer to study in?",
        options: [
            { value: "Italy", label: "Italy" },
            { value: "Austria", label: "Austria" },
            { value: "Switzerland", label: "Switzerland" },
            { value: "Germany", label: "Germany" }
        ]
    },
    {
        id: 2,
        type: "rating",
        question: "How interested are you in engineering and technology?",
        category: "engineering"
    },
    {
        id: 3,
        type: "rating",
        question: "How much do you enjoy humanities subjects (literature, history, philosophy)?",
        category: "humanities"
    },
    {
        id: 4,
        type: "rating",
        question: "How interested are you in natural sciences (biology, chemistry, physics)?",
        category: "sciences"
    },
    {
        id: 5,
        type: "multiple",
        question: "What type of university environment do you prefer?",
        options: [
            { value: "large-urban", label: "Large university in a major city", category: "size-environment" },
            { value: "medium-urban", label: "Medium-sized university in a city", category: "size-environment" },
            { value: "small-town", label: "University in a smaller, quieter town", category: "size-environment" },
            { value: "any", label: "I'm flexible about location", category: "size-environment" }
        ]
    },
    {
        id: 6,
        type: "rating",
        question: "How important is practical, hands-on learning to you?",
        category: "practical"
    },
    {
        id: 7,
        type: "rating",
        question: "How interested are you in business and economics?",
        category: "business"
    },
    {
        id: 8,
        type: "yes-no",
        question: "Do you prefer theoretical research over applied skills?",
        category: "theoretical"
    },
    {
        id: 9,
        type: "rating",
        question: "How much do you value innovation and cutting-edge technology?",
        category: "innovation"
    },
    {
        id: 10,
        type: "multiple",
        question: "Which area appeals to you most?",
        options: [
            { value: "stem", label: "Science, Technology, Engineering, Mathematics", category: "field-preference" },
            { value: "humanities", label: "Arts, Humanities, Languages", category: "field-preference" },
            { value: "business", label: "Business, Economics, Finance", category: "field-preference" },
            { value: "social", label: "Social Sciences, Law, Politics", category: "field-preference" }
        ]
    },
    {
        id: 11,
        type: "rating",
        question: "How interested are you in medicine and healthcare?",
        category: "medicine"
    },
    {
        id: 12,
        type: "yes-no",
        question: "Do you prefer a university with strong historical tradition?",
        category: "tradition"
    },
    {
        id: 13,
        type: "rating",
        question: "How important is international focus and diversity to you?",
        category: "international"
    },
    {
        id: 14,
        type: "rating",
        question: "How interested are you in environmental and sustainability topics?",
        category: "environment"
    },
    {
        id: 15,
        type: "multiple",
        question: "What kind of career path do you envision?",
        options: [
            { value: "research", label: "Academic research and innovation", category: "career" },
            { value: "industry", label: "Industry and corporate career", category: "career" },
            { value: "creative", label: "Creative and cultural fields", category: "career" },
            { value: "public", label: "Public service or social impact", category: "career" }
        ]
    },
    {
        id: 16,
        type: "rating",
        question: "How much do you enjoy design and creative work?",
        category: "design"
    },
    {
        id: 17,
        type: "yes-no",
        question: "Would you prefer a specialized university over a comprehensive one?",
        category: "specialized"
    },
    {
        id: 18,
        type: "rating",
        question: "How interested are you in law and legal studies?",
        category: "law"
    },
    {
        id: 19,
        type: "rating",
        question: "How important is proximity to nature and outdoor activities?",
        category: "nature"
    },
    {
        id: 20,
        type: "multiple",
        question: "What best describes your learning style?",
        options: [
            { value: "research-focused", label: "Deep research and theoretical exploration", category: "learning-style" },
            { value: "practical-focused", label: "Hands-on projects and practical applications", category: "learning-style" },
            { value: "balanced", label: "Balance of theory and practice", category: "learning-style" },
            { value: "collaborative", label: "Group work and collaborative learning", category: "learning-style" }
        ]
    }
];

// State Management
let currentQuestionIndex = 0;
let answers = {};

// Initialize
function startQuiz() {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    showQuestion(0);
}

function showQuestion(index) {
    currentQuestionIndex = index;
    const question = questions[index];
    const container = document.getElementById('question-container');
    
    let html = '<div class="question">';
    
    // Question type indicator
    let typeText = '';
    if (question.type === 'rating') typeText = 'Rating Scale (1-10)';
    else if (question.type === 'multiple') typeText = 'Multiple Choice';
    else if (question.type === 'yes-no') typeText = 'Yes/No';
    else if (question.type === 'country') typeText = 'Country Selection';
    
    html += `<div class="question-type">${typeText}</div>`;
    html += `<h2>${question.question}</h2>`;
    
    // Render based on question type
    if (question.type === 'rating') {
        html += '<div class="rating-scale">';
        for (let i = 1; i <= 10; i++) {
            const checked = answers[question.id] == i ? 'checked' : '';
            html += `
                <div class="rating-option">
                    <input type="radio" id="q${question.id}_${i}" name="q${question.id}" value="${i}" ${checked} onchange="saveAnswer(${question.id}, ${i})">
                    <label for="q${question.id}_${i}">${i}</label>
                </div>
            `;
        }
        html += '</div>';
        html += '<div class="rating-labels"><span>Not at all</span><span>Extremely</span></div>';
    } 
    else if (question.type === 'multiple' || question.type === 'country') {
        html += '<div class="options">';
        question.options.forEach((option, i) => {
            const checked = answers[question.id] === option.value ? 'checked' : '';
            html += `
                <div class="option">
                    <input type="radio" id="q${question.id}_${i}" name="q${question.id}" value="${option.value}" ${checked} onchange="saveAnswer(${question.id}, '${option.value}')">
                    <label for="q${question.id}_${i}">${option.label}</label>
                </div>
            `;
        });
        html += '</div>';
    }
    else if (question.type === 'yes-no') {
        const yesChecked = answers[question.id] === 'yes' ? 'checked' : '';
        const noChecked = answers[question.id] === 'no' ? 'checked' : '';
        html += '<div class="yes-no-options">';
        html += `
            <div class="yes-no-option">
                <input type="radio" id="q${question.id}_yes" name="q${question.id}" value="yes" ${yesChecked} onchange="saveAnswer(${question.id}, 'yes')">
                <label for="q${question.id}_yes">Yes</label>
            </div>
            <div class="yes-no-option">
                <input type="radio" id="q${question.id}_no" name="q${question.id}" value="no" ${noChecked} onchange="saveAnswer(${question.id}, 'no')">
                <label for="q${question.id}_no">No</label>
            </div>
        `;
        html += '</div>';
    }
    
    html += '</div>';
    container.innerHTML = html;
    
    // Update progress
    updateProgress();
    
    // Update navigation buttons
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').textContent = index === questions.length - 1 ? 'See Results' : 'Next';
}

function saveAnswer(questionId, value) {
    answers[questionId] = value;
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('question-counter').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
}

function nextQuestion() {
    // Check if current question is answered
    if (!answers[questions[currentQuestionIndex].id]) {
        alert('Please answer the current question before proceeding.');
        return;
    }
    
    if (currentQuestionIndex < questions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    } else {
        calculateResults();
    }
}

function calculateResults() {
    // Calculate match scores for each university
    const scores = universities.map(uni => {
        let score = 0;
        let maxScore = 0;
        
        // Rating questions (1-10 scale)
        const ratingQuestions = questions.filter(q => q.type === 'rating');
        ratingQuestions.forEach(q => {
            const answer = answers[q.id];
            if (answer && q.category) {
                maxScore += 10;
                if (uni.strengths.includes(q.category)) {
                    score += parseInt(answer);
                }
            }
        });
        
        // Yes/No questions
        const yesNoQuestions = questions.filter(q => q.type === 'yes-no');
        yesNoQuestions.forEach(q => {
            const answer = answers[q.id];
            if (answer && q.category) {
                maxScore += 10;
                if (q.category === 'theoretical' && answer === 'yes' && uni.strengths.includes('research')) {
                    score += 8;
                } else if (q.category === 'theoretical' && answer === 'no' && uni.strengths.includes('practical')) {
                    score += 8;
                } else if (q.category === 'tradition' && answer === 'yes' && uni.strengths.includes('tradition')) {
                    score += 8;
                } else if (q.category === 'specialized' && answer === 'yes' && uni.strengths.length <= 4) {
                    score += 7;
                } else if (q.category === 'specialized' && answer === 'no' && uni.strengths.includes('diverse')) {
                    score += 7;
                }
            }
        });
        
        // Multiple choice questions
        const q5 = answers[5]; // Environment preference
        if (q5) {
            maxScore += 10;
            if (q5 === 'large-urban' && uni.size === 'large' && uni.environment === 'urban') score += 10;
            else if (q5 === 'medium-urban' && uni.size === 'medium' && uni.environment === 'urban') score += 10;
            else if (q5 === 'small-town' && uni.environment === 'small-town') score += 10;
            else if (q5 === 'any') score += 5;
        }
        
        const q10 = answers[10]; // Field preference
        if (q10) {
            maxScore += 10;
            if (q10 === 'stem' && (uni.strengths.includes('engineering') || uni.strengths.includes('technology') || uni.strengths.includes('sciences'))) {
                score += 10;
            } else if (q10 === 'humanities' && uni.strengths.includes('humanities')) {
                score += 10;
            } else if (q10 === 'business' && (uni.strengths.includes('business') || uni.strengths.includes('economics'))) {
                score += 10;
            } else if (q10 === 'social' && uni.strengths.includes('social')) {
                score += 10;
            }
        }
        
        const q15 = answers[15]; // Career path
        if (q15) {
            maxScore += 10;
            if (q15 === 'research' && uni.strengths.includes('research')) score += 10;
            else if (q15 === 'industry' && uni.strengths.includes('practical')) score += 8;
            else if (q15 === 'creative' && (uni.strengths.includes('arts') || uni.strengths.includes('design'))) score += 10;
            else if (q15 === 'public' && uni.strengths.includes('social')) score += 8;
        }
        
        const q20 = answers[20]; // Learning style
        if (q20) {
            maxScore += 10;
            if (q20 === 'research-focused' && uni.strengths.includes('research')) score += 10;
            else if (q20 === 'practical-focused' && uni.strengths.includes('practical')) score += 10;
            else if (q20 === 'balanced') score += 7;
        }
        
        // Normalize score to percentage
        const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
        
        return {
            university: uni,
            score: percentage,
            rawScore: score
        };
    });
    
    // Sort by score
    scores.sort((a, b) => b.score - a.score);
    
    // Get top 2 matches
    const topMatch = scores[0];
    const secondMatch = scores[1];
    
    // Get nearest university in preferred country
    const preferredCountry = answers[1];
    const nearestUni = scores.find(s => s.university.country === preferredCountry) || scores[2];
    
    displayResults(topMatch, secondMatch, nearestUni);
}

function displayResults(top, second, nearest) {
    // Hide quiz screen
    document.getElementById('quiz-screen').classList.remove('active');
    
    // Show results screen
    const resultsScreen = document.getElementById('results-screen');
    resultsScreen.classList.add('active');
    
    // Fill in top match
    document.getElementById('uni-1-name').textContent = top.university.name;
    document.getElementById('uni-1-location').textContent = top.university.location;
    document.getElementById('uni-1-description').textContent = top.university.description;
    document.getElementById('uni-1-score').textContent = top.score + '%';
    
    // Fill in second match
    document.getElementById('uni-2-name').textContent = second.university.name;
    document.getElementById('uni-2-location').textContent = second.university.location;
    document.getElementById('uni-2-description').textContent = second.university.description;
    document.getElementById('uni-2-score').textContent = second.score + '%';
    
    // Fill in nearest option
    document.getElementById('uni-nearby-name').textContent = nearest.university.name;
    document.getElementById('uni-nearby-location').textContent = nearest.university.location;
    document.getElementById('uni-nearby-description').textContent = nearest.university.description;
}

function restartQuiz() {
    // Reset state
    currentQuestionIndex = 0;
    answers = {};
    
    // Show welcome screen
    document.getElementById('results-screen').classList.remove('active');
    document.getElementById('welcome-screen').classList.add('active');
}
