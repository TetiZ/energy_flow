
// функція musclesGroup() для того щоб знайти мязи що на першій кнопці Muscles у exercises



// те що нижче виділене крапками те як має працювати у потрібному файлі ця функція нам потрібно поставити айдішки на img і при кліку на них відповідна айді abs виводить усі можливі вправи де target element є abs ознайомтесь з json кодом нижче

// 0:
//     bodyPart: "waist"
//     burnedCalories: 220
//     description: "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks."
//     equipment: "body weight"
//     gifUrl: "https://ftp.goit.study/img/power-pulse/gifs/0001.gif"
//     name: "3/4 sit-up"
//     popularity: 7640
//     rating: 3.18
//     target: "abs"
//     time: 3
//     _id: "64f389465ae26083f39b17a2"
//     [[Prototype]]: Object

// це один з багатьох елементів що виводиться в консоль при кліку на елемент в якого айді abs

//...............................................................

// import { musclesGroup } from 'шлях до api файла';

// const button = document.querySelector('.buttons');
// це був просто список (ul) кнопок у моєму тестовому репозиторії а вже в цьому списку знаходились елементи з айдішками мязів


// button.addEventListener('click', async (event) => {
//     event.preventDefault();

//     try {
//         const results = await musclesGroup(event);
//         // You can now work with the 'results' variable here

//     } catch (error) {
//         console.error('Error in musclesGroup:', error);
//     }
// });
//...............................................................


// muscleGroup---------------------------------------------------------


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

// muscleGroup---------------------------------------------------------


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


// логіка додавання функції bodyPart в інший файл така сама як muscleGroup
// bodyPart------------------------------------------------------------


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

// ось так виглядає імпорт функції після then уже робите потрібні вам операції замість console.log()

// import { updateQuoteBlock } from 'шлях до api файла'

// updateQuoteBlock()
//     .then(result => console.log(result));