// 80+ Universities with career paths
const universities = [
    // ITALY - 20 Universities
    { name: "Politecnico di Milano", country: "Italy", location: "Milan, Italy", description: "Leading technical university specializing in engineering, architecture, and design with strong innovation focus.", strengths: ["engineering", "technology", "design", "practical", "innovation", "architecture"], size: "large", environment: "urban", careers: ["engineering", "technology", "design", "architecture"] },
    { name: "University of Bologna", country: "Italy", location: "Bologna, Italy", description: "The oldest university in the world, offering comprehensive programs across humanities, sciences, and law.", strengths: ["humanities", "law", "history", "theoretical", "tradition", "diverse"], size: "large", environment: "urban", careers: ["law", "humanities", "sciences"] },
    { name: "Sapienza University of Rome", country: "Italy", location: "Rome, Italy", description: "One of Europe's largest universities with extensive programs in arts, sciences, and archaeology.", strengths: ["diverse", "arts", "sciences", "social", "history", "culture"], size: "large", environment: "urban", careers: ["sciences", "arts", "social", "humanities"] },
    { name: "University of Padua", country: "Italy", location: "Padua, Italy", description: "Historic university with strong emphasis on scientific research, medicine, and natural sciences.", strengths: ["sciences", "medicine", "research", "theoretical", "tradition"], size: "medium", environment: "small-town", careers: ["medicine", "sciences"] },
    { name: "Bocconi University", country: "Italy", location: "Milan, Italy", description: "Premier institution for economics, management, and finance with strong international connections.", strengths: ["business", "economics", "finance", "practical", "international"], size: "medium", environment: "urban", careers: ["business", "economics", "finance"] },
    { name: "Politecnico di Torino", country: "Italy", location: "Turin, Italy", description: "Technical university excelling in engineering, technology, and automotive design.", strengths: ["engineering", "technology", "practical", "innovation"], size: "large", environment: "urban", careers: ["engineering", "technology"] },
    { name: "University of Milan", country: "Italy", location: "Milan, Italy", description: "Major university with strong programs in sciences, medicine, and humanities.", strengths: ["sciences", "medicine", "humanities", "research", "diverse"], size: "large", environment: "urban", careers: ["medicine", "sciences", "humanities"] },
    { name: "University of Pisa", country: "Italy", location: "Pisa, Italy", description: "Renowned for sciences, mathematics, and computer science with historical significance.", strengths: ["sciences", "mathematics", "technology", "research", "tradition"], size: "medium", environment: "small-town", careers: ["sciences", "technology"] },
    { name: "University of Florence", country: "Italy", location: "Florence, Italy", description: "Excellence in arts, humanities, architecture, and cultural studies in Renaissance city.", strengths: ["arts", "humanities", "architecture", "culture", "history", "design"], size: "medium", environment: "urban", careers: ["arts", "architecture", "humanities", "design"] },
    { name: "Ca' Foscari University of Venice", country: "Italy", location: "Venice, Italy", description: "Specializing in economics, languages, international relations, and cultural heritage.", strengths: ["economics", "international", "culture", "arts"], size: "medium", environment: "urban", careers: ["economics", "international", "arts"] },
    { name: "University of Naples Federico II", country: "Italy", location: "Naples, Italy", description: "One of the oldest public universities with strong engineering and sciences programs.", strengths: ["engineering", "sciences", "tradition", "diverse", "research"], size: "large", environment: "urban", careers: ["engineering", "sciences"] },
    { name: "University of Trento", country: "Italy", location: "Trento, Italy", description: "Modern university focusing on sciences, technology, and social sciences in Alpine setting.", strengths: ["sciences", "technology", "social", "research", "nature"], size: "medium", environment: "small-town", careers: ["sciences", "technology", "social"] },
    { name: "Scuola Normale Superiore di Pisa", country: "Italy", location: "Pisa, Italy", description: "Elite institution for humanities and sciences with highly selective admission.", strengths: ["humanities", "sciences", "research", "prestigious", "theoretical"], size: "small", environment: "small-town", careers: ["humanities", "sciences"] },
    { name: "Luiss University Rome", country: "Italy", location: "Rome, Italy", description: "Private university specializing in business, economics, law, and political science.", strengths: ["business", "economics", "law", "social", "practical"], size: "medium", environment: "urban", careers: ["business", "law", "economics"] },
    { name: "University of Genoa", country: "Italy", location: "Genoa, Italy", description: "Comprehensive university with strong maritime, engineering, and medical programs.", strengths: ["engineering", "medicine", "sciences", "diverse"], size: "large", environment: "urban", careers: ["engineering", "medicine", "sciences"] },
    { name: "University of Turin", country: "Italy", location: "Turin, Italy", description: "Major research university with diverse programs in sciences, humanities, and law.", strengths: ["sciences", "humanities", "law", "research", "diverse"], size: "large", environment: "urban", careers: ["sciences", "humanities", "law"] },
    { name: "University of Verona", country: "Italy", location: "Verona, Italy", description: "Growing university with strong programs in economics, medicine, and humanities.", strengths: ["economics", "medicine", "humanities", "practical"], size: "medium", environment: "urban", careers: ["economics", "medicine", "humanities"] },
    { name: "University of Siena", country: "Italy", location: "Siena, Italy", description: "Historic university known for economics, law, and medicine in medieval city.", strengths: ["economics", "law", "medicine", "tradition", "culture"], size: "medium", environment: "small-town", careers: ["economics", "law", "medicine"] },
    { name: "University of Perugia", country: "Italy", location: "Perugia, Italy", description: "Ancient university with strengths in humanities, sciences, and international programs.", strengths: ["humanities", "sciences", "international", "tradition"], size: "medium", environment: "small-town", careers: ["humanities", "sciences", "international"] },
    { name: "Università Cattolica del Sacro Cuore", country: "Italy", location: "Milan, Italy", description: "Leading Catholic university with comprehensive programs in medicine, economics, and social sciences.", strengths: ["medicine", "economics", "social", "humanities"], size: "large", environment: "urban", careers: ["medicine", "economics", "social"] },

    // AUSTRIA - 20 Universities
    { name: "University of Vienna", country: "Austria", location: "Vienna, Austria", description: "Austria's largest university offering comprehensive programs with strong research focus.", strengths: ["humanities", "sciences", "social", "research", "diverse", "culture"], size: "large", environment: "urban", careers: ["humanities", "sciences", "social"] },
    { name: "Vienna University of Technology (TU Wien)", country: "Austria", location: "Vienna, Austria", description: "Leading technical university specializing in engineering and natural sciences.", strengths: ["engineering", "technology", "research", "innovation", "practical"], size: "large", environment: "urban", careers: ["engineering", "technology"] },
    { name: "University of Innsbruck", country: "Austria", location: "Innsbruck, Austria", description: "Comprehensive university in the Alps with strong natural sciences and sports programs.", strengths: ["sciences", "nature", "research", "environment"], size: "medium", environment: "small-town", careers: ["sciences", "environment"] },
    { name: "WU Vienna University of Economics and Business", country: "Austria", location: "Vienna, Austria", description: "Europe's largest business university specializing in economics and social sciences.", strengths: ["business", "economics", "social", "international", "practical"], size: "large", environment: "urban", careers: ["business", "economics", "finance"] },
    { name: "University of Graz", country: "Austria", location: "Graz, Austria", description: "Historic university with strength in environmental sciences and social studies.", strengths: ["sciences", "environment", "social", "diverse", "research"], size: "medium", environment: "urban", careers: ["sciences", "environment", "social"] },
    { name: "Graz University of Technology", country: "Austria", location: "Graz, Austria", description: "Technical university focusing on engineering, IT, and sustainable technologies.", strengths: ["engineering", "technology", "environment", "innovation", "practical"], size: "medium", environment: "urban", careers: ["engineering", "technology", "environment"] },
    { name: "University of Salzburg", country: "Austria", location: "Salzburg, Austria", description: "University known for law, humanities, and natural sciences in Mozart's birthplace.", strengths: ["law", "humanities", "sciences", "culture", "tradition"], size: "medium", environment: "urban", careers: ["law", "humanities", "sciences"] },
    { name: "Medical University of Vienna", country: "Austria", location: "Vienna, Austria", description: "Largest medical school in German-speaking countries with cutting-edge research.", strengths: ["medicine", "research", "sciences", "innovation"], size: "large", environment: "urban", careers: ["medicine"] },
    { name: "University of Linz (JKU)", country: "Austria", location: "Linz, Austria", description: "Modern university with strong law, social sciences, and technology programs.", strengths: ["law", "social", "technology", "business", "practical"], size: "medium", environment: "urban", careers: ["law", "technology", "business"] },
    { name: "Vienna University of Applied Arts", country: "Austria", location: "Vienna, Austria", description: "Premier art and design university focusing on creative disciplines.", strengths: ["arts", "design", "architecture", "culture"], size: "small", environment: "urban", careers: ["arts", "design", "architecture"] },
    { name: "University of Klagenfurt", country: "Austria", location: "Klagenfurt, Austria", description: "University specializing in media, technology, and interdisciplinary studies.", strengths: ["media", "technology", "social"], size: "small", environment: "small-town", careers: ["media", "technology", "social"] },
    { name: "Medical University of Graz", country: "Austria", location: "Graz, Austria", description: "Medical university with excellent research facilities and clinical programs.", strengths: ["medicine", "research", "sciences"], size: "medium", environment: "urban", careers: ["medicine"] },
    { name: "University of Applied Sciences Technikum Wien", country: "Austria", location: "Vienna, Austria", description: "Practical-oriented university focusing on engineering and IT applications.", strengths: ["engineering", "technology", "practical", "innovation"], size: "medium", environment: "urban", careers: ["engineering", "technology"] },
    { name: "MCI Management Center Innsbruck", country: "Austria", location: "Innsbruck, Austria", description: "International business school in the Alps with entrepreneurial focus.", strengths: ["business", "international", "practical"], size: "small", environment: "small-town", careers: ["business", "economics"] },
    { name: "University of Natural Resources and Life Sciences Vienna", country: "Austria", location: "Vienna, Austria", description: "Specialized in sustainability, agriculture, and environmental sciences.", strengths: ["environment", "sciences", "nature"], size: "medium", environment: "urban", careers: ["environment", "sciences"] },
    { name: "University of Applied Sciences Upper Austria", country: "Austria", location: "Linz, Austria", description: "Largest university of applied sciences with engineering and business focus.", strengths: ["engineering", "business", "technology", "practical"], size: "large", environment: "urban", careers: ["engineering", "business", "technology"] },
    { name: "FH Wien University of Applied Sciences for Management & Communication", country: "Austria", location: "Vienna, Austria", description: "Focuses on media, communication, and business management.", strengths: ["media", "business", "practical"], size: "medium", environment: "urban", careers: ["media", "business"] },
    { name: "Medical University of Innsbruck", country: "Austria", location: "Innsbruck, Austria", description: "Medical university with focus on alpine medicine and research.", strengths: ["medicine", "research", "sciences"], size: "medium", environment: "small-town", careers: ["medicine"] },
    { name: "Mozarteum University Salzburg", country: "Austria", location: "Salzburg, Austria", description: "University for music and dramatic arts in Mozart's hometown.", strengths: ["arts", "culture"], size: "small", environment: "urban", careers: ["arts"] },
    { name: "University of Veterinary Medicine Vienna", country: "Austria", location: "Vienna, Austria", description: "Specialized veterinary university with strong research programs.", strengths: ["sciences", "medicine", "research"], size: "small", environment: "urban", careers: ["medicine", "sciences"] },

    // SWITZERLAND - 20 Universities
    { name: "ETH Zurich", country: "Switzerland", location: "Zurich, Switzerland", description: "World-renowned technical university known for excellence in STEM fields.", strengths: ["engineering", "technology", "sciences", "research", "innovation", "prestigious"], size: "medium", environment: "urban", careers: ["engineering", "technology", "sciences"] },
    { name: "University of Zurich", country: "Switzerland", location: "Zurich, Switzerland", description: "Largest Swiss university with comprehensive programs across all disciplines.", strengths: ["sciences", "medicine", "humanities", "research", "diverse"], size: "large", environment: "urban", careers: ["sciences", "medicine", "humanities"] },
    { name: "EPFL (École Polytechnique Fédérale de Lausanne)", country: "Switzerland", location: "Lausanne, Switzerland", description: "Elite technical university specializing in engineering and cutting-edge technology.", strengths: ["engineering", "technology", "innovation", "research", "sciences"], size: "medium", environment: "urban", careers: ["engineering", "technology", "sciences"] },
    { name: "University of Geneva", country: "Switzerland", location: "Geneva, Switzerland", description: "International university strong in international relations, law, and sciences.", strengths: ["international", "law", "sciences", "humanities"], size: "large", environment: "urban", careers: ["international", "law", "sciences"] },
    { name: "University of Bern", country: "Switzerland", location: "Bern, Switzerland", description: "Comprehensive university in Swiss capital with strong sciences and medicine.", strengths: ["sciences", "medicine", "social", "research", "diverse"], size: "medium", environment: "urban", careers: ["sciences", "medicine", "social"] },
    { name: "University of Basel", country: "Switzerland", location: "Basel, Switzerland", description: "Switzerland's oldest university excelling in life sciences and humanities.", strengths: ["sciences", "medicine", "humanities", "research", "tradition"], size: "medium", environment: "urban", careers: ["sciences", "medicine", "humanities"] },
    { name: "University of Lausanne", country: "Switzerland", location: "Lausanne, Switzerland", description: "Research university with strong programs in sciences, humanities, and law.", strengths: ["sciences", "humanities", "law", "research", "social"], size: "medium", environment: "urban", careers: ["sciences", "law", "humanities"] },
    { name: "University of St. Gallen (HSG)", country: "Switzerland", location: "St. Gallen, Switzerland", description: "Top-ranked business university specializing in economics and management.", strengths: ["business", "economics", "international", "practical"], size: "small", environment: "small-town", careers: ["business", "economics", "finance"] },
    { name: "University of Fribourg", country: "Switzerland", location: "Fribourg, Switzerland", description: "Bilingual university strong in law, humanities, and social sciences.", strengths: ["law", "humanities", "social", "tradition"], size: "small", environment: "small-town", careers: ["law", "humanities", "social"] },
    { name: "Università della Svizzera italiana", country: "Switzerland", location: "Lugano, Switzerland", description: "Italian-speaking university focusing on architecture, communication, and informatics.", strengths: ["architecture", "technology"], size: "small", environment: "urban", careers: ["architecture", "technology"] },
    { name: "University of Neuchâtel", country: "Switzerland", location: "Neuchâtel, Switzerland", description: "Francophone university known for sciences, humanities, and law programs.", strengths: ["sciences", "humanities", "law", "research"], size: "small", environment: "small-town", careers: ["sciences", "humanities", "law"] },
    { name: "Zurich University of the Arts", country: "Switzerland", location: "Zurich, Switzerland", description: "Leading arts university for design, film, music, and fine arts.", strengths: ["arts", "design", "media", "culture"], size: "small", environment: "urban", careers: ["arts", "design", "media"] },
    { name: "University of Lucerne", country: "Switzerland", location: "Lucerne, Switzerland", description: "Young university with strengths in law, theology, and social sciences.", strengths: ["law", "social", "humanities"], size: "small", environment: "small-town", careers: ["law", "social", "humanities"] },
    { name: "Geneva School of Economics and Management", country: "Switzerland", location: "Geneva, Switzerland", description: "Business school within University of Geneva with international focus.", strengths: ["business", "economics", "international", "finance"], size: "medium", environment: "urban", careers: ["business", "economics", "finance"] },
    { name: "Franklin University Switzerland", country: "Switzerland", location: "Lugano, Switzerland", description: "American-style liberal arts university with international perspective.", strengths: ["humanities", "social", "international"], size: "small", environment: "urban", careers: ["humanities", "social", "international"] },
    { name: "Zurich University of Applied Sciences", country: "Switzerland", location: "Zurich, Switzerland", description: "Large university of applied sciences with engineering and business programs.", strengths: ["engineering", "business", "technology", "practical"], size: "large", environment: "urban", careers: ["engineering", "business", "technology"] },
    { name: "HEC Lausanne", country: "Switzerland", location: "Lausanne, Switzerland", description: "Business school of University of Lausanne specializing in management and economics.", strengths: ["business", "economics", "finance"], size: "medium", environment: "urban", careers: ["business", "economics", "finance"] },
    { name: "University of Applied Sciences and Arts Northwestern Switzerland", country: "Switzerland", location: "Basel, Switzerland", description: "Applied sciences university with practical programs in engineering and arts.", strengths: ["engineering", "arts", "practical"], size: "large", environment: "urban", careers: ["engineering", "arts"] },
    { name: "Lausanne Hotel School (EHL)", country: "Switzerland", location: "Lausanne, Switzerland", description: "World's first hospitality management school with excellent industry connections.", strengths: ["business", "practical", "international"], size: "small", environment: "urban", careers: ["business"] },
    { name: "Swiss Federal Institute of Aquatic Science and Technology", country: "Switzerland", location: "Dübendorf, Switzerland", description: "Research institute focusing on water resources and environmental sciences.", strengths: ["environment", "sciences", "research"], size: "small", environment: "urban", careers: ["environment", "sciences"] },

    // GERMANY - 25 Universities
    { name: "Technical University of Munich (TUM)", country: "Germany", location: "Munich, Germany", description: "Germany's top technical university excelling in engineering and entrepreneurship.", strengths: ["engineering", "technology", "sciences", "innovation", "research", "practical"], size: "large", environment: "urban", careers: ["engineering", "technology", "sciences"] },
    { name: "Ludwig Maximilian University of Munich (LMU)", country: "Germany", location: "Munich, Germany", description: "One of Europe's premier universities with comprehensive programs.", strengths: ["humanities", "sciences", "medicine", "research", "diverse", "prestigious"], size: "large", environment: "urban", careers: ["humanities", "sciences", "medicine"] },
    { name: "Heidelberg University", country: "Germany", location: "Heidelberg, Germany", description: "Germany's oldest university with exceptional humanities and sciences programs.", strengths: ["humanities", "sciences", "medicine", "research", "tradition", "culture"], size: "large", environment: "small-town", careers: ["humanities", "sciences", "medicine"] },
    { name: "RWTH Aachen University", country: "Germany", location: "Aachen, Germany", description: "Leading technical university with strong industry partnerships.", strengths: ["engineering", "technology", "practical", "innovation", "research"], size: "large", environment: "urban", careers: ["engineering", "technology"] },
    { name: "Humboldt University of Berlin", country: "Germany", location: "Berlin, Germany", description: "Historic university in capital with strengths in humanities and social sciences.", strengths: ["humanities", "social", "arts", "culture", "diverse"], size: "large", environment: "urban", careers: ["humanities", "social", "arts"] },
    { name: "University of Freiburg", country: "Germany", location: "Freiburg, Germany", description: "Traditional university known for environmental sciences and humanities.", strengths: ["environment", "sciences", "humanities", "nature", "research"], size: "medium", environment: "small-town", careers: ["environment", "sciences", "humanities"] },
    { name: "Free University of Berlin", country: "Germany", location: "Berlin, Germany", description: "Research university with strengths in humanities and international studies.", strengths: ["humanities", "social", "international", "research", "culture"], size: "large", environment: "urban", careers: ["humanities", "social", "international"] },
    { name: "University of Mannheim", country: "Germany", location: "Mannheim, Germany", description: "Premier business university specializing in economics and social sciences.", strengths: ["business", "economics", "social", "practical", "international"], size: "medium", environment: "urban", careers: ["business", "economics", "finance"] },
    { name: "University of Tübingen", country: "Germany", location: "Tübingen, Germany", description: "Historic university excelling in humanities, theology, and life sciences.", strengths: ["humanities", "sciences", "medicine", "tradition", "research"], size: "medium", environment: "small-town", careers: ["humanities", "sciences", "medicine"] },
    { name: "Karlsruhe Institute of Technology (KIT)", country: "Germany", location: "Karlsruhe, Germany", description: "Technical university merging research and education in engineering and sciences.", strengths: ["engineering", "technology", "sciences", "research", "innovation"], size: "large", environment: "urban", careers: ["engineering", "technology", "sciences"] },
    { name: "University of Göttingen", country: "Germany", location: "Göttingen, Germany", description: "Traditional university strong in sciences, humanities, and social sciences.", strengths: ["sciences", "humanities", "social", "research", "tradition"], size: "medium", environment: "small-town", careers: ["sciences", "humanities", "social"] },
    { name: "Technical University of Berlin", country: "Germany", location: "Berlin, Germany", description: "Large technical university in capital focusing on engineering and technology.", strengths: ["engineering", "technology", "innovation", "diverse"], size: "large", environment: "urban", careers: ["engineering", "technology"] },
    { name: "University of Cologne", country: "Germany", location: "Cologne, Germany", description: "One of largest German universities with strong humanities and social sciences.", strengths: ["humanities", "social", "business", "diverse", "culture"], size: "large", environment: "urban", careers: ["humanities", "social", "business"] },
    { name: "University of Hamburg", country: "Germany", location: "Hamburg, Germany", description: "Comprehensive university in maritime city with diverse programs.", strengths: ["sciences", "humanities", "social", "diverse", "research"], size: "large", environment: "urban", careers: ["sciences", "humanities", "social"] },
    { name: "University of Bonn", country: "Germany", location: "Bonn, Germany", description: "Research university with excellence in sciences, mathematics, and humanities.", strengths: ["sciences", "humanities", "research", "tradition"], size: "large", environment: "urban", careers: ["sciences", "humanities"] },
    { name: "Technical University of Dresden", country: "Germany", location: "Dresden, Germany", description: "Large technical university with comprehensive engineering programs.", strengths: ["engineering", "technology", "sciences", "research", "innovation"], size: "large", environment: "urban", careers: ["engineering", "technology", "sciences"] },
    { name: "University of Frankfurt", country: "Germany", location: "Frankfurt, Germany", description: "Major research university strong in finance, law, and social sciences.", strengths: ["finance", "law", "social", "business", "research"], size: "large", environment: "urban", careers: ["finance", "law", "business"] },
    { name: "University of Stuttgart", country: "Germany", location: "Stuttgart, Germany", description: "Technical university known for engineering, especially automotive technology.", strengths: ["engineering", "technology", "practical", "innovation"], size: "large", environment: "urban", careers: ["engineering", "technology"] },
    { name: "University of Leipzig", country: "Germany", location: "Leipzig, Germany", description: "One of oldest German universities with strong humanities and sciences.", strengths: ["humanities", "sciences", "medicine", "tradition", "culture"], size: "large", environment: "urban", careers: ["humanities", "sciences", "medicine"] },
    { name: "WHU - Otto Beisheim School of Management", country: "Germany", location: "Vallendar, Germany", description: "Top German business school with focus on entrepreneurship and management.", strengths: ["business", "finance", "international", "practical"], size: "small", environment: "small-town", careers: ["business", "finance", "economics"] },
    { name: "University of Münster", country: "Germany", location: "Münster, Germany", description: "Large university with strong law, business, and sciences programs.", strengths: ["law", "business", "sciences", "research"], size: "large", environment: "urban", careers: ["law", "business", "sciences"] },
    { name: "University of Würzburg", country: "Germany", location: "Würzburg, Germany", description: "Traditional university with strengths in sciences, medicine, and humanities.", strengths: ["sciences", "medicine", "humanities", "research"], size: "medium", environment: "small-town", careers: ["sciences", "medicine", "humanities"] },
    { name: "University of Erlangen-Nuremberg", country: "Germany", location: "Erlangen, Germany", description: "Research university with strong engineering and medical programs.", strengths: ["engineering", "medicine", "sciences", "research"], size: "large", environment: "urban", careers: ["engineering", "medicine", "sciences"] },
    { name: "TU Dortmund University", country: "Germany", location: "Dortmund, Germany", description: "Technical university with focus on engineering and natural sciences.", strengths: ["engineering", "technology", "sciences"], size: "large", environment: "urban", careers: ["engineering", "technology", "sciences"] },
    { name: "University of Regensburg", country: "Germany", location: "Regensburg, Germany", description: "Young university with growing reputation in sciences and business.", strengths: ["sciences", "business", "law"], size: "medium", environment: "small-town", careers: ["sciences", "business", "law"] }
];
// Translations
const translations = {
    en: {
        // Intro page
        introTitle: "Discover Your Academic Future",
        introSubtitle: "An intelligent university recommendation system designed by students, for students",
        introDesc1: "Welcome! We are students from Kaiserhof, and this is our Matura Project for 2027. We've created this comprehensive assessment tool to help you discover the perfect university match across Central Europe.",
        introDesc2: "Our quiz analyzes your interests, learning style, and career aspirations to recommend universities in Italy, Austria, Switzerland, and Germany that truly align with who you are.",
        feature1Title: "35 Smart Questions",
        feature1Text: "Personalized assessment",
        feature2Title: "80+ Universities",
        feature2Text: "Comprehensive database",
        feature3Title: "Career Insights",
        feature3Text: "Future job opportunities",
        introBtn: "Find Your Perfect University",
        
        // Welcome page
        welcomeTitle: "University Recommendation Quiz",
        welcomeSubtitle: "Discover Your Perfect Academic Path",
        infoCard1Title: "35 Questions",
        infoCard1Text: "Comprehensive assessment for accurate results",
        infoCard2Title: "80+ Universities",
        infoCard2Text: "From Italy, Austria, Switzerland, and Germany",
        infoCard3Title: "Career Insights",
        infoCard3Text: "Discover potential job opportunities",
        welcomeDescription: "This comprehensive assessment analyzes your academic interests, learning preferences, and career aspirations to recommend the best universities for your unique profile.",
        startBtn: "Begin Assessment",
        changeLangBtn: "Change Language",
        backText: "Back",
        prevText: "Previous",
        nextText: "Next",
        seeResultsText: "See Results",
        
        // Results page
        resultsTitle: "Your University Recommendations",
        resultsSubtitle: "Based on your unique profile and preferences",
        topMatchBadge: "Perfect Match",
        secondMatchBadge: "Excellent Alternative",
        nearestBadge: "Close to Home",
        careerTitle: "💼 Potential Career Paths",
        restartText: "Retake Assessment",
        answerRequired: "Please answer the current question before proceeding.",
        ratingNotAtAll: "Not at all",
        ratingExtremely: "Extremely"
    },
    de: {
        introTitle: "Entdecke deine akademische Zukunft",
        introSubtitle: "Ein intelligentes Universitätsempfehlungssystem, von Studenten für Studenten entwickelt",
        introDesc1: "Willkommen! Wir sind Studenten vom Kaiserhof, und dies ist unser Matura-Projekt für 2025. Wir haben dieses umfassende Bewertungstool erstellt, um dir zu helfen, die perfekte Universität in Mitteleuropa zu finden.",
        introDesc2: "Unser Quiz analysiert deine Interessen, Lernstil und Karriereziele, um Universitäten in Italien, Österreich, der Schweiz und Deutschland zu empfehlen, die wirklich zu dir passen.",
        feature1Title: "35 Smarte Fragen",
        feature1Text: "Personalisierte Bewertung",
        feature2Title: "80+ Universitäten",
        feature2Text: "Umfassende Datenbank",
        feature3Title: "Karriere-Einblicke",
        feature3Text: "Zukünftige Jobmöglichkeiten",
        introBtn: "Finde deine perfekte Universität",
        
        welcomeTitle: "Universitätsempfehlungs-Quiz",
        welcomeSubtitle: "Entdecke deinen perfekten akademischen Weg",
        infoCard1Title: "35 Fragen",
        infoCard1Text: "Umfassende Bewertung für genaue Ergebnisse",
        infoCard2Title: "80+ Universitäten",
        infoCard2Text: "Aus Italien, Österreich, der Schweiz und Deutschland",
        infoCard3Title: "Karriere-Einblicke",
        infoCard3Text: "Entdecke potenzielle Jobmöglichkeiten",
        welcomeDescription: "Diese umfassende Bewertung analysiert deine akademischen Interessen, Lernpräferenzen und Karriereziele, um die besten Universitäten für dein einzigartiges Profil zu empfehlen.",
        startBtn: "Bewertung starten",
        changeLangBtn: "Sprache ändern",
        backText: "Zurück",
        prevText: "Vorherige",
        nextText: "Weiter",
        seeResultsText: "Ergebnisse anzeigen",
        
        resultsTitle: "Deine Universitätsempfehlungen",
        resultsSubtitle: "Basierend auf deinem einzigartigen Profil und deinen Präferenzen",
        topMatchBadge: "Perfekte Übereinstimmung",
        secondMatchBadge: "Ausgezeichnete Alternative",
        nearestBadge: "In deiner Nähe",
        careerTitle: "💼 Mögliche Karrierewege",
        restartText: "Bewertung wiederholen",
        answerRequired: "Bitte beantworte die aktuelle Frage, bevor du fortfährst.",
        ratingNotAtAll: "Überhaupt nicht",
        ratingExtremely: "Äußerst"
    },
    it: {
        introTitle: "Scopri il tuo futuro accademico",
        introSubtitle: "Un sistema intelligente di raccomandazione universitaria progettato da studenti, per studenti",
        introDesc1: "Benvenuto! Siamo studenti di Kaiserhof, e questo è il nostro progetto Matura per il 2025. Abbiamo creato questo strumento di valutazione completo per aiutarti a scoprire l'università perfetta in Europa centrale.",
        introDesc2: "Il nostro quiz analizza i tuoi interessi, stile di apprendimento e aspirazioni di carriera per raccomandare università in Italia, Austria, Svizzera e Germania che si allineano davvero con chi sei.",
        feature1Title: "35 Domande Intelligenti",
        feature1Text: "Valutazione personalizzata",
        feature2Title: "80+ Università",
        feature2Text: "Database completo",
        feature3Title: "Approfondimenti di Carriera",
        feature3Text: "Opportunità di lavoro future",
        introBtn: "Trova la tua università perfetta",
        
        welcomeTitle: "Quiz di Raccomandazione Universitaria",
        welcomeSubtitle: "Scopri il tuo percorso accademico perfetto",
        infoCard1Title: "35 Domande",
        infoCard1Text: "Valutazione completa per risultati accurati",
        infoCard2Title: "80+ Università",
        infoCard2Text: "Da Italia, Austria, Svizzera e Germania",
        infoCard3Title: "Approfondimenti di Carriera",
        infoCard3Text: "Scopri opportunità di lavoro potenziali",
        welcomeDescription: "Questa valutazione completa analizza i tuoi interessi accademici, le preferenze di apprendimento e le aspirazioni di carriera per raccomandare le migliori università per il tuo profilo unico.",
        startBtn: "Inizia la valutazione",
        changeLangBtn: "Cambia lingua",
        backText: "Indietro",
        prevText: "Precedente",
        nextText: "Avanti",
        seeResultsText: "Vedi risultati",
        
        resultsTitle: "Le tue raccomandazioni universitarie",
        resultsSubtitle: "Basate sul tuo profilo unico e sulle tue preferenze",
        topMatchBadge: "Abbinamento perfetto",
        secondMatchBadge: "Ottima alternativa",
        nearestBadge: "Vicino a casa",
        careerTitle: "💼 Potenziali percorsi di carriera",
        restartText: "Ripeti la valutazione",
        answerRequired: "Per favore rispondi alla domanda attuale prima di procedere.",
        ratingNotAtAll: "Per niente",
        ratingExtremely: "Estremamente"
    }
};

// Career paths database
const careerPaths = {
    engineering: ["Software Engineer", "Mechanical Engineer", "Civil Engineer", "Electrical Engineer", "Robotics Engineer", "Systems Engineer"],
    technology: ["Data Scientist", "AI Specialist", "Cybersecurity Analyst", "Cloud Architect", "DevOps Engineer", "Tech Consultant"],
    sciences: ["Research Scientist", "Laboratory Manager", "Pharmaceutical Researcher", "Environmental Consultant", "Biotechnologist", "Quality Analyst"],
    medicine: ["Medical Doctor", "Surgeon", "Researcher", "Public Health Specialist", "Medical Consultant", "Healthcare Administrator"],
    business: ["Management Consultant", "Business Analyst", "Project Manager", "Marketing Manager", "HR Director", "Operations Manager"],
    economics: ["Economist", "Financial Analyst", "Investment Banker", "Economic Researcher", "Policy Advisor", "Business Economist"],
    finance: ["Financial Planner", "Portfolio Manager", "Risk Analyst", "Actuary", "Investment Advisor", "Corporate Finance Manager"],
    law: ["Lawyer", "Legal Consultant", "Judge", "Corporate Counsel", "Human Rights Advocate", "Legal Researcher"],
    humanities: ["University Professor", "Historian", "Philosopher", "Cultural Researcher", "Writer", "Museum Curator"],
    arts: ["Art Director", "Gallery Manager", "Arts Administrator", "Cultural Program Coordinator", "Art Critic", "Creative Director"],
    design: ["UX/UI Designer", "Product Designer", "Graphic Designer", "Industrial Designer", "Design Researcher", "Brand Designer"],
    architecture: ["Architect", "Urban Planner", "Landscape Architect", "Interior Designer", "Architectural Consultant", "Sustainability Advisor"],
    social: ["Social Worker", "Policy Analyst", "Community Developer", "NGO Manager", "Sociologist", "Political Consultant"],
    international: ["Diplomat", "International Relations Specialist", "Development Worker", "International Business Manager", "UN Official", "Global Policy Advisor"],
    media: ["Journalist", "Content Creator", "Media Producer", "Communications Manager", "PR Specialist", "Digital Marketing Manager"],
    environment: ["Environmental Scientist", "Sustainability Consultant", "Conservation Manager", "Climate Analyst", "Renewable Energy Specialist", "Environmental Policy Advisor"]
};

// Current language
let currentLang = 'en';
const questionsData = {
    en: [
        { id: 1, type: "country", question: "Which country would you prefer to study in?", options: [
            { value: "Italy", label: "Italy 🇮🇹" },
            { value: "Austria", label: "Austria 🇦🇹" },
            { value: "Switzerland", label: "Switzerland 🇨🇭" },
            { value: "Germany", label: "Germany 🇩🇪" }
        ]},
        { id: 2, type: "rating", question: "How interested are you in engineering and technology?", category: "engineering" },
        { id: 3, type: "rating", question: "How much do you enjoy humanities subjects (literature, history, philosophy)?", category: "humanities" },
        { id: 4, type: "rating", question: "How interested are you in natural sciences (biology, chemistry, physics)?", category: "sciences" },
        { id: 5, type: "multiple", question: "What type of university environment do you prefer?", options: [
            { value: "large-urban", label: "Large university in a major city" },
            { value: "medium-urban", label: "Medium-sized university in a city" },
            { value: "small-town", label: "University in a smaller, quieter town" },
            { value: "any", label: "I'm flexible about location" }
        ]},
        { id: 6, type: "rating", question: "How important is practical, hands-on learning to you?", category: "practical" },
        { id: 7, type: "rating", question: "How interested are you in business and economics?", category: "business" },
        { id: 8, type: "yes-no", question: "Do you prefer theoretical research over applied skills?", category: "theoretical" },
        { id: 9, type: "rating", question: "How much do you value innovation and cutting-edge technology?", category: "innovation" },
        { id: 10, type: "multiple", question: "Which area appeals to you most?", options: [
            { value: "stem", label: "Science, Technology, Engineering, Mathematics" },
            { value: "humanities", label: "Arts, Humanities, Languages" },
            { value: "business", label: "Business, Economics, Finance" },
            { value: "social", label: "Social Sciences, Law, Politics" }
        ]},
        { id: 11, type: "rating", question: "How interested are you in medicine and healthcare?", category: "medicine" },
        { id: 12, type: "yes-no", question: "Do you prefer a university with strong historical tradition?", category: "tradition" },
        { id: 13, type: "rating", question: "How important is international focus and diversity to you?", category: "international" },
        { id: 14, type: "rating", question: "How interested are you in environmental and sustainability topics?", category: "environment" },
        { id: 15, type: "multiple", question: "What kind of career path do you envision?", options: [
            { value: "research", label: "Academic research and innovation" },
            { value: "industry", label: "Industry and corporate career" },
            { value: "creative", label: "Creative and cultural fields" },
            { value: "public", label: "Public service or social impact" }
        ]},
        { id: 16, type: "rating", question: "How much do you enjoy design and creative work?", category: "design" },
        { id: 17, type: "yes-no", question: "Would you prefer a specialized university over a comprehensive one?", category: "specialized" },
        { id: 18, type: "rating", question: "How interested are you in law and legal studies?", category: "law" },
        { id: 19, type: "rating", question: "How important is proximity to nature and outdoor activities?", category: "nature" },
        { id: 20, type: "multiple", question: "What best describes your learning style?", options: [
            { value: "research-focused", label: "Deep research and theoretical exploration" },
            { value: "practical-focused", label: "Hands-on projects and practical applications" },
            { value: "balanced", label: "Balance of theory and practice" },
            { value: "collaborative", label: "Group work and collaborative learning" }
        ]},
        { id: 21, type: "rating", question: "How interested are you in architecture and urban planning?", category: "architecture" },
        { id: 22, type: "rating", question: "How much do you value cultural activities and arts scene?", category: "culture" },
        { id: 23, type: "yes-no", question: "Do you prefer a smaller, more intimate academic community?", category: "small-community" },
        { id: 24, type: "rating", question: "How interested are you in finance and banking?", category: "finance" },
        { id: 25, type: "rating", question: "How important is research excellence and academic reputation?", category: "research" },
        { id: 26, type: "multiple", question: "What type of city atmosphere appeals to you?", options: [
            { value: "cosmopolitan", label: "Large cosmopolitan city with international vibe" },
            { value: "historic", label: "Historic city with cultural heritage" },
            { value: "modern", label: "Modern, innovative tech hub" },
            { value: "nature", label: "City close to mountains/nature" }
        ]},
        { id: 27, type: "rating", question: "How interested are you in media and communication studies?", category: "media" },
        { id: 28, type: "yes-no", question: "Would you like to study in a bilingual or multilingual environment?", category: "languages" },
        { id: 29, type: "rating", question: "How interested are you in entrepreneurship and startups?", category: "entrepreneurship" },
        { id: 30, type: "rating", question: "How important is having strong connections to industry?", category: "industry-connections" },
        { id: 31, type: "multiple", question: "Which aspect of university life matters most to you?", options: [
            { value: "academic", label: "Academic excellence and rigorous programs" },
            { value: "networking", label: "Networking and career opportunities" },
            { value: "lifestyle", label: "Student lifestyle and city life" },
            { value: "research", label: "Research opportunities and facilities" }
        ]},
        { id: 32, type: "rating", question: "How interested are you in sports science or physical education?", category: "sports" },
        { id: 33, type: "rating", question: "How important is studying at a prestigious, world-renowned institution?", category: "prestigious" },
        { id: 34, type: "yes-no", question: "Do you prefer interdisciplinary studies over single-subject focus?", category: "interdisciplinary" },
        { id: 35, type: "rating", question: "How interested are you in mathematics and computational fields?", category: "mathematics" }
    ],
    de: [
        { id: 1, type: "country", question: "In welchem Land möchtest du bevorzugt studieren?", options: [
            { value: "Italy", label: "Italien 🇮🇹" },
            { value: "Austria", label: "Österreich 🇦🇹" },
            { value: "Switzerland", label: "Schweiz 🇨🇭" },
            { value: "Germany", label: "Deutschland 🇩🇪" }
        ]},
        { id: 2, type: "rating", question: "Wie sehr interessierst du dich für Ingenieurwesen und Technologie?", category: "engineering" },
        { id: 3, type: "rating", question: "Wie sehr magst du geisteswissenschaftliche Fächer (Literatur, Geschichte, Philosophie)?", category: "humanities" },
        { id: 4, type: "rating", question: "Wie sehr interessierst du dich für Naturwissenschaften (Biologie, Chemie, Physik)?", category: "sciences" },
        { id: 5, type: "multiple", question: "Welche Art von Universitätsumgebung bevorzugst du?", options: [
            { value: "large-urban", label: "Große Universität in einer Großstadt" },
            { value: "medium-urban", label: "Mittelgroße Universität in einer Stadt" },
            { value: "small-town", label: "Universität in einer kleineren, ruhigeren Stadt" },
            { value: "any", label: "Ich bin flexibel bezüglich des Standorts" }
        ]},
        { id: 6, type: "rating", question: "Wie wichtig ist dir praktisches, anwendungsorientiertes Lernen?", category: "practical" },
        { id: 7, type: "rating", question: "Wie sehr interessierst du dich für Betriebswirtschaft und Volkswirtschaft?", category: "business" },
        { id: 8, type: "yes-no", question: "Bevorzugst du theoretische Forschung gegenüber angewandten Fähigkeiten?", category: "theoretical" },
        { id: 9, type: "rating", question: "Wie wichtig sind dir Innovation und modernste Technologie?", category: "innovation" },
        { id: 10, type: "multiple", question: "Welcher Bereich spricht dich am meisten an?", options: [
            { value: "stem", label: "Wissenschaft, Technologie, Ingenieurwesen, Mathematik" },
            { value: "humanities", label: "Kunst, Geisteswissenschaften, Sprachen" },
            { value: "business", label: "Betriebswirtschaft, Volkswirtschaft, Finanzen" },
            { value: "social", label: "Sozialwissenschaften, Recht, Politik" }
        ]},
        { id: 11, type: "rating", question: "Wie sehr interessierst du dich für Medizin und Gesundheitswesen?", category: "medicine" },
        { id: 12, type: "yes-no", question: "Bevorzugst du eine Universität mit starker historischer Tradition?", category: "tradition" },
        { id: 13, type: "rating", question: "Wie wichtig sind dir internationale Ausrichtung und Vielfalt?", category: "international" },
        { id: 14, type: "rating", question: "Wie sehr interessierst du dich für Umwelt- und Nachhaltigkeitsthemen?", category: "environment" },
        { id: 15, type: "multiple", question: "Welchen Karriereweg stellst du dir vor?", options: [
            { value: "research", label: "Akademische Forschung und Innovation" },
            { value: "industry", label: "Industrie und Unternehmenskarriere" },
            { value: "creative", label: "Kreative und kulturelle Bereiche" },
            { value: "public", label: "Öffentlicher Dienst oder soziale Wirkung" }
        ]},
        { id: 16, type: "rating", question: "Wie sehr magst du Design und kreative Arbeit?", category: "design" },
        { id: 17, type: "yes-no", question: "Würdest du eine spezialisierte Universität einer umfassenden vorziehen?", category: "specialized" },
        { id: 18, type: "rating", question: "Wie sehr interessierst du dich für Recht und Rechtswissenschaften?", category: "law" },
        { id: 19, type: "rating", question: "Wie wichtig ist dir die Nähe zur Natur und Outdoor-Aktivitäten?", category: "nature" },
        { id: 20, type: "multiple", question: "Was beschreibt deinen Lernstil am besten?", options: [
            { value: "research-focused", label: "Tiefe Forschung und theoretische Exploration" },
            { value: "practical-focused", label: "Praktische Projekte und Anwendungen" },
            { value: "balanced", label: "Balance zwischen Theorie und Praxis" },
            { value: "collaborative", label: "Gruppenarbeit und kollaboratives Lernen" }
        ]},
        { id: 21, type: "rating", question: "Wie sehr interessierst du dich für Architektur und Stadtplanung?", category: "architecture" },
        { id: 22, type: "rating", question: "Wie wichtig sind dir kulturelle Aktivitäten und Kunstszene?", category: "culture" },
        { id: 23, type: "yes-no", question: "Bevorzugst du eine kleinere, intimere akademische Gemeinschaft?", category: "small-community" },
        { id: 24, type: "rating", question: "Wie sehr interessierst du dich für Finanzen und Bankwesen?", category: "finance" },
        { id: 25, type: "rating", question: "Wie wichtig sind dir Forschungsexzellenz und akademischer Ruf?", category: "research" },
        { id: 26, type: "multiple", question: "Welche Art von Stadtatmosphäre spricht dich an?", options: [
            { value: "cosmopolitan", label: "Große kosmopolitische Stadt mit internationalem Flair" },
            { value: "historic", label: "Historische Stadt mit kulturellem Erbe" },
            { value: "modern", label: "Moderne, innovative Tech-Stadt" },
            { value: "nature", label: "Stadt in der Nähe von Bergen/Natur" }
        ]},
        { id: 27, type: "rating", question: "Wie sehr interessierst du dich für Medien und Kommunikationswissenschaften?", category: "media" },
        { id: 28, type: "yes-no", question: "Möchtest du in einer zwei- oder mehrsprachigen Umgebung studieren?", category: "languages" },
        { id: 29, type: "rating", question: "Wie sehr interessierst du dich für Unternehmertum und Startups?", category: "entrepreneurship" },
        { id: 30, type: "rating", question: "Wie wichtig sind dir starke Verbindungen zur Industrie?", category: "industry-connections" },
        { id: 31, type: "multiple", question: "Welcher Aspekt des Universitätslebens ist dir am wichtigsten?", options: [
            { value: "academic", label: "Akademische Exzellenz und anspruchsvolle Programme" },
            { value: "networking", label: "Networking und Karrieremöglichkeiten" },
            { value: "lifestyle", label: "Studentenleben und Stadtleben" },
            { value: "research", label: "Forschungsmöglichkeiten und Einrichtungen" }
        ]},
        { id: 32, type: "rating", question: "Wie sehr interessierst du dich für Sportwissenschaft oder Sportpädagogik?", category: "sports" },
        { id: 33, type: "rating", question: "Wie wichtig ist es dir, an einer prestigeträchtigen, weltweit renommierten Institution zu studieren?", category: "prestigious" },
        { id: 34, type: "yes-no", question: "Bevorzugst du interdisziplinäre Studien gegenüber einem Einzelfach?", category: "interdisciplinary" },
        { id: 35, type: "rating", question: "Wie sehr interessierst du dich für Mathematik und computerbasierte Bereiche?", category: "mathematics" }
    ],
    it: [
        { id: 1, type: "country", question: "In quale paese preferiresti studiare?", options: [
            { value: "Italy", label: "Italia 🇮🇹" },
            { value: "Austria", label: "Austria 🇦🇹" },
            { value: "Switzerland", label: "Svizzera 🇨🇭" },
            { value: "Germany", label: "Germania 🇩🇪" }
        ]},
        { id: 2, type: "rating", question: "Quanto ti interessa l'ingegneria e la tecnologia?", category: "engineering" },
        { id: 3, type: "rating", question: "Quanto ti piacciono le materie umanistiche (letteratura, storia, filosofia)?", category: "humanities" },
        { id: 4, type: "rating", question: "Quanto ti interessano le scienze naturali (biologia, chimica, fisica)?", category: "sciences" },
        { id: 5, type: "multiple", question: "Che tipo di ambiente universitario preferisci?", options: [
            { value: "large-urban", label: "Grande università in una città importante" },
            { value: "medium-urban", label: "Università di medie dimensioni in una città" },
            { value: "small-town", label: "Università in una città più piccola e tranquilla" },
            { value: "any", label: "Sono flessibile riguardo alla posizione" }
        ]},
        { id: 6, type: "rating", question: "Quanto è importante per te l'apprendimento pratico e applicato?", category: "practical" },
        { id: 7, type: "rating", question: "Quanto ti interessano business ed economia?", category: "business" },
        { id: 8, type: "yes-no", question: "Preferisci la ricerca teorica rispetto alle competenze applicate?", category: "theoretical" },
        { id: 9, type: "rating", question: "Quanto apprezzi l'innovazione e la tecnologia all'avanguardia?", category: "innovation" },
        { id: 10, type: "multiple", question: "Quale area ti attrae di più?", options: [
            { value: "stem", label: "Scienza, Tecnologia, Ingegneria, Matematica" },
            { value: "humanities", label: "Arte, Scienze Umane, Lingue" },
            { value: "business", label: "Business, Economia, Finanza" },
            { value: "social", label: "Scienze Sociali, Diritto, Politica" }
        ]},
        { id: 11, type: "rating", question: "Quanto ti interessa la medicina e l'assistenza sanitaria?", category: "medicine" },
        { id: 12, type: "yes-no", question: "Preferisci un'università con una forte tradizione storica?", category: "tradition" },
        { id: 13, type: "rating", question: "Quanto sono importanti per te l'orientamento internazionale e la diversità?", category: "international" },
        { id: 14, type: "rating", question: "Quanto ti interessano i temi ambientali e di sostenibilità?", category: "environment" },
        { id: 15, type: "multiple", question: "Che tipo di percorso di carriera immagini?", options: [
            { value: "research", label: "Ricerca accademica e innovazione" },
            { value: "industry", label: "Industria e carriera aziendale" },
            { value: "creative", label: "Campi creativi e culturali" },
            { value: "public", label: "Servizio pubblico o impatto sociale" }
        ]},
        { id: 16, type: "rating", question: "Quanto ti piace il design e il lavoro creativo?", category: "design" },
        { id: 17, type: "yes-no", question: "Preferiresti un'università specializzata rispetto a una comprensiva?", category: "specialized" },
        { id: 18, type: "rating", question: "Quanto ti interessano il diritto e gli studi legali?", category: "law" },
        { id: 19, type: "rating", question: "Quanto è importante la vicinanza alla natura e alle attività all'aperto?", category: "nature" },
        { id: 20, type: "multiple", question: "Cosa descrive meglio il tuo stile di apprendimento?", options: [
            { value: "research-focused", label: "Ricerca approfondita ed esplorazione teorica" },
            { value: "practical-focused", label: "Progetti pratici e applicazioni" },
            { value: "balanced", label: "Equilibrio tra teoria e pratica" },
            { value: "collaborative", label: "Lavoro di gruppo e apprendimento collaborativo" }
        ]},
        { id: 21, type: "rating", question: "Quanto ti interessa l'architettura e l'urbanistica?", category: "architecture" },
        { id: 22, type: "rating", question: "Quanto apprezzi le attività culturali e la scena artistica?", category: "culture" },
        { id: 23, type: "yes-no", question: "Preferisci una comunità accademica più piccola e intima?", category: "small-community" },
        { id: 24, type: "rating", question: "Quanto ti interessano la finanza e il settore bancario?", category: "finance" },
        { id: 25, type: "rating", question: "Quanto sono importanti l'eccellenza nella ricerca e la reputazione accademica?", category: "research" },
        { id: 26, type: "multiple", question: "Che tipo di atmosfera cittadina ti attrae?", options: [
            { value: "cosmopolitan", label: "Grande città cosmopolita con atmosfera internazionale" },
            { value: "historic", label: "Città storica con patrimonio culturale" },
            { value: "modern", label: "Centro tecnologico moderno e innovativo" },
            { value: "nature", label: "Città vicina a montagne/natura" }
        ]},
        { id: 27, type: "rating", question: "Quanto ti interessano i media e gli studi sulla comunicazione?", category: "media" },
        { id: 28, type: "yes-no", question: "Ti piacerebbe studiare in un ambiente bilingue o multilingue?", category: "languages" },
        { id: 29, type: "rating", question: "Quanto ti interessa l'imprenditorialità e le startup?", category: "entrepreneurship" },
        { id: 30, type: "rating", question: "Quanto è importante avere forti collegamenti con l'industria?", category: "industry-connections" },
        { id: 31, type: "multiple", question: "Quale aspetto della vita universitaria conta di più per te?", options: [
            { value: "academic", label: "Eccellenza accademica e programmi rigorosi" },
            { value: "networking", label: "Networking e opportunità di carriera" },
            { value: "lifestyle", label: "Stile di vita studentesco e vita cittadina" },
            { value: "research", label: "Opportunità e strutture di ricerca" }
        ]},
        { id: 32, type: "rating", question: "Quanto ti interessano le scienze motorie o l'educazione fisica?", category: "sports" },
        { id: 33, type: "rating", question: "Quanto è importante studiare in un'istituzione prestigiosa e rinomata a livello mondiale?", category: "prestigious" },
        { id: 34, type: "yes-no", question: "Preferisci studi interdisciplinari rispetto alla concentrazione su una singola materia?", category: "interdisciplinary" },
        { id: 35, type: "rating", question: "Quanto ti interessano la matematica e i campi computazionali?", category: "mathematics" }
    ]
};

// State Management
let currentQuestionIndex = 0;
let answers = {};
let questions = [];

// Language & Navigation Functions
function goToLanguageSelection() {
    document.getElementById('intro-screen').classList.remove('active');
    document.getElementById('language-screen').classList.add('active');
}

function selectLanguage(lang) {
    currentLang = lang;
    questions = questionsData[lang];
    updateUILanguage();
    document.getElementById('language-screen').classList.remove('active');
    document.getElementById('welcome-screen').classList.add('active');
}

function updateUILanguage() {
    const t = translations[currentLang];
    // Update intro screen
    document.getElementById('intro-title').textContent = t.introTitle;
    document.getElementById('intro-subtitle').textContent = t.introSubtitle;
    document.getElementById('intro-desc-1').innerHTML = t.introDesc1;
    document.getElementById('intro-desc-2').innerHTML = t.introDesc2;
    document.getElementById('feature-1-title').textContent = t.feature1Title;
    document.getElementById('feature-1-text').textContent = t.feature1Text;
    document.getElementById('feature-2-title').textContent = t.feature2Title;
    document.getElementById('feature-2-text').textContent = t.feature2Text;
    document.getElementById('feature-3-title').textContent = t.feature3Title;
    document.getElementById('feature-3-text').textContent = t.feature3Text;
    document.getElementById('intro-btn').querySelector('span').textContent = t.introBtn;
    
    // Update welcome screen
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
    
    // Update results screen
    document.getElementById('results-title').textContent = t.resultsTitle;
    document.getElementById('results-subtitle').textContent = t.resultsSubtitle;
    document.getElementById('top-match-badge').textContent = t.topMatchBadge;
    document.getElementById('second-match-badge').textContent = t.secondMatchBadge;
    document.getElementById('nearest-badge').textContent = t.nearestBadge;
    document.getElementById('career-title-1').textContent = t.careerTitle;
    document.getElementById('career-title-2').textContent = t.careerTitle;
    document.getElementById('career-title-3').textContent = t.careerTitle;
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
    let typeText = '';
    if (question.type === 'rating') typeText = currentLang === 'en' ? 'Rating Scale (1-10)' : currentLang === 'de' ? 'Bewertungsskala (1-10)' : 'Scala di valutazione (1-10)';
    else if (question.type === 'multiple') typeText = currentLang === 'en' ? 'Multiple Choice' : currentLang === 'de' ? 'Multiple Choice' : 'Scelta multipla';
    else if (question.type === 'yes-no') typeText = currentLang === 'en' ? 'Yes/No' : currentLang === 'de' ? 'Ja/Nein' : 'Sì/No';
    else if (question.type === 'country') typeText = currentLang === 'en' ? 'Country Selection' : currentLang === 'de' ? 'Länderauswahl' : 'Selezione Paese';
    
    html += `<div class="question-type">${typeText}</div>`;
    html += `<h2>${question.question}</h2>`;
    
    if (question.type === 'rating') {
        html += '<div class="rating-scale">';
        for (let i = 1; i <= 10; i++) {
            const checked = answers[question.id] == i ? 'checked' : '';
            html += `<div class="rating-option"><input type="radio" id="q${question.id}_${i}" name="q${question.id}" value="${i}" ${checked} onchange="saveAnswer(${question.id}, ${i})"><label for="q${question.id}_${i}">${i}</label></div>`;
        }
        html += '</div>';
        html += `<div class="rating-labels"><span>${t.ratingNotAtAll}</span><span>${t.ratingExtremely}</span></div>`;
    } 
    else if (question.type === 'multiple' || question.type === 'country') {
        html += '<div class="options">';
        question.options.forEach((option, i) => {
            const checked = answers[question.id] === option.value ? 'checked' : '';
            html += `<div class="option"><input type="radio" id="q${question.id}_${i}" name="q${question.id}" value="${option.value}" ${checked} onchange="saveAnswer(${question.id}, '${option.value}')"><label for="q${question.id}_${i}">${option.label}</label></div>`;
        });
        html += '</div>';
    }
    else if (question.type === 'yes-no') {
        const yesChecked = answers[question.id] === 'yes' ? 'checked' : '';
        const noChecked = answers[question.id] === 'no' ? 'checked' : '';
        const yesText = currentLang === 'en' ? 'Yes' : currentLang === 'de' ? 'Ja' : 'Sì';
        const noText = currentLang === 'en' ? 'No' : currentLang === 'de' ? 'Nein' : 'No';
        html += `<div class="yes-no-options"><div class="yes-no-option"><input type="radio" id="q${question.id}_yes" name="q${question.id}" value="yes" ${yesChecked} onchange="saveAnswer(${question.id}, 'yes')"><label for="q${question.id}_yes">${yesText}</label></div><div class="yes-no-option"><input type="radio" id="q${question.id}_no" name="q${question.id}" value="no" ${noChecked} onchange="saveAnswer(${question.id}, 'no')"><label for="q${question.id}_no">${noText}</label></div></div>`;
    }
    
    html += '</div>';
    container.innerHTML = html;
    updateProgress();
    
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
    const scores = universities.map(uni => {
        let score = 0;
        let maxScore = 0;
        
        questions.filter(q => q.type === 'rating').forEach(q => {
            const answer = answers[q.id];
            if (answer && q.category) {
                maxScore += 10;
                if (uni.strengths.includes(q.category)) {
                    score += parseInt(answer);
                }
            }
        });
        
        questions.filter(q => q.type === 'yes-no').forEach(q => {
            const answer = answers[q.id];
            if (answer && q.category) {
                maxScore += 10;
                if (q.category === 'theoretical' && answer === 'yes' && uni.strengths.includes('research')) score += 8;
                else if (q.category === 'theoretical' && answer === 'no' && uni.strengths.includes('practical')) score += 8;
                else if (q.category === 'tradition' && answer === 'yes' && uni.strengths.includes('tradition')) score += 8;
                else if (q.category === 'specialized' && answer === 'yes' && uni.strengths.length <= 4) score += 7;
                else if (q.category === 'specialized' && answer === 'no' && uni.strengths.includes('diverse')) score += 7;
                else if (q.category === 'small-community' && answer === 'yes' && uni.size === 'small') score += 8;
                else if (q.category === 'small-community' && answer === 'no' && uni.size === 'large') score += 6;
                else if (q.category === 'languages' && answer === 'yes' && uni.strengths.includes('languages')) score += 8;
                else if (q.category === 'interdisciplinary' && answer === 'yes' && uni.strengths.includes('diverse')) score += 7;
            }
        });
        
        const q5 = answers[5];
        if (q5) {
            maxScore += 10;
            if (q5 === 'large-urban' && uni.size === 'large' && uni.environment === 'urban') score += 10;
            else if (q5 === 'medium-urban' && uni.size === 'medium' && uni.environment === 'urban') score += 10;
            else if (q5 === 'small-town' && uni.environment === 'small-town') score += 10;
            else if (q5 === 'any') score += 5;
        }
        
        const q10 = answers[10];
        if (q10) {
            maxScore += 10;
            if (q10 === 'stem' && (uni.strengths.includes('engineering') || uni.strengths.includes('technology') || uni.strengths.includes('sciences'))) score += 10;
            else if (q10 === 'humanities' && uni.strengths.includes('humanities')) score += 10;
            else if (q10 === 'business' && (uni.strengths.includes('business') || uni.strengths.includes('economics'))) score += 10;
            else if (q10 === 'social' && uni.strengths.includes('social')) score += 10;
        }
        
        const q15 = answers[15];
        if (q15) {
            maxScore += 10;
            if (q15 === 'research' && uni.strengths.includes('research')) score += 10;
            else if (q15 === 'industry' && uni.strengths.includes('practical')) score += 8;
            else if (q15 === 'creative' && (uni.strengths.includes('arts') || uni.strengths.includes('design'))) score += 10;
            else if (q15 === 'public' && uni.strengths.includes('social')) score += 8;
        }
        
        const q20 = answers[20];
        if (q20) {
            maxScore += 10;
            if (q20 === 'research-focused' && uni.strengths.includes('research')) score += 10;
            else if (q20 === 'practical-focused' && uni.strengths.includes('practical')) score += 10;
            else if (q20 === 'balanced') score += 7;
        }
        
        const q26 = answers[26];
        if (q26) {
            maxScore += 10;
            if (q26 === 'cosmopolitan' && uni.environment === 'urban' && uni.size === 'large') score += 9;
            else if (q26 === 'historic' && uni.strengths.includes('tradition')) score += 9;
            else if (q26 === 'modern' && uni.strengths.includes('innovation')) score += 9;
            else if (q26 === 'nature' && uni.environment === 'small-town') score += 9;
        }
        
        const q31 = answers[31];
        if (q31) {
            maxScore += 10;
            if (q31 === 'academic' && uni.strengths.includes('prestigious')) score += 9;
            else if (q31 === 'networking' && uni.strengths.includes('practical')) score += 8;
            else if (q31 === 'lifestyle' && uni.environment === 'urban') score += 7;
            else if (q31 === 'research' && uni.strengths.includes('research')) score += 9;
        }
        
        const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
        
        return { university: uni, score: percentage, rawScore: score };
    });
    
    scores.sort((a, b) => b.score - a.score);
    const topMatch = scores[0];
    const secondMatch = scores[1];
    const preferredCountry = answers[1];
    const nearestUni = scores.find(s => s.university.country === preferredCountry) || scores[2];
    
    displayResults(topMatch, secondMatch, nearestUni);
}

function displayResults(top, second, nearest) {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('results-screen').classList.add('active');
    
    document.getElementById('restart-text').textContent = translations[currentLang].restartText;
    
    // Top match - NO score displayed
    document.getElementById('uni-1-name').textContent = top.university.name;
    document.getElementById('uni-1-location').textContent = top.university.location;
    document.getElementById('uni-1-description').textContent = top.university.description;
    displayCareers('uni-1-careers', top.university.careers);
    
    // Second match - NO score displayed
    document.getElementById('uni-2-name').textContent = second.university.name;
    document.getElementById('uni-2-location').textContent = second.university.location;
    document.getElementById('uni-2-description').textContent = second.university.description;
    displayCareers('uni-2-careers', second.university.careers);
    
    // Nearest option
    document.getElementById('uni-nearby-name').textContent = nearest.university.name;
    document.getElementById('uni-nearby-location').textContent = nearest.university.location;
    document.getElementById('uni-nearby-description').textContent = nearest.university.description;
    displayCareers('uni-nearby-careers', nearest.university.careers);
}

function displayCareers(elementId, careerCategories) {
    const container = document.getElementById(elementId);
    let careersHtml = '';
    
    const allCareers = [];
    careerCategories.forEach(category => {
        if (careerPaths[category]) {
            allCareers.push(...careerPaths[category].slice(0, 3));
        }
    });
    
    const uniqueCareers = [...new Set(allCareers)].slice(0, 6);
    
    uniqueCareers.forEach(career => {
        careersHtml += `<span class="career-tag">${career}</span>`;
    });
    
    container.innerHTML = careersHtml;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    answers = {};
    document.getElementById('results-screen').classList.remove('active');
    document.getElementById('intro-screen').classList.add('active');
}
