<diff>
      <div>
        <span style="color: green;">+</span> const apiKey = 'your-actual-api-key';
        <span style="color: green;">+</span> const headers = {
        <span style="color: green;">+</span>   'x-api-key': apiKey,
        <span style="color: green;">+</span>   'Content-Type': 'application/json'
        <span style="color: green;">+</span> };
        <span style="color: green;">+</span>
        <span style="color: green;">+</span> fetch('https://your-api-endpoint.com/data', {
        <span style="color: green;">+</span>   method: 'POST',
        <span style="color: green;">+</span>   headers: headers,
        <span style="color: green;">+</span>   body: JSON.stringify(yourData)
        <span style="color: green;">+</span> })
        <span style="color: green;">+</span>   .then(response => response.json())
        <span style="color: green;">+</span>   .then(data => {
        <span style="color: green;">+</span>     console.log('Success:', data);
        <span style="color: green;">+</span>   })
        <span style="color: green;">+</span>   .catch((error) => {
        <span style="color: green;">+</span>     console.error('Error:', error);
        <span style="color: green;">+</span>   });
      </div>
    </diff>
