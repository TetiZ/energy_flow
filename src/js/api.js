export async function musclesGroup(event) {
    let currentPage = 1;
    const limit = 8;
    let searchQuery = '';

    try {   
        searchQuery = event.target.id;

        localStorage.setItem('searchQuery', JSON.stringify({searchQuery}));

        const url = `https://energyflow.b.goit.study/api/exercises?muscles=${searchQuery}&page=${currentPage}&limit=${limit}`;
        const response = await fetch(url);

        if (response.status !== 200) {
            throw new Error('Failed to fetch data. Please try again later.');
        }

        const resultPromise = response.json();
        const results = await resultPromise;

        if (results.length === 0) {
            throw new Error('No data found. Please try a different search term.');
        }

        return results;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}


// bodyPart------------------------------------------------------------
export async function bodyPart(event) {
    let currentPage = 1;
    const limit = 8;
    let searchInput = '';

    try {
        searchInput = encodeURIComponent(event.toLowerCase());

        localStorage.setItem('searchInput', JSON.stringify({ searchInput }));
        
        console.log(searchInput);

        const url = `https://energyflow.b.goit.study/api/exercises?bodypart=${searchInput}&page=${currentPage}&limit=${limit}`;
        const response = await fetch(url);

        if (response.status !== 200) {
            throw new Error('Failed to fetch data. Please try again later.');
        }

        const resultPromise = response.json();
        const results = await resultPromise;

        console.log(results);

        if (results.length === 0) {
            throw new Error('No data found. Please try a different search term.');
        }

        return results;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}


// equipment------------------------------------------------------------
export async function equipment(event) {
    let currentPage = 1;
    const limit = 8;
    let searchQuery = '';

    try {
        searchQuery = encodeURIComponent(event.target.id);
        console.log(searchQuery);

        const url = `https://energyflow.b.goit.study/api/exercises?equipment=${searchQuery}&page=${currentPage}&limit=${limit}`;
        const response = await fetch(url);

        if (response.status !== 200) {
            throw new Error('Failed to fetch data. Please try again later.');
        }

        const resultPromise = response.json();
        const results = await resultPromise;

        console.log(results);

        if (results.length === 0) {
            throw new Error('No data found. Please try a different search term.');
        }

        return results;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// equipment------------------------------------------------------------


// Функція для отримання цитати з backend'а-----------------------------
async function getQuoteFromBackend() {
    try {
    const response = await fetch('https://energyflow.b.goit.study/api/quote');
    const data = await response.json();
    return data;
    } catch (error) {
    console.error('Error getting quote from backend', error);
    return null;
    }
}

// Функція для оновлення блоку з цитатою--------------------------------
export async function updateQuoteBlock() {

    const storedQuote = localStorage.getItem('quote');
    const storedDate = localStorage.getItem('quoteDate');
    const currentDate = new Date().toDateString();

    if (storedQuote && storedDate === currentDate) {

    return JSON.parse(storedQuote);
    } else {

    const quoteData = await getQuoteFromBackend();

    if (quoteData) {

        localStorage.setItem('quote', JSON.stringify(quoteData));
        localStorage.setItem('quoteDate', currentDate);
        return quoteData;
    }
    }
}
