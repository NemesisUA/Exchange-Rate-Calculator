# Exchange-Rate-Calculator
 ```
 fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {......});
```

**watch get request on chrome:**

![image](https://user-images.githubusercontent.com/70847593/182156938-0934cf6e-581e-4e06-aeda-876bd8f2e462.png)

**after click on request we can see headers:**

![image](https://user-images.githubusercontent.com/70847593/182157667-39300412-49ae-496b-8cca-99e4933b44a8.png)

**and resieved data:**

![image](https://user-images.githubusercontent.com/70847593/182158768-15bdf44f-8d94-4c4e-bc51-5b8097dc8cfc.png)
