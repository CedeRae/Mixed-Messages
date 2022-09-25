
//import fetch from 'node-fetch';

const getQuote = () => {
    const api_url = 'https://type.fit/api/quotes';

    fetch(api_url).then((resp) => {
        if (!resp.ok) {
            throw Error("Error");
        }
        return resp.json();
    })
    .then(data => {
        const html = data.map(quote => {
            return `${quote[0].text} - ${quote[0].author}`
        })
        document.querySelector('#quote').insertAdjacentHTML("afterbegin", `<p>${html}</p>`);
    })
    .catch(error => {
        console.log(error);
    })
};

getQuote();