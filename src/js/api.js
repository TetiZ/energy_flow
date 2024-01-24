
// функція musclesGroup() для того щоб знайти мязи що на першій кнопці Muscles у exercises



// те що нижче виділене крапками нижче як має працювати у потрібному файлі ця функція на потрібно поставити айдішки на img і при кліку на них відповідна айді abs виводить усі можливі вправи де target element є abs ознайомтесь з json кодом нижче

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

// import { fetchData } from 'шлях до api файла';

// const button = document.querySelector('.buttons');
// це був просто список (ul) кнопок у моєму тестовому репозиторії а вже в цьому списку знаходились елементи з айдішкасми мязів


// button.addEventListener('click', async (event) => {
//     event.preventDefault();

//     try {
//         const results = await fetchData(event);
//         // You can now work with the 'results' variable here

//     } catch (error) {
//         console.error('Error in fetchData:', error);
//     }
// });
//...............................................................

export async function musclesGroup(event) {
    let currentPage = 1;
    const limit = 8;
    let searchQuery = '';
    let allHits = [];
    let isFirstLoad = true;

    try {
        searchQuery = encodeURIComponent(event.target.id);
        console.log(searchQuery);

        const url = `https://energyflow.b.goit.study/api/exercises?muscles=${searchQuery}&page=${currentPage}&limit=${limit}`;
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

const url = 'https://energyflow.b.goit.study/api/exercises';
let currentPage = 1;
let totalPages = 1;
const perPage = 10;
const allData = [];


async function searchBodyPart() {
    try {
        while (currentPage <= totalPages) {
            const params = new URLSearchParams({ page: currentPage, perPage });

            const response = await fetch(`${url}?${params}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            totalPages = data.totalPages;


            const relevantObjects = data.results.filter(obj => obj.bodyPart === 'waist');  // replace '' with what you search 
            allData.push(...relevantObjects);

            currentPage++;
            console.log(currentPage);
        }
        return allData;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; 
    }
}

searchBodyPart()
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('Error outside fetchAllData function:', error);
    });



