
import fetch from 'node-fetch';

const getQuote = () => {
    const api_url = 'https://zenquotes.io/api/random/[your_key]';

    fetch(api_url).then((resp) => resp.json()).then(function(data) {
    let quote = data;
    document.write(data);
    })
};