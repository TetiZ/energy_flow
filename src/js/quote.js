// Функція для отримання цитати з backend'а
async function getQuoteFromBackend() {
  try {
    const response = await fetch('https://energyflow.b.goit.study/api/quote');
    const data = response.json();
    console.log("Отримані дані з API:", data); // Додано логування
    return data;
  } catch (error) {
    console.error('Error getting quote from backend', error);
    return null;
  }
}


const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');

// Функція для відображення цитати
function displayQuote(quoteData) {
  if (quoteData) {
    quoteText.textContent = quoteData.quote;
    quoteAuthor.textContent = quoteData.author;
  }
}

// Функція для перевірки і отримання цитати
async function checkAndFetchQuote() {
  const today = new Date().toISOString().split('T')[0];
  const storedQuote = JSON.parse(localStorage.getItem('quoteData'));

  if (!storedQuote || storedQuote.date !== today) {
    const newQuoteData = await getQuoteFromBackend();
    if (newQuoteData) {
      localStorage.setItem('quoteData', JSON.stringify({ ...newQuoteData, date: today }));
      displayQuote(newQuoteData);
    }
  } else {
    displayQuote(storedQuote);
  }
}

// Викликаємо функцію при завантаженні сторінки
document.addEventListener('DOMContentLoaded', checkAndFetchQuote);