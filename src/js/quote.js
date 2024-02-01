const QUOTE_KEY = 'quote';
const AUTHOR_KEY = 'author';

const storedDate = localStorage.getItem('date');
const currentDate = new Date().toDateString();

if (storedDate === currentDate) {
  const storedQuote = localStorage.getItem(QUOTE_KEY);
  const storedAuthor = localStorage.getItem(AUTHOR_KEY);
  displayQuote({ quote: storedQuote, author: storedAuthor });
} else {
  async function fetchData() {
    try {
      const response = await fetch('https://energyflow.b.goit.study/api/quote');
      if (response.ok) {
        const data = await response.json();
        const quote = data.quote;
        const author = data.author;

        localStorage.setItem(QUOTE_KEY, quote);
        localStorage.setItem(AUTHOR_KEY, author || 'автор невідомий');
        localStorage.setItem('date', currentDate);

        displayQuote({ quote, author: author || 'автор невідомий' });
      } else {
        throw new Error('Помилка запиту до сервера!');
      }
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
}

// Функція для відображення цитати
function displayQuote(quoteData) {
  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');

  if (quoteData) {
    quoteText.textContent = quoteData.quote;
    quoteAuthor.textContent = quoteData.author;
  }
}
