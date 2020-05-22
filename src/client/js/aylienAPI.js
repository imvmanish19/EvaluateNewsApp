let baseURL = 'https://api.aylien.com/api/v1/classify';

function handleSubmit(event) {
    event.preventDefault();
    const url = document.getElementById('url-entered').value;
    let urlObj = {
        text: url
    }
    console.log(urlObj)
    console.log(urlObj.text)
    fetch('/urlEvaluater',{
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(urlObj)
    })
    .then(response => response.json())
    .then(data => {
        let resultingData = document.getElementById('results');
        let output = `
        <ul>
        <li>Polarity: ${data.polarity}</li>
        <li>Polarity Confidence: ${data.polarity_confidence}</li>
        <li>Subjectivity: ${data.subjectivity}</li>
        <li>Subjectivity Confidence: ${data.subjectivity_confidence}</li>
        <li>Text: ${data.text}</li>
        </ul>
        `
        resultingData.innerHTML = output;
        resultingData.style.cssText = `
            margin-top: 50px;
            font-size: 24px;
            background-color: purple;
            color: white;
            padding: 20px;
        `
    })
}

export {handleSubmit}