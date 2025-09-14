// Telugu Learn App Data (Separated for easy retrieval in main page)
// All meanings and examples are in English and transliteration, except for main Telugu words.

export const teluguLetters = [
    { letter: 'అ', pronunciation: 'a', meaning: 'Letter A (a)' },
    { letter: 'ఆ', pronunciation: 'aa', meaning: 'Letter AA (aa)' },
    { letter: 'ఇ', pronunciation: 'i', meaning: 'Letter I (i)' },
    { letter: 'ఈ', pronunciation: 'ee', meaning: 'Letter EE (ee)' },
    { letter: 'ఉ', pronunciation: 'u', meaning: 'Letter U (u)' },
    { letter: 'ఊ', pronunciation: 'oo', meaning: 'Letter OO (oo)' },
    { letter: 'ఋ', pronunciation: 'ru', meaning: 'Letter RU (ru)' },
    { letter: 'ౠ', pronunciation: 'ruu', meaning: 'Letter RUU (ruu)' },
    { letter: 'ఌ', pronunciation: 'lu', meaning: 'Letter LU (lu)' },
    { letter: 'ౡ', pronunciation: 'luu', meaning: 'Letter LUU (luu)' },
    { letter: 'ఎ', pronunciation: 'e', meaning: 'Letter E (e)' },
    { letter: 'ఏ', pronunciation: 'ae', meaning: 'Letter AE (ae)' },
    { letter: 'ఐ', pronunciation: 'ai', meaning: 'Letter AI (ai)' },
    { letter: 'ఒ', pronunciation: 'o', meaning: 'Letter O (o)' },
    { letter: 'ఓ', pronunciation: 'oo', meaning: 'Letter OO (oo)' },
    { letter: 'ఔ', pronunciation: 'au', meaning: 'Letter AU (au)' }
];

export const grammarData = {
    pronouns: [
        { word: 'నేను', pronunciation: 'nenu', meaning: 'I (nominative)', example: 'I am fine (nenu baagunnaanu)' },
        { word: 'నా', pronunciation: 'naa', meaning: 'my/mine (possessive)', example: 'My eyes (naa kalllu)' },
        { word: 'నాకు', pronunciation: 'naaku', meaning: 'to me (dative)', example: 'I don\'t want (naaku vaddu)' },
        { word: 'నన్ను', pronunciation: 'nannu', meaning: 'me (accusative)', example: 'Don\'t call me (nannu pilavaddu)' },
        { word: 'నాతో', pronunciation: 'naatho', meaning: 'with me', example: 'Come with me (naatho raa)' },
        { word: 'నువ్వు', pronunciation: 'nuvu', meaning: 'you (nominative)', example: 'Did you come? (nuvu vachchava)' },
        { word: 'నీ', pronunciation: 'nee', meaning: 'your/yours (possessive)', example: 'What is your name? (nee peru enti)' },
        { word: 'నీకు', pronunciation: 'neeku', meaning: 'to you (dative)', example: 'Do you know? (neeku thelusa)' },
        { word: 'నిన్ను', pronunciation: 'ninnu', meaning: 'you (accusative)', example: 'I saw you (ninnu choosaanu)' },
        { word: 'నీతో', pronunciation: 'neetho', meaning: 'with you', example: 'I\'ll come with you (neetho vastaanu)' },
        { word: 'అతడు', pronunciation: 'athadu', meaning: 'he (nominative)', example: 'He is there (athadu unnaadu)' },
        { word: 'ఆమె', pronunciation: 'aame', meaning: 'she (nominative)', example: 'She is there (aame undi)' },
        { word: 'మేము', pronunciation: 'memu', meaning: 'we (exclusive)', example: 'We will go (memu veltamu)' },
        { word: 'మనం', pronunciation: 'manam', meaning: 'we (inclusive)', example: 'Let\'s do together (manam kalisi cheddaam)' },
        { word: 'మీరు', pronunciation: 'meeru', meaning: 'you (plural/formal)', example: 'How are you? (meeru ela unnaru)' },
        { word: 'వారు', pronunciation: 'vaaru', meaning: 'they (people)', example: 'They came (vaaru vachcharu)' }
    ],
    verbs: [
        { word: 'తిను', pronunciation: 'thinu', meaning: 'to eat', example: 'I eat rice (nenu annam thintanu)' },
        { word: 'తాగు', pronunciation: 'thaagu', meaning: 'to drink', example: 'Drink water (neeru thaagu)' },
        { word: 'పడుకో', pronunciation: 'paduko', meaning: 'to sleep', example: 'Sleep at night (raathri paduko)' },
        { word: 'లే', pronunciation: 'le', meaning: 'to wake up', example: 'I woke up early (udayaanne lechaanu)' },
        { word: 'ఆడు', pronunciation: 'aadu', meaning: 'to play', example: 'Children are playing (pillalu aadukuntunnaru)' },
        { word: 'పాడు', pronunciation: 'paadu', meaning: 'to sing', example: 'Sing a good song (manchi paata paadu)' },
        { word: 'చూడు', pronunciation: 'choodu', meaning: 'to see/watch', example: 'Watch movie (cinema choodali)' },
        { word: 'వెతుకు', pronunciation: 'vethuku', meaning: 'to search', example: 'Search book (pustakam vethuku)' },
        { word: 'చేయి', pronunciation: 'cheyi', meaning: 'to do', example: 'Do work (pani cheyali)' },
        { word: 'నడువు', pronunciation: 'naduvu', meaning: 'to walk', example: 'Walk slowly (nemmadiga naduvu)' },
        { word: 'పరిగెత్తు', pronunciation: 'parigetthu', meaning: 'to run', example: 'Run fast (twaraga parigetthu)' },
        { word: 'కూర్చో', pronunciation: 'koorcho', meaning: 'to sit', example: 'Sit here (ikkada koorcho)' },
        { word: 'నిలబడు', pronunciation: 'nilabadu', meaning: 'to stand', example: 'Stand there (akkada nilabadu)' },
        { word: 'అను', pronunciation: 'anu', meaning: 'to say', example: 'What did you say? (em annavu?)' },
        { word: 'చెప్పు', pronunciation: 'cheppu', meaning: 'to tell', example: 'Tell truth (nijam cheppu)' },
        { word: 'విను', pronunciation: 'vinu', meaning: 'to listen', example: 'Listen to words (maata vinu)' },
        { word: 'అనుకో', pronunciation: 'anuko', meaning: 'to think', example: 'Think well (baaga anuko)' },
        { word: 'అడుగు', pronunciation: 'adugu', meaning: 'to ask', example: 'Ask question (prashna adugu)' },
        { word: 'పిలువు', pronunciation: 'piluvu', meaning: 'to call', example: 'Call him (athadini piluvu)' },
        { word: 'చదువు', pronunciation: 'chadhuvu', meaning: 'to read', example: 'Read book (pustakam chadhuvu)' },
        { word: 'రాయి', pronunciation: 'raayi', meaning: 'to write', example: 'Write letter (lekha raayi)' },
        { word: 'నేర్చుకో', pronunciation: 'nerchuko', meaning: 'to learn', example: 'Learn Telugu (telugu nerchuko)' },
        { word: 'తెలుసుకో', pronunciation: 'telusuko', meaning: 'to know/find out', example: 'Find out matter (vishayam telusuko)' },
        { word: 'పో', pronunciation: 'po', meaning: 'to go', example: 'Go home (intiki po)' },
        { word: 'రా', pronunciation: 'raa', meaning: 'to come', example: 'Come here (ikkadaku raa)' },
        { word: 'ఆగు', pronunciation: 'aagu', meaning: 'to stop', example: 'Stop there (akkada aagu)' },
        { word: 'ఉండు', pronunciation: 'undu', meaning: 'to stay/be', example: 'Stay here (ikkada undu)' },
        { word: 'కలువు', pronunciation: 'kaluvu', meaning: 'to meet', example: 'Let\'s meet tomorrow (repu kaluddaam)' },
        { word: 'ఇవ్వు', pronunciation: 'ivvu', meaning: 'to give', example: 'Give book (pustakam ivvu)' },
        { word: 'తీస్కో', pronunciation: 'theesko', meaning: 'to take', example: 'Take this (dheenni theesko)' }
    ],
    postpositions: [
        { word: 'కు', pronunciation: 'ku', meaning: 'to/for', example: 'Go to home (intiku vellu)' },
        { word: 'తో', pronunciation: 'tho', meaning: 'with', example: 'Come with me (naatho raa)' },
        { word: 'లో', pronunciation: 'lo', meaning: 'in', example: 'I am in home (intlo unnaanu)' },
        { word: 'నుండి', pronunciation: 'nundi', meaning: 'from', example: 'I came from house (inti nundi vachchaanu)' },
        { word: 'వరకు', pronunciation: 'varaku', meaning: 'until', example: 'Work until night (raathri varaku pani)' }
    ],
    adjectives: [
        { word: 'మంచి', pronunciation: 'manchi', meaning: 'good', example: 'Good book (manchi pustakam)' },
        { word: 'చెడ్డ', pronunciation: 'chedda', meaning: 'bad', example: 'Bad weather (chedda vaathavaranam)' },
        { word: 'పెద్ద', pronunciation: 'pedda', meaning: 'big', example: 'Big house (pedda illu)' },
        { word: 'చిన్న', pronunciation: 'chinna', meaning: 'small', example: 'Small boy (chinna pillavadu)' },
        { word: 'అందమైన', pronunciation: 'andamaina', meaning: 'beautiful', example: 'Beautiful flower (andamaina puvvu)' }
    ],
    nouns: [
        { word: 'ఇల్లు', pronunciation: 'illu', meaning: 'house', example: 'Our house is big (maa illu peddadi)' },
        { word: 'పుస్తకం', pronunciation: 'pusthakam', meaning: 'book', example: 'Read good book (manchi pustakam chadhuvu)' },
        { word: 'చెట్టు', pronunciation: 'chettu', meaning: 'tree', example: 'I sat under big tree (pedda chettu kinda koorchunnanu)' },
        { word: 'నీరు', pronunciation: 'neeru', meaning: 'water', example: 'Drink cold water (challani neeru thaagu)' },
        { word: 'అన్నం', pronunciation: 'annam', meaning: 'rice/food', example: 'Tasty rice (ruchikaramaaina annam)' }
    ],
    adverbs: [
        { word: 'త్వరగా', pronunciation: 'twaraga', meaning: 'quickly', example: 'Come quickly (twaraga raa)' },
        { word: 'నెమ్మదిగా', pronunciation: 'nemmadiga', meaning: 'slowly', example: 'Walk slowly (nemmadiga naduvu)' },
        { word: 'బాగా', pronunciation: 'baaga', meaning: 'well/good', example: 'Study well (baaga chadhuvu)' },
        { word: 'చాలా', pronunciation: 'chaala', meaning: 'very/much', example: 'Very good (chaala manchidi)' },
        { word: 'కొంచెం', pronunciation: 'konchem', meaning: 'little/some', example: 'Give some water (konchem neeru ivvu)' }
    ]
};

export const wordsData = [
    { word: 'నమస్కారం', pronunciation: 'namaskaram', meaning: 'Hello/greetings', example: 'Greetings to all (andariki namaskaram)' },
    { word: 'ధన్యవాదాలు', pronunciation: 'dhanyavadalu', meaning: 'Thank you', example: 'Thank you (meeku dhanyavadalu)' },
    { word: 'క్షమించండి', pronunciation: 'kshaminchandhi', meaning: 'Sorry/excuse me', example: 'Please excuse me (dayachesi kshaminchandi)' },
    { word: 'అవును', pronunciation: 'avunu', meaning: 'Yes', example: 'Yes, I will come (avunu, nenu vastaanu)' },
    { word: 'కాదు', pronunciation: 'kaadhu', meaning: 'No', example: 'No, that is not mine (kaadhu, adi naadi kaadhu)' },
    { word: 'ఉంది', pronunciation: 'undhi', meaning: 'Is there/exists', example: 'Book is there (akkada pustakam undhi)' },
    { word: 'లేదు', pronunciation: 'ledhu', meaning: 'Is not there/doesn\'t exist', example: 'No one is here (ikkada evaru ledhu)' },
    { word: 'సరే', pronunciation: 'sare', meaning: 'Ok/alright', example: 'Ok, I will come (sare, nenu vastaanu)' },
    { word: 'కానీ', pronunciation: 'kaani', meaning: 'But', example: 'I can\'t come but you go (nenu raalenu kaani meeru vellandi)' },
    { word: 'ఎందుకంటే', pronunciation: 'endhukante', meaning: 'Because', example: 'I can\'t come because I have work (nenu raalenu endhukante pani undhi)' },
    // ...continue with the rest, keeping structure as above
];

export const numbersData = [
    { word: 'ఒకటి', pronunciation: 'okati', meaning: '1', example: 'One book (okati pustakam)' },
    { word: 'రెండు', pronunciation: 'rendu', meaning: '2', example: 'Two eyes (rendu kalllu)' },
    { word: 'మూడు', pronunciation: 'moodu', meaning: '3', example: 'Three days (moodu rojulu)' },
    { word: 'నాలుగు', pronunciation: 'naalugu', meaning: '4', example: 'Four sides (naalugu vaipulu)' },
    { word: 'ఐదు', pronunciation: 'aidhu', meaning: '5', example: 'Five fingers (aidhu velllu)' },
    { word: 'ఆరు', pronunciation: 'aaru', meaning: '6', example: 'Six hours (aaru gantalu)' },
    { word: 'ఏడు', pronunciation: 'yedu', meaning: '7', example: 'Seven days (yedu rojulu)' },
    { word: 'ఎనిమిది', pronunciation: 'enimidhi', meaning: '8', example: 'Eight hours (enimidhi gantalu)' },
    { word: 'తొమ్మిది', pronunciation: 'thommidhi', meaning: '9', example: 'Nine months (thommidhi nelalu)' },
    { word: 'పది', pronunciation: 'padhi', meaning: '10', example: 'Ten fingers (padhi velllu)' },
    { word: 'పదకొండు', pronunciation: 'padhakondu', meaning: '11', example: 'Eleven people (padhakondu mandi)' },
    { word: 'పన్నెండు', pronunciation: 'pannendu', meaning: '12', example: 'Twelve months (pannendu nelalu)' },
    { word: 'ఇరవై', pronunciation: 'iravai', meaning: '20', example: 'Twenty rupees (iravai rupayalu)' },
    { word: 'ముప్పై', pronunciation: 'muppai', meaning: '30', example: 'Thirty days (muppai rojulu)' },
    { word: 'నలభై', pronunciation: 'nalabai', meaning: '40', example: 'Forty degrees (nalabai degrees)' },
    { word: 'యాభై', pronunciation: 'yaabai', meaning: '50', example: 'Fifty rupees (yaabai rupayalu)' },
    { word: 'వంద', pronunciation: 'vandha', meaning: '100', example: 'Hundred rupees (vandha rupayalu)' },
    { word: 'వెయ్యి', pronunciation: 'veyyi', meaning: '1000', example: 'Thousand rupees (veyyi rupayalu)' },
    { word: 'లక్ష', pronunciation: 'laksha', meaning: '100,000', example: 'One lakh rupees (oka laksha rupayalu)' },
    { word: 'కోటి', pronunciation: 'koti', meaning: '10,000,000', example: 'One crore rupees (oka koti rupayalu)' }
];

export const conversationsData = [
    { word: 'మీ పేరు ఏమిటి?', pronunciation: 'mee peru emiti?', meaning: 'What is your name?', example: 'My name is Ramu (naa peru Raamu)' },
    { word: 'మీరు ఎలా ఉన్నారు?', pronunciation: 'meeru ela unnaru?', meaning: 'How are you?', example: 'I am fine (nenu baagunnaanu)' },
    { word: 'మీరు ఎక్కడ నుండి వచ్చారు?', pronunciation: 'meeru ekkada nundi vachcharu?', meaning: 'Where are you from?', example: 'I am from Hyderabad (nenu Hyderabad nundi vachchaanu)' },
    { word: 'ఇది ఎంత?', pronunciation: 'idhi entha?', meaning: 'How much is this?', example: 'This is ten rupees (idhi padhi rupayalu)' },
    { word: 'సమయం ఎంత అయింది?', pronunciation: 'samayam entha ayindhi?', meaning: 'What time is it?', example: 'Now it is three o\'clock (ippudu moodu gantalu)' },
    // ...continue with the rest, keeping structure as above
];

export const practiceData = [
    { 
        word: 'అక్షరాలు వ్రాయండి', 
        pronunciation: 'aksharalu vraayandhi', 
        meaning: 'Write the letters', 
        example: 'Write: అ, ఆ, ఇ, ఈ (vraayandi: a, aa, i, ee)',
        type: 'writing',
        exercise: 'Write these letters: అ, ఆ, ఇ, ఈ, ఉ'
    },
    { 
        word: 'పదాలు చదవండి', 
        pronunciation: 'padhaalu chadhavandhi', 
        meaning: 'Read the words', 
        example: 'Read these words aloud (ee padalanu biggaraga chadhavandi)',
        type: 'reading',
        exercise: 'Read these words: ఇల్లు, పుస్తకం, చెట్టు'
    },
    { 
        word: 'వాక్యాలు పూర్తి చేయండి', 
        pronunciation: 'vaakyaalu poorti chaeyandhi', 
        meaning: 'Complete the sentences', 
        example: 'I will go _____ (nenu _____ veltanu)',
        type: 'fill-blank',
        exercise: 'Complete the sentence: నేను _____ వెళ్తాను',
        options: ['ఇంటికి', 'పాఠశాలకు', 'దుకాణానికి'],
        answer: 'ఇంటికి'
    },
    { 
        word: 'అనువాదం చేయండి', 
        pronunciation: 'anuvaadham chaeyandhi', 
        meaning: 'Translate', 
        example: 'Translate this sentence to English (ee vaakyaanni English-loki anuvaadinchandi)',
        type: 'translation',
        exercise: 'Translate to English: నేను తెలుగు నేర్చుకుంటున్నాను'
    },
    { 
        word: 'పలకడం అభ్యాసం', 
        pronunciation: 'palakaDam abhyaasam', 
        meaning: 'Pronunciation practice', 
        example: 'Say it with correct pronunciation (saraina palakadamto cheppandi)',
        type: 'pronunciation',
        exercise: 'Pronounce: నమస్కారం'
    }
];
