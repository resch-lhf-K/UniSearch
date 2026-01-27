// Translations
const translations = {
    en: {
        welcomeTitle: "University Recommendation Quiz",
        welcomeSubtitle: "Discover Your Perfect Academic Path",
        infoCard1Title: "35 Questions",
        infoCard1Text: "Comprehensive assessment for accurate results",
        infoCard2Title: "60+ Universities",
        infoCard2Text: "From Italy, Austria, Switzerland, and Germany",
        infoCard3Title: "Personalized Match",
        infoCard3Text: "Find universities that align with your goals",
        welcomeDescription: "This comprehensive assessment analyzes your academic interests, learning preferences, and career aspirations to recommend the best universities for your unique profile.",
        startBtn: "Begin Assessment",
        changeLangBtn: "Change Language",
        backText: "Back",
        prevText: "Previous",
        nextText: "Next",
        seeResultsText: "See Results",
        resultsTitle: "Your University Recommendations",
        resultsSubtitle: "Based on your unique profile and preferences",
        topMatchBadge: "Top Match",
        secondMatchBadge: "Second Match",
        nearestBadge: "Nearest Option",
        matchScoreText: "Match Score: ",
        restartText: "Retake Assessment",
        answerRequired: "Please answer the current question before proceeding.",
        ratingNotAtAll: "Not at all",
        ratingExtremely: "Extremely"
    },
    de: {
        welcomeTitle: "Universitätsempfehlungs-Quiz",
        welcomeSubtitle: "Entdecke deinen perfekten akademischen Weg",
        infoCard1Title: "35 Fragen",
        infoCard1Text: "Umfassende Bewertung für genaue Ergebnisse",
        infoCard2Title: "60+ Universitäten",
        infoCard2Text: "Aus Italien, Österreich, der Schweiz und Deutschland",
        infoCard3Title: "Personalisierte Übereinstimmung",
        infoCard3Text: "Finde Universitäten, die zu deinen Zielen passen",
        welcomeDescription: "Diese umfassende Bewertung analysiert deine akademischen Interessen, Lernpräferenzen und Karriereziele, um die besten Universitäten für dein einzigartiges Profil zu empfehlen.",
        startBtn: "Bewertung starten",
        changeLangBtn: "Sprache ändern",
        backText: "Zurück",
        prevText: "Vorherige",
        nextText: "Weiter",
        seeResultsText: "Ergebnisse anzeigen",
        resultsTitle: "Deine Universitätsempfehlungen",
        resultsSubtitle: "Basierend auf deinem einzigartigen Profil und deinen Präferenzen",
        topMatchBadge: "Beste Übereinstimmung",
        secondMatchBadge: "Zweite Übereinstimmung",
        nearestBadge: "Nächstgelegene Option",
        matchScoreText: "Übereinstimmung: ",
        restartText: "Bewertung wiederholen",
        answerRequired: "Bitte beantworte die aktuelle Frage, bevor du fortfährst.",
        ratingNotAtAll: "Überhaupt nicht",
        ratingExtremely: "Äußerst"
    },
    it: {
        welcomeTitle: "Quiz di Raccomandazione Universitaria",
        welcomeSubtitle: "Scopri il tuo percorso accademico perfetto",
        infoCard1Title: "35 Domande",
        infoCard1Text: "Valutazione completa per risultati accurati",
        infoCard2Title: "60+ Università",
        infoCard2Text: "Da Italia, Austria, Svizzera e Germania",
        infoCard3Title: "Abbinamento Personalizzato",
        infoCard3Text: "Trova università in linea con i tuoi obiettivi",
        welcomeDescription: "Questa valutazione completa analizza i tuoi interessi accademici, le preferenze di apprendimento e le aspirazioni di carriera per raccomandare le migliori università per il tuo profilo unico.",
        startBtn: "Inizia la valutazione",
        changeLangBtn: "Cambia lingua",
        backText: "Indietro",
        prevText: "Precedente",
        nextText: "Avanti",
        seeResultsText: "Vedi risultati",
        resultsTitle: "Le tue raccomandazioni universitarie",
        resultsSubtitle: "Basate sul tuo profilo unico e sulle tue preferenze",
        topMatchBadge: "Migliore corrispondenza",
        secondMatchBadge: "Seconda corrispondenza",
        nearestBadge: "Opzione più vicina",
        matchScoreText: "Punteggio di corrispondenza: ",
        restartText: "Ripeti la valutazione",
        answerRequired: "Per favore rispondi alla domanda attuale prima di procedere.",
        ratingNotAtAll: "Per niente",
        ratingExtremely: "Estremamente"
    }
};

// Current language
let currentLang = 'en';

// University Database - 60+ Universities
const universities = [
    // ITALY - 15 Universities
    {
        name: "Politecnico di Milano",
        country: "Italy",
        location: "Milan, Italy",
        description: "Leading technical university specializing in engineering, architecture, and design with strong innovation focus.",
        strengths: ["engineering", "technology", "design", "practical", "innovation", "architecture"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Bologna",
        country: "Italy",
        location: "Bologna, Italy",
        description: "The oldest university in the world, offering comprehensive programs across humanities, sciences, and law.",
        strengths: ["humanities", "law", "history", "theoretical", "tradition", "diverse"],
        size: "large",
        environment: "urban"
    },
    {
        name: "Sapienza University of Rome",
        country: "Italy",
        location: "Rome, Italy",
        description: "One of Europe's largest universities with extensive programs in arts, sciences, and archaeology.",
        strengths: ["diverse", "arts", "sciences", "social", "history", "culture", "archaeology"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Padua",
        country: "Italy",
        location: "Padua, Italy",
        description: "Historic university with strong emphasis on scientific research, medicine, and natural sciences.",
        strengths: ["sciences", "medicine", "research", "theoretical", "tradition", "astronomy"],
        size: "medium",
        environment: "small-town"
    },
    {
        name: "Bocconi University",
        country: "Italy",
        location: "Milan, Italy",
        description: "Premier institution for economics, management, and finance with strong international connections.",
        strengths: ["business", "economics", "finance", "practical", "international"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "Politecnico di Torino",
        country: "Italy",
        location: "Turin, Italy",
        description: "Technical university excelling in engineering, technology, and automotive design.",
        strengths: ["engineering", "technology", "automotive", "innovation", "practical"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Milan",
        country: "Italy",
        location: "Milan, Italy",
        description: "Major university with strong programs in sciences, medicine, and humanities.",
        strengths: ["sciences", "medicine", "humanities", "research", "diverse"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Pisa",
        country: "Italy",
        location: "Pisa, Italy",
        description: "Renowned for sciences, mathematics, and computer science with historical significance.",
        strengths: ["sciences", "mathematics", "technology", "research", "tradition"],
        size: "medium",
        environment: "small-town"
    },
    {
        name: "University of Florence",
        country: "Italy",
        location: "Florence, Italy",
        description: "Excellence in arts, humanities, architecture, and cultural studies in Renaissance city.",
        strengths: ["arts", "humanities", "architecture", "culture", "history", "design"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "Ca' Foscari University of Venice",
        country: "Italy",
        location: "Venice, Italy",
        description: "Specializing in economics, languages, international relations, and cultural heritage.",
        strengths: ["economics", "languages", "international", "culture", "arts"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "University of Naples Federico II",
        country: "Italy",
        location: "Naples, Italy",
        description: "One of the oldest public universities with strong engineering and sciences programs.",
        strengths: ["engineering", "sciences", "tradition", "diverse", "research"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Trento",
        country: "Italy",
        location: "Trento, Italy",
        description: "Modern university focusing on sciences, technology, and social sciences in Alpine setting.",
        strengths: ["sciences", "technology", "social", "research", "nature"],
        size: "medium",
        environment: "small-town"
    },
    {
        name: "Scuola Normale Superiore di Pisa",
        country: "Italy",
        location: "Pisa, Italy",
        description: "Elite institution for humanities and sciences with highly selective admission.",
        strengths: ["humanities", "sciences", "research", "prestigious", "theoretical"],
        size: "small",
        environment: "small-town"
    },
    {
        name: "Luiss University Rome",
        country: "Italy",
        location: "Rome, Italy",
        description: "Private university specializing in business, economics, law, and political science.",
        strengths: ["business", "economics", "law", "politics", "practical"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "University of Genoa",
        country: "Italy",
        location: "Genoa, Italy",
        description: "Comprehensive university with strong maritime, engineering, and medical programs.",
        strengths: ["engineering", "medicine", "maritime", "sciences", "diverse"],
        size: "large",
        environment: "urban"
    },

    // AUSTRIA - 15 Universities
    {
        name: "University of Vienna",
        country: "Austria",
        location: "Vienna, Austria",
        description: "Austria's largest university offering comprehensive programs with strong research focus.",
        strengths: ["humanities", "sciences", "social", "research", "diverse", "culture"],
        size: "large",
        environment: "urban"
    },
    {
        name: "Vienna University of Technology (TU Wien)",
        country: "Austria",
        location: "Vienna, Austria",
        description: "Leading technical university specializing in engineering and natural sciences.",
        strengths: ["engineering", "technology", "research", "innovation", "practical"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Innsbruck",
        country: "Austria",
        location: "Innsbruck, Austria",
        description: "Comprehensive university in the Alps with strong natural sciences and sports programs.",
        strengths: ["sciences", "nature", "sports", "research", "mountains"],
        size: "medium",
        environment: "small-town"
    },
    {
        name: "WU Vienna University of Economics and Business",
        country: "Austria",
        location: "Vienna, Austria",
        description: "Europe's largest business university specializing in economics and social sciences.",
        strengths: ["business", "economics", "social", "international", "practical"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Graz",
        country: "Austria",
        location: "Graz, Austria",
        description: "Historic university with strength in environmental sciences and social studies.",
        strengths: ["sciences", "environment", "social", "diverse", "research"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "Graz University of Technology",
        country: "Austria",
        location: "Graz, Austria",
        description: "Technical university focusing on engineering, IT, and sustainable technologies.",
        strengths: ["engineering", "technology", "sustainability", "innovation", "practical"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "University of Salzburg",
        country: "Austria",
        location: "Salzburg, Austria",
        description: "University known for law, humanities, and natural sciences in Mozart's birthplace.",
        strengths: ["law", "humanities", "sciences", "culture", "tradition"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "Medical University of Vienna",
        country: "Austria",
        location: "Vienna, Austria",
        description: "Largest medical school in German-speaking countries with cutting-edge research.",
        strengths: ["medicine", "research", "health", "sciences", "innovation"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Linz (JKU)",
        country: "Austria",
        location: "Linz, Austria",
        description: "Modern university with strong law, social sciences, and technology programs.",
        strengths: ["law", "social", "technology", "business", "practical"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "Vienna University of Applied Arts",
        country: "Austria",
        location: "Vienna, Austria",
        description: "Premier art and design university focusing on creative disciplines.",
        strengths: ["arts", "design", "architecture", "culture", "creativity"],
        size: "small",
        environment: "urban"
    },
    {
        name: "University of Klagenfurt",
        country: "Austria",
        location: "Klagenfurt, Austria",
        description: "University specializing in media, technology, and interdisciplinary studies.",
        strengths: ["media", "technology", "social", "interdisciplinary"],
        size: "small",
        environment: "small-town"
    },
    {
        name: "Medical University of Graz",
        country: "Austria",
        location: "Graz, Austria",
        description: "Medical university with excellent research facilities and clinical programs.",
        strengths: ["medicine", "research", "health", "sciences"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "University of Applied Sciences Technikum Wien",
        country: "Austria",
        location: "Vienna, Austria",
        description: "Practical-oriented university focusing on engineering and IT applications.",
        strengths: ["engineering", "technology", "practical", "innovation"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "MCI Management Center Innsbruck",
        country: "Austria",
        location: "Innsbruck, Austria",
        description: "International business school in the Alps with entrepreneurial focus.",
        strengths: ["business", "international", "entrepreneurship", "practical"],
        size: "small",
        environment: "small-town"
    },
    {
        name: "University of Natural Resources and Life Sciences Vienna",
        country: "Austria",
        location: "Vienna, Austria",
        description: "Specialized in sustainability, agriculture, and environmental sciences.",
        strengths: ["environment", "sustainability", "agriculture", "sciences", "nature"],
        size: "medium",
        environment: "urban"
    },

    // SWITZERLAND - 15 Universities
    {
        name: "ETH Zurich",
        country: "Switzerland",
        location: "Zurich, Switzerland",
        description: "World-renowned technical university known for excellence in STEM fields.",
        strengths: ["engineering", "technology", "sciences", "research", "innovation", "prestigious"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "University of Zurich",
        country: "Switzerland",
        location: "Zurich, Switzerland",
        description: "Largest Swiss university with comprehensive programs across all disciplines.",
        strengths: ["sciences", "medicine", "humanities", "research", "diverse"],
        size: "large",
        environment: "urban"
    },
    {
        name: "EPFL (École Polytechnique Fédérale de Lausanne)",
        country: "Switzerland",
        location: "Lausanne, Switzerland",
        description: "Elite technical university specializing in engineering and cutting-edge technology.",
        strengths: ["engineering", "technology", "innovation", "research", "sciences"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "University of Geneva",
        country: "Switzerland",
        location: "Geneva, Switzerland",
        description: "International university strong in international relations, law, and sciences.",
        strengths: ["international", "law", "sciences", "humanities", "languages"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Bern",
        country: "Switzerland",
        location: "Bern, Switzerland",
        description: "Comprehensive university in Swiss capital with strong sciences and medicine.",
        strengths: ["sciences", "medicine", "social", "research", "diverse"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "University of Basel",
        country: "Switzerland",
        location: "Basel, Switzerland",
        description: "Switzerland's oldest university excelling in life sciences and humanities.",
        strengths: ["sciences", "medicine", "humanities", "research", "tradition"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "University of Lausanne",
        country: "Switzerland",
        location: "Lausanne, Switzerland",
        description: "Research university with strong programs in sciences, humanities, and law.",
        strengths: ["sciences", "humanities", "law", "research", "social"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "University of St. Gallen (HSG)",
        country: "Switzerland",
        location: "St. Gallen, Switzerland",
        description: "Top-ranked business university specializing in economics and management.",
        strengths: ["business", "economics", "management", "international", "practical"],
        size: "small",
        environment: "small-town"
    },
    {
        name: "University of Fribourg",
        country: "Switzerland",
        location: "Fribourg, Switzerland",
        description: "Bilingual university strong in law, humanities, and social sciences.",
        strengths: ["law", "humanities", "social", "languages", "tradition"],
        size: "small",
        environment: "small-town"
    },
    {
        name: "Università della Svizzera italiana",
        country: "Switzerland",
        location: "Lugano, Switzerland",
        description: "Italian-speaking university focusing on architecture, communication, and informatics.",
        strengths: ["architecture", "communication", "technology", "languages"],
        size: "small",
        environment: "urban"
    },
    {
        name: "University of Neuchâtel",
        country: "Switzerland",
        location: "Neuchâtel, Switzerland",
        description: "Francophone university known for sciences, humanities, and law programs.",
        strengths: ["sciences", "humanities", "law", "research"],
        size: "small",
        environment: "small-town"
    },
    {
        name: "ETH Zurich Department of Architecture",
        country: "Switzerland",
        location: "Zurich, Switzerland",
        description: "World-leading architecture program within ETH with focus on design innovation.",
        strengths: ["architecture", "design", "innovation", "theoretical", "prestigious"],
        size: "small",
        environment: "urban"
    },
    {
        name: "Geneva School of Economics and Management",
        country: "Switzerland",
        location: "Geneva, Switzerland",
        description: "Business school within University of Geneva with international focus.",
        strengths: ["business", "economics", "international", "finance"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "Zurich University of the Arts",
        country: "Switzerland",
        location: "Zurich, Switzerland",
        description: "Leading arts university for design, film, music, and fine arts.",
        strengths: ["arts", "design", "media", "culture", "creativity"],
        size: "small",
        environment: "urban"
    },
    {
        name: "Swiss Federal Institute of Technology in Lausanne - Life Sciences",
        country: "Switzerland",
        location: "Lausanne, Switzerland",
        description: "EPFL's life sciences program combining engineering with biology and medicine.",
        strengths: ["sciences", "medicine", "technology", "innovation", "research"],
        size: "medium",
        environment: "urban"
    },

    // GERMANY - 20 Universities
    {
        name: "Technical University of Munich (TUM)",
        country: "Germany",
        location: "Munich, Germany",
        description: "Germany's top technical university excelling in engineering and entrepreneurship.",
        strengths: ["engineering", "technology", "sciences", "innovation", "research", "practical"],
        size: "large",
        environment: "urban"
    },
    {
        name: "Ludwig Maximilian University of Munich (LMU)",
        country: "Germany",
        location: "Munich, Germany",
        description: "One of Europe's premier universities with comprehensive programs.",
        strengths: ["humanities", "sciences", "medicine", "research", "diverse", "prestigious"],
        size: "large",
        environment: "urban"
    },
    {
        name: "Heidelberg University",
        country: "Germany",
        location: "Heidelberg, Germany",
        description: "Germany's oldest university with exceptional humanities and sciences programs.",
        strengths: ["humanities", "sciences", "medicine", "research", "tradition", "culture"],
        size: "large",
        environment: "small-town"
    },
    {
        name: "RWTH Aachen University",
        country: "Germany",
        location: "Aachen, Germany",
        description: "Leading technical university with strong industry partnerships.",
        strengths: ["engineering", "technology", "practical", "innovation", "research"],
        size: "large",
        environment: "urban"
    },
    {
        name: "Humboldt University of Berlin",
        country: "Germany",
        location: "Berlin, Germany",
        description: "Historic university in capital with strengths in humanities and social sciences.",
        strengths: ["humanities", "social", "arts", "culture", "diverse", "history"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Freiburg",
        country: "Germany",
        location: "Freiburg, Germany",
        description: "Traditional university known for environmental sciences and humanities.",
        strengths: ["environment", "sciences", "humanities", "nature", "research"],
        size: "medium",
        environment: "small-town"
    },
    {
        name: "Free University of Berlin",
        country: "Germany",
        location: "Berlin, Germany",
        description: "Research university with strengths in humanities and international studies.",
        strengths: ["humanities", "social", "international", "research", "culture"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Mannheim",
        country: "Germany",
        location: "Mannheim, Germany",
        description: "Premier business university specializing in economics and social sciences.",
        strengths: ["business", "economics", "social", "practical", "international"],
        size: "medium",
        environment: "urban"
    },
    {
        name: "University of Tübingen",
        country: "Germany",
        location: "Tübingen, Germany",
        description: "Historic university excelling in humanities, theology, and life sciences.",
        strengths: ["humanities", "sciences", "medicine", "theology", "tradition", "research"],
        size: "medium",
        environment: "small-town"
    },
    {
        name: "Karlsruhe Institute of Technology (KIT)",
        country: "Germany",
        location: "Karlsruhe, Germany",
        description: "Technical university merging research and education in engineering and sciences.",
        strengths: ["engineering", "technology", "sciences", "research", "innovation"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Göttingen",
        country: "Germany",
        location: "Göttingen, Germany",
        description: "Traditional university strong in sciences, humanities, and social sciences.",
        strengths: ["sciences", "humanities", "social", "research", "tradition"],
        size: "medium",
        environment: "small-town"
    },
    {
        name: "Technical University of Berlin",
        country: "Germany",
        location: "Berlin, Germany",
        description: "Large technical university in capital focusing on engineering and technology.",
        strengths: ["engineering", "technology", "innovation", "urban", "diverse"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Cologne",
        country: "Germany",
        location: "Cologne, Germany",
        description: "One of largest German universities with strong humanities and social sciences.",
        strengths: ["humanities", "social", "business", "diverse", "culture"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Hamburg",
        country: "Germany",
        location: "Hamburg, Germany",
        description: "Comprehensive university in maritime city with diverse programs.",
        strengths: ["sciences", "humanities", "social", "diverse", "research"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Bonn",
        country: "Germany",
        location: "Bonn, Germany",
        description: "Research university with excellence in sciences, mathematics, and humanities.",
        strengths: ["sciences", "mathematics", "humanities", "research", "tradition"],
        size: "large",
        environment: "urban"
    },
    {
        name: "Technical University of Dresden",
        country: "Germany",
        location: "Dresden, Germany",
        description: "Large technical university with comprehensive engineering programs.",
        strengths: ["engineering", "technology", "sciences", "research", "innovation"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Frankfurt",
        country: "Germany",
        location: "Frankfurt, Germany",
        description: "Major research university strong in finance, law, and social sciences.",
        strengths: ["finance", "law", "social", "business", "research"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Stuttgart",
        country: "Germany",
        location: "Stuttgart, Germany",
        description: "Technical university known for engineering, especially automotive technology.",
        strengths: ["engineering", "automotive", "technology", "practical", "innovation"],
        size: "large",
        environment: "urban"
    },
    {
        name: "University of Leipzig",
        country: "Germany",
        location: "Leipzig, Germany",
        description: "One of oldest German universities with strong humanities and sciences.",
        strengths: ["humanities", "sciences", "medicine", "tradition", "culture"],
        size: "large",
        environment: "urban"
    },
    {
        name: "WHU - Otto Beisheim School of Management",
        country: "Germany",
        location: "Vallendar, Germany",
        description: "Top German business school with focus on entrepreneurship and management.",
        strengths: ["business", "entrepreneurship", "finance", "international", "practical"],
        size: "small",
        environment: "small-town"
    }
];

// Questions Database - 35 Questions with translations
const questionsData = {
    en: [
        {
            id: 1,
            type: "country",
            question: "Which country would you prefer to study in?",
            options: [
                { value: "Italy", label: "Italy 🇮🇹" },
                { value: "Austria", label: "Austria 🇦🇹" },
                { value: "Switzerland", label: "Switzerland 🇨🇭" },
                { value: "Germany", label: "Germany 🇩🇪" }
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
                { value: "large-urban", label: "Large university in a major city" },
                { value: "medium-urban", label: "Medium-sized university in a city" },
                { value: "small-town", label: "University in a smaller, quieter town" },
                { value: "any", label: "I'm flexible about location" }
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
                { value: "stem", label: "Science, Technology, Engineering, Mathematics" },
                { value: "humanities", label: "Arts, Humanities, Languages" },
                { value: "business", label: "Business, Economics, Finance" },
                { value: "social", label: "Social Sciences, Law, Politics" }
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
                { value: "research", label: "Academic research and innovation" },
                { value: "industry", label: "Industry and corporate career" },
                { value: "creative", label: "Creative and cultural fields" },
                { value: "public", label: "Public service or social impact" }
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
                { value: "research-focused", label: "Deep research and theoretical exploration" },
                { value: "practical-focused", label: "Hands-on projects and practical applications" },
                { value: "balanced", label: "Balance of theory and practice" },
                { value: "collaborative", label: "Group work and collaborative learning" }
            ]
        },
        {
            id: 21,
            type: "rating",
            question: "How interested are you in architecture and urban planning?",
            category: "architecture"
        },
        {
            id: 22,
            type: "rating",
            question: "How much do you value cultural activities and arts scene?",
            category: "culture"
        },
        {
            id: 23,
            type: "yes-no",
            question: "Do you prefer a smaller, more intimate academic community?",
            category: "small-community"
        },
        {
            id: 24,
            type: "rating",
            question: "How interested are you in finance and banking?",
            category: "finance"
        },
        {
            id: 25,
            type: "rating",
            question: "How important is research excellence and academic reputation?",
            category: "research"
        },
        {
            id: 26,
            type: "multiple",
            question: "What type of city atmosphere appeals to you?",
            options: [
                { value: "cosmopolitan", label: "Large cosmopolitan city with international vibe" },
                { value: "historic", label: "Historic city with cultural heritage" },
                { value: "modern", label: "Modern, innovative tech hub" },
                { value: "nature", label: "City close to mountains/nature" }
            ]
        },
        {
            id: 27,
            type: "rating",
            question: "How interested are you in media and communication studies?",
            category: "media"
        },
        {
            id: 28,
            type: "yes-no",
            question: "Would you like to study in a bilingual or multilingual environment?",
            category: "languages"
        },
        {
            id: 29,
            type: "rating",
            question: "How interested are you in entrepreneurship and startups?",
            category: "entrepreneurship"
        },
        {
            id: 30,
            type: "rating",
            question: "How important is having strong connections to industry?",
            category: "industry-connections"
        },
        {
            id: 31,
            type: "multiple",
            question: "Which aspect of university life matters most to you?",
            options: [
                { value: "academic", label: "Academic excellence and rigorous programs" },
                { value: "networking", label: "Networking and career opportunities" },
                { value: "lifestyle", label: "Student lifestyle and city life" },
                { value: "research", label: "Research opportunities and facilities" }
            ]
        },
        {
            id: 32,
            type: "rating",
            question: "How interested are you in sports science or physical education?",
            category: "sports"
        },
        {
            id: 33,
            type: "rating",
            question: "How important is studying at a prestigious, world-renowned institution?",
            category: "prestigious"
        },
        {
            id: 34,
            type: "yes-no",
            question: "Do you prefer interdisciplinary studies over single-subject focus?",
            category: "interdisciplinary"
        },
        {
            id: 35,
            type: "rating",
            question: "How interested are you in mathematics and computational fields?",
            category: "mathematics"
        }
    ],
    de: [
        {
            id: 1,
            type: "country",
            question: "In welchem Land möchtest du bevorzugt studieren?",
            options: [
                { value: "Italy", label: "Italien 🇮🇹" },
                { value: "Austria", label: "Österreich 🇦🇹" },
                { value: "Switzerland", label: "Schweiz 🇨🇭" },
                { value: "Germany", label: "Deutschland 🇩🇪" }
            ]
        },
        {
            id: 2,
            type: "rating",
            question: "Wie sehr interessierst du dich für Ingenieurwesen und Technologie?",
            category: "engineering"
        },
        {
            id: 3,
            type: "rating",
            question: "Wie sehr magst du geisteswissenschaftliche Fächer (Literatur, Geschichte, Philosophie)?",
            category: "humanities"
        },
        {
            id: 4,
            type: "rating",
            question: "Wie sehr interessierst du dich für Naturwissenschaften (Biologie, Chemie, Physik)?",
            category: "sciences"
        },
        {
            id: 5,
            type: "multiple",
            question: "Welche Art von Universitätsumgebung bevorzugst du?",
            options: [
                { value: "large-urban", label: "Große Universität in einer Großstadt" },
                { value: "medium-urban", label: "Mittelgroße Universität in einer Stadt" },
                { value: "small-town", label: "Universität in einer kleineren, ruhigeren Stadt" },
                { value: "any", label: "Ich bin flexibel bezüglich des Standorts" }
            ]
        },
        {
            id: 6,
            type: "rating",
            question: "Wie wichtig ist dir praktisches, anwendungsorientiertes Lernen?",
            category: "practical"
        },
        {
            id: 7,
            type: "rating",
            question: "Wie sehr interessierst du dich für Betriebswirtschaft und Volkswirtschaft?",
            category: "business"
        },
        {
            id: 8,
            type: "yes-no",
            question: "Bevorzugst du theoretische Forschung gegenüber angewandten Fähigkeiten?",
            category: "theoretical"
        },
        {
            id: 9,
            type: "rating",
            question: "Wie wichtig sind dir Innovation und modernste Technologie?",
            category: "innovation"
        },
        {
            id: 10,
            type: "multiple",
            question: "Welcher Bereich spricht dich am meisten an?",
            options: [
                { value: "stem", label: "Wissenschaft, Technologie, Ingenieurwesen, Mathematik" },
                { value: "humanities", label: "Kunst, Geisteswissenschaften, Sprachen" },
                { value: "business", label: "Betriebswirtschaft, Volkswirtschaft, Finanzen" },
                { value: "social", label: "Sozialwissenschaften, Recht, Politik" }
            ]
        },
        {
            id: 11,
            type: "rating",
            question: "Wie sehr interessierst du dich für Medizin und Gesundheitswesen?",
            category: "medicine"
        },
        {
            id: 12,
            type: "yes-no",
            question: "Bevorzugst du eine Universität mit starker historischer Tradition?",
            category: "tradition"
        },
        {
            id: 13,
            type: "rating",
            question: "Wie wichtig sind dir internationale Ausrichtung und Vielfalt?",
            category: "international"
        },
        {
            id: 14,
            type: "rating",
            question: "Wie sehr interessierst du dich für Umwelt- und Nachhaltigkeitsthemen?",
            category: "environment"
        },
        {
            id: 15,
            type: "multiple",
            question: "Welchen Karriereweg stellst du dir vor?",
            options: [
                { value: "research", label: "Akademische Forschung und Innovation" },
                { value: "industry", label: "Industrie und Unternehmenskarriere" },
                { value: "creative", label: "Kreative und kulturelle Bereiche" },
                { value: "public", label: "Öffentlicher Dienst oder soziale Wirkung" }
            ]
        },
        {
            id: 16,
            type: "rating",
            question: "Wie sehr magst du Design und kreative Arbeit?",
            category: "design"
        },
        {
            id: 17,
            type: "yes-no",
            question: "Würdest du eine spezialisierte Universität einer umfassenden vorziehen?",
            category: "specialized"
        },
        {
            id: 18,
            type: "rating",
            question: "Wie sehr interessierst du dich für Recht und Rechtswissenschaften?",
            category: "law"
        },
        {
            id: 19,
            type: "rating",
            question: "Wie wichtig ist dir die Nähe zur Natur und Outdoor-Aktivitäten?",
            category: "nature"
        },
        {
            id: 20,
            type: "multiple",
            question: "Was beschreibt deinen Lernstil am besten?",
            options: [
                { value: "research-focused", label: "Tiefe Forschung und theoretische Exploration" },
                { value: "practical-focused", label: "Praktische Projekte und Anwendungen" },
                { value: "balanced", label: "Balance zwischen Theorie und Praxis" },
                { value: "collaborative", label: "Gruppenarbeit und kollaboratives Lernen" }
            ]
        },
        {
            id: 21,
            type: "rating",
            question: "Wie sehr interessierst du dich für Architektur und Stadtplanung?",
            category: "architecture"
        },
        {
            id: 22,
            type: "rating",
            question: "Wie wichtig sind dir kulturelle Aktivitäten und Kunstszene?",
            category: "culture"
        },
        {
            id: 23,
            type: "yes-no",
            question: "Bevorzugst du eine kleinere, intimere akademische Gemeinschaft?",
            category: "small-community"
        },
        {
            id: 24,
            type: "rating",
            question: "Wie sehr interessierst du dich für Finanzen und Bankwesen?",
            category: "finance"
        },
        {
            id: 25,
            type: "rating",
            question: "Wie wichtig sind dir Forschungsexzellenz und akademischer Ruf?",
            category: "research"
        },
        {
            id: 26,
            type: "multiple",
            question: "Welche Art von Stadtatmosphäre spricht dich an?",
            options: [
                { value: "cosmopolitan", label: "Große kosmopolitische Stadt mit internationalem Flair" },
                { value: "historic", label: "Historische Stadt mit kulturellem Erbe" },
                { value: "modern", label: "Moderne, innovative Tech-Stadt" },
                { value: "nature", label: "Stadt in der Nähe von Bergen/Natur" }
            ]
        },
        {
            id: 27,
            type: "rating",
            question: "Wie sehr interessierst du dich für Medien und Kommunikationswissenschaften?",
            category: "media"
        },
        {
            id: 28,
            type: "yes-no",
            question: "Möchtest du in einer zwei- oder mehrsprachigen Umgebung studieren?",
            category: "languages"
        },
        {
            id: 29,
            type: "rating",
            question: "Wie sehr interessierst du dich für Unternehmertum und Startups?",
            category: "entrepreneurship"
        },
        {
            id: 30,
            type: "rating",
            question: "Wie wichtig sind dir starke Verbindungen zur Industrie?",
            category: "industry-connections"
        },
        {
            id: 31,
            type: "multiple",
            question: "Welcher Aspekt des Universitätslebens ist dir am wichtigsten?",
            options: [
                { value: "academic", label: "Akademische Exzellenz und anspruchsvolle Programme" },
                { value: "networking", label: "Networking und Karrieremöglichkeiten" },
                { value: "lifestyle", label: "Studentenleben und Stadtleben" },
                { value: "research", label: "Forschungsmöglichkeiten und Einrichtungen" }
            ]
        },
        {
            id: 32,
            type: "rating",
            question: "Wie sehr interessierst du dich für Sportwissenschaft oder Sportpädagogik?",
            category: "sports"
        },
        {
            id: 33,
            type: "rating",
            question: "Wie wichtig ist es dir, an einer prestigeträchtigen, weltweit renommierten Institution zu studieren?",
            category: "prestigious"
        },
        {
            id: 34,
            type: "yes-no",
            question: "Bevorzugst du interdisziplinäre Studien gegenüber einem Einzelfach?",
            category: "interdisciplinary"
        },
        {
            id: 35,
            type: "rating",
            question: "Wie sehr interessierst du dich für Mathematik und computerbasierte Bereiche?",
            category: "mathematics"
        }
    ],
    it: [
        {
            id: 1,
            type: "country",
            question: "In quale paese preferiresti studiare?",
            options: [
                { value: "Italy", label: "Italia 🇮🇹" },
                { value: "Austria", label: "Austria 🇦🇹" },
                { value: "Switzerland", label: "Svizzera 🇨🇭" },
                { value: "Germany", label: "Germania 🇩🇪" }
            ]
        },
        {
            id: 2,
            type: "rating",
            question: "Quanto ti interessa l'ingegneria e la tecnologia?",
            category: "engineering"
        },
        {
            id: 3,
            type: "rating",
            question: "Quanto ti piacciono le materie umanistiche (letteratura, storia, filosofia)?",
            category: "humanities"
        },
        {
            id: 4,
            type: "rating",
            question: "Quanto ti interessano le scienze naturali (biologia, chimica, fisica)?",
            category: "sciences"
        },
        {
            id: 5,
            type: "multiple",
            question: "Che tipo di ambiente universitario preferisci?",
            options: [
                { value: "large-urban", label: "Grande università in una città importante" },
                { value: "medium-urban", label: "Università di medie dimensioni in una città" },
                { value: "small-town", label: "Università in una città più piccola e tranquilla" },
                { value: "any", label: "Sono flessibile riguardo alla posizione" }
            ]
        },
        {
            id: 6,
            type: "rating",
            question: "Quanto è importante per te l'apprendimento pratico e applicato?",
            category: "practical"
        },
        {
            id: 7,
            type: "rating",
            question: "Quanto ti interessano business ed economia?",
            category: "business"
        },
        {
            id: 8,
            type: "yes-no",
            question: "Preferisci la ricerca teorica rispetto alle competenze applicate?",
            category: "theoretical"
        },
        {
            id: 9,
            type: "rating",
            question: "Quanto apprezzi l'innovazione e la tecnologia all'avanguardia?",
            category: "innovation"
        },
        {
            id: 10,
            type: "multiple",
            question: "Quale area ti attrae di più?",
            options: [
                { value: "stem", label: "Scienza, Tecnologia, Ingegneria, Matematica" },
                { value: "humanities", label: "Arte, Scienze Umane, Lingue" },
                { value: "business", label: "Business, Economia, Finanza" },
                { value: "social", label: "Scienze Sociali, Diritto, Politica" }
            ]
        },
        {
            id: 11,
            type: "rating",
            question: "Quanto ti interessa la medicina e l'assistenza sanitaria?",
            category: "medicine"
        },
        {
            id: 12,
            type: "yes-no",
            question: "Preferisci un'università con una forte tradizione storica?",
            category: "tradition"
        },
        {
            id: 13,
            type: "rating",
            question: "Quanto sono importanti per te l'orientamento internazionale e la diversità?",
            category: "international"
        },
        {
            id: 14,
            type: "rating",
            question: "Quanto ti interessano i temi ambientali e di sostenibilità?",
            category: "environment"
        },
        {
            id: 15,
            type: "multiple",
            question: "Che tipo di percorso di carriera immagini?",
            options: [
                { value: "research", label: "Ricerca accademica e innovazione" },
                { value: "industry", label: "Industria e carriera aziendale" },
                { value: "creative", label: "Campi creativi e culturali" },
                { value: "public", label: "Servizio pubblico o impatto sociale" }
            ]
        },
        {
            id: 16,
            type: "rating",
            question: "Quanto ti piace il design e il lavoro creativo?",
            category: "design"
        },
        {
            id: 17,
            type: "yes-no",
            question: "Preferiresti un'università specializzata rispetto a una comprensiva?",
            category: "specialized"
        },
        {
            id: 18,
            type: "rating",
            question: "Quanto ti interessano il diritto e gli studi legali?",
            category: "law"
        },
        {
            id: 19,
            type: "rating",
            question: "Quanto è importante la vicinanza alla natura e alle attività all'aperto?",
            category: "nature"
        },
        {
            id: 20,
            type: "multiple",
            question: "Cosa descrive meglio il tuo stile di apprendimento?",
            options: [
                { value: "research-focused", label: "Ricerca approfondita ed esplorazione teorica" },
                { value: "practical-focused", label: "Progetti pratici e applicazioni" },
                { value: "balanced", label: "Equilibrio tra teoria e pratica" },
                { value: "collaborative", label: "Lavoro di gruppo e apprendimento collaborativo" }
            ]
        },
        {
            id: 21,
            type: "rating",
            question: "Quanto ti interessa l'architettura e l'urbanistica?",
            category: "architecture"
        },
        {
            id: 22,
            type: "rating",
            question: "Quanto apprezzi le attività culturali e la scena artistica?",
            category: "culture"
        },
        {
            id: 23,
            type: "yes-no",
            question: "Preferisci una comunità accademica più piccola e intima?",
            category: "small-community"
        },
        {
            id: 24,
            type: "rating",
            question: "Quanto ti interessano la finanza e il settore bancario?",
            category: "finance"
        },
        {
            id: 25,
            type: "rating",
            question: "Quanto sono importanti l'eccellenza nella ricerca e la reputazione accademica?",
            category: "research"
        },
        {
            id: 26,
            type: "multiple",
            question: "Che tipo di atmosfera cittadina ti attrae?",
            options: [
                { value: "cosmopolitan", label: "Grande città cosmopolita con atmosfera internazionale" },
                { value: "historic", label: "Città storica con patrimonio culturale" },
                { value: "modern", label: "Centro tecnologico moderno e innovativo" },
                { value: "nature", label: "Città vicina a montagne/natura" }
            ]
        },
        {
            id: 27,
            type: "rating",
            question: "Quanto ti interessano i media e gli studi sulla comunicazione?",
            category: "media"
        },
        {
            id: 28,
            type: "yes-no",
            question: "Ti piacerebbe studiare in un ambiente bilingue o multilingue?",
            category: "languages"
        },
        {
            id: 29,
            type: "rating",
            question: "Quanto ti interessa l'imprenditorialità e le startup?",
            category: "entrepreneurship"
        },
        {
            id: 30,
            type: "rating",
            question: "Quanto è importante avere forti collegamenti con l'industria?",
            category: "industry-connections"
        },
        {
            id: 31,
            type: "multiple",
            question: "Quale aspetto della vita universitaria conta di più per te?",
            options: [
                { value: "academic", label: "Eccellenza accademica e programmi rigorosi" },
                { value: "networking", label: "Networking e opportunità di carriera" },
                { value: "lifestyle", label: "Stile di vita studentesco e vita cittadina" },
                { value: "research", label: "Opportunità e strutture di ricerca" }
            ]
        },
        {
            id: 32,
            type: "rating",
            question: "Quanto ti interessano le scienze motorie o l'educazione fisica?",
            category: "sports"
        },
        {
            id: 33,
            type: "rating",
            question: "Quanto è importante studiare in un'istituzione prestigiosa e rinomata a livello mondiale?",
            category: "prestigious"
        },
        {
            id: 34,
            type: "yes-no",
            question: "Preferisci studi interdisciplinari rispetto alla concentrazione su una singola materia?",
            category: "interdisciplinary"
        },
        {
            id: 35,
            type: "rating",
            question: "Quanto ti interessano la matematica e i campi computazionali?",
            category: "mathematics"
        }
    ]
};

// State Management
let currentQuestionIndex = 0;
let answers = {};
let questions = [];

// Language Selection
function selectLanguage(lang) {
    currentLang = lang;
    questions = questionsData[lang];
    updateUILanguage();
    document.getElementById('language-screen').classList.remove('active');
    document.getElementById('welcome-screen').classList.add('active');
}

function updateUILanguage() {
    const t = translations[currentLang];
    document.getElementById('welcome-title').textContent = t.welcomeTitle;
    document.getElementById('welcome-subtitle').textContent = t.welcomeSubtitle;
    document.getElementById('info-card-1-title').textContent = t.infoCard1Title;
    document.getElementById('info-card-1-text').textContent = t.infoCard1Text;
    document.getElementById('info-card-2-title').textContent = t.infoCard2Title;
    document.getElementById('info-card-2-text').textContent = t.infoCard2Text;
    document.getElementById('info-card-3-title').textContent = t.infoCard3Title;
    document.getElementById('info-card-3-text').textContent = t.infoCard3Text;
    document.getElementById('welcome-description').textContent = t.welcomeDescription;
    document.getElementById('start-btn').textContent = t.startBtn;
    document.getElementById('change-lang-btn').textContent = t.changeLangBtn;
    document.getElementById('back-text').textContent = t.backText;
    document.getElementById('prev-text').textContent = t.prevText;
    document.getElementById('results-title').textContent = t.resultsTitle;
    document.getElementById('results-subtitle').textContent = t.resultsSubtitle;
    document.getElementById('top-match-badge').textContent = t.topMatchBadge;
    document.getElementById('second-match-badge').textContent = t.secondMatchBadge;
    document.getElementById('nearest-badge').textContent = t.nearestBadge;
    document.getElementById('match-score-text').textContent = t.matchScoreText;
    document.getElementById('match-score-text-2').textContent = t.matchScoreText;
}

function backToLanguage() {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('language-screen').classList.add('active');
}

function backToWelcome() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('welcome-screen').classList.add('active');
    currentQuestionIndex = 0;
    answers = {};
}

// Initialize Quiz
function startQuiz() {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    showQuestion(0);
}

function showQuestion(index) {
    currentQuestionIndex = index;
    const question = questions[index];
    const container = document.getElementById('question-container');
    const t = translations[currentLang];
    
    let html = '<div class="question">';
    
    // Question type indicator
    let typeText = '';
    if (question.type === 'rating') typeText = currentLang === 'en' ? 'Rating Scale (1-10)' : currentLang === 'de' ? 'Bewertungsskala (1-10)' : 'Scala di valutazione (1-10)';
    else if (question.type === 'multiple') typeText = currentLang === 'en' ? 'Multiple Choice' : currentLang === 'de' ? 'Multiple Choice' : 'Scelta multipla';
    else if (question.type === 'yes-no') typeText = currentLang === 'en' ? 'Yes/No' : currentLang === 'de' ? 'Ja/Nein' : 'Sì/No';
    else if (question.type === 'country') typeText = currentLang === 'en' ? 'Country Selection' : currentLang === 'de' ? 'Länderauswahl' : 'Selezione Paese';
    
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
        html += `<div class="rating-labels"><span>${t.ratingNotAtAll}</span><span>${t.ratingExtremely}</span></div>`;
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
        const yesText = currentLang === 'en' ? 'Yes' : currentLang === 'de' ? 'Ja' : 'Sì';
        const noText = currentLang === 'en' ? 'No' : currentLang === 'de' ? 'Nein' : 'No';
        html += '<div class="yes-no-options">';
        html += `
            <div class="yes-no-option">
                <input type="radio" id="q${question.id}_yes" name="q${question.id}" value="yes" ${yesChecked} onchange="saveAnswer(${question.id}, 'yes')">
                <label for="q${question.id}_yes">${yesText}</label>
            </div>
            <div class="yes-no-option">
                <input type="radio" id="q${question.id}_no" name="q${question.id}" value="no" ${noChecked} onchange="saveAnswer(${question.id}, 'no')">
                <label for="q${question.id}_no">${noText}</label>
            </div>
        `;
        html += '</div>';
    }
    
    html += '</div>';
    container.innerHTML = html;
    
    // Update progress
    updateProgress();
    
    // Update navigation buttons
    const t2 = translations[currentLang];
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-text').textContent = index === questions.length - 1 ? t2.seeResultsText : t2.nextText;
}

function saveAnswer(questionId, value) {
    answers[questionId] = value;
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    const counterText = currentLang === 'en' ? `Question ${currentQuestionIndex + 1} of ${questions.length}` :
                       currentLang === 'de' ? `Frage ${currentQuestionIndex + 1} von ${questions.length}` :
                       `Domanda ${currentQuestionIndex + 1} di ${questions.length}`;
    document.getElementById('question-counter').textContent = counterText;
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
}

function nextQuestion() {
    const t = translations[currentLang];
    // Check if current question is answered
    if (!answers[questions[currentQuestionIndex].id]) {
        alert(t.answerRequired);
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
                } else if (q.category === 'small-community' && answer === 'yes' && uni.size === 'small') {
                    score += 8;
                } else if (q.category === 'small-community' && answer === 'no' && uni.size === 'large') {
                    score += 6;
                } else if (q.category === 'languages' && answer === 'yes' && uni.strengths.includes('languages')) {
                    score += 8;
                } else if (q.category === 'interdisciplinary' && answer === 'yes' && uni.strengths.includes('diverse')) {
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
        
        const q26 = answers[26]; // City atmosphere
        if (q26) {
            maxScore += 10;
            if (q26 === 'cosmopolitan' && uni.environment === 'urban' && uni.size === 'large') score += 9;
            else if (q26 === 'historic' && uni.strengths.includes('tradition')) score += 9;
            else if (q26 === 'modern' && uni.strengths.includes('innovation')) score += 9;
            else if (q26 === 'nature' && uni.environment === 'small-town') score += 9;
        }
        
        const q31 = answers[31]; // University life priorities
        if (q31) {
            maxScore += 10;
            if (q31 === 'academic' && uni.strengths.includes('prestigious')) score += 9;
            else if (q31 === 'networking' && uni.strengths.includes('practical')) score += 8;
            else if (q31 === 'lifestyle' && uni.environment === 'urban') score += 7;
            else if (q31 === 'research' && uni.strengths.includes('research')) score += 9;
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
    
    // Update restart button text
    document.getElementById('restart-text').textContent = translations[currentLang].restartText;
    
    // Fill in top match
    document.getElementById('uni-1-name').textContent = top.university.name;
    document.getElementById('uni-1-location').textContent = top.university.location;
    document.getElementById('uni-1-description').textContent = top.university.description;
    document.getElementById('uni-1-score').textContent = top.score + '%';
    document.getElementById('uni-1-score-bar').style.width = top.score + '%';
    
    // Fill in second match
    document.getElementById('uni-2-name').textContent = second.university.name;
    document.getElementById('uni-2-location').textContent = second.university.location;
    document.getElementById('uni-2-description').textContent = second.university.description;
    document.getElementById('uni-2-score').textContent = second.score + '%';
    document.getElementById('uni-2-score-bar').style.width = second.score + '%';
    
    // Fill in nearest option
    document.getElementById('uni-nearby-name').textContent = nearest.university.name;
    document.getElementById('uni-nearby-location').textContent = nearest.university.location;
    document.getElementById('uni-nearby-description').textContent = nearest.university.description;
}

function restartQuiz() {
    // Reset state
    currentQuestionIndex = 0;
    answers = {};
    
    // Show language screen
    document.getElementById('results-screen').classList.remove('active');
    document.getElementById('language-screen').classList.add('active');
}
