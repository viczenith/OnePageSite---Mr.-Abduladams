
// // Smooth scroll for navigation links
// document.querySelectorAll('nav a, .cta-button').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Modal functionality
// const modal = document.getElementById('lead-form');
// const openModalBtn = document.querySelector('.cta-button');
// const closeModalBtn = document.querySelector('.close-button');

// openModalBtn.addEventListener('click', function() {
//     modal.style.display = 'block';
// });

// closeModalBtn.addEventListener('click', function() {
//     modal.style.display = 'none';
// });

// window.addEventListener('click', function(event) {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });

// // Form validation
// document.getElementById('leadForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const message = document.getElementById('message').value.trim();

//     if (name === '' || email === '' || message === '') {
//         alert('Please fill in all fields');
//     } else {
//         // For demo purposes, we'll just show an alert. In a real scenario, you might send this data to a server.
//         alert('Form submitted successfully!');
//         modal.style.display = 'none';
//     }
// });

// Fetch latest Bitcoin news and update the slider
// 547e165ed01c47268afcbce48b0d806c
// const apiUrl = `https://newsapi.org/v2/everything?q=Bitcoin&from=${today}&sortBy=popularity&apiKey=${apiKey}`;
// const apiUrl = `https://newsapi.org/v2/top-headlines?q=Bitcoin&from=${today}&sortBy=popularitysources=bbc-news&apiKey=${apiKey}`;
// const apiUrl = `https://newsapi.org/v2/everything?q=Bitcoin&from=${today}&sortBy=popularity&apiKey=${apiKey}`;

// async function fetchBitcoinNews() {
//     const apiKey = '547e165ed01c47268afcbce48b0d806c'; // Replace with your actual News API key
//     const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
//     const apiUrl = `https://newsapi.org/v2/top-headlines?q=Bitcoin&from=${today}&sortBy=popularitysources=bbc-news&apiKey=${apiKey}`;

//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data);
//         // Clear existing news items
//         const newsSlider = document.getElementById('news-slider');
//         newsSlider.innerHTML = '';

//         // Display fetched articles as news items
//         data.articles.forEach(article => {
//             const newsItem = document.createElement('div');
//             newsItem.classList.add('news-item');

//             const newsContent = `
//                 <h3>${article.title}</h3>
//                 <p>${article.description}</p>
//                 <p><strong>Published At:</strong> ${new Date(article.publishedAt).toLocaleString()}</p>
//                 <a href="${article.url}" target="_blank">Read more</a>
//             `;

//             // <p><strong>Source:</strong> ${article.source.name}</p>
//             // <p><strong>Author:</strong> ${article.author}</p>
//             newsItem.innerHTML = newsContent;
//             newsSlider.appendChild(newsItem);
//         });

//         // Start sliding news items
//         let currentNewsIndex = 0;
//         const newsItems = document.querySelectorAll('.news-item');
//         const newsCount = newsItems.length;

//         function slideNews() {
//             newsItems.forEach((item, index) => {
//                 item.style.transform = `translateY(${(index - currentNewsIndex) * 100}%)`;
//             });
//             currentNewsIndex = (currentNewsIndex + 1) % newsCount;
//         }

//         setInterval(slideNews, 5000); // Change news every 5 seconds
//     } catch (error) {
//         console.error('Error fetching Bitcoin news:', error);
//     }
// }

// // Initial call to fetch and display news
// fetchBitcoinNews();

// async function fetchBitcoinNews() {
//     const apiKey = '547e165ed01c47268afcbce48b0d806c'; // Replace with your actual News API key
//     const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
//     // const apiUrl = `https://newsapi.org/v2/top-headlines?q=Bitcoin&from=${today}&sortBy=popularity&apiKey=${apiKey}`;
//     const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=547e165ed01c47268afcbce48b0d806c`;

//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error(`Network response was not ok: ${response.statusText}`);
//         }
//         const data = await response.json();
//         console.log(data);

//         // Clear existing news items
//         const newsSlider = document.getElementById('news-slider');
//         newsSlider.innerHTML = '';

//         // Display fetched articles as news items
//         data.articles.forEach(article => {
//             const newsItem = document.createElement('div');
//             newsItem.classList.add('news-item');

//             const newsContent = `
//                 <h3>${article.title}</h3>
//                 <p>${article.description}</p>
//                 <p><strong>Published At:</strong> ${new Date(article.publishedAt).toLocaleString()}</p>
//                 <a href="${article.url}" target="_blank">Read more</a>
//             `;

//             newsItem.innerHTML = newsContent;
//             newsSlider.appendChild(newsItem);
//         });

//         // Start sliding news items
//         let currentNewsIndex = 0;
//         const newsItems = document.querySelectorAll('.news-item');
//         const newsCount = newsItems.length;

//         function slideNews() {
//             newsItems.forEach((item, index) => {
//                 item.style.transform = `translateX(${(index - currentNewsIndex) * 100}%)`;
//             });
//             currentNewsIndex = (currentNewsIndex + 1) % newsCount;
//         }

//         setInterval(slideNews, 5000); // Change news every 5 seconds
//     } catch (error) {
//         console.error('Error fetching Bitcoin news:', error);
//     }
// }

// // Initial call to fetch and display news
// fetchBitcoinNews();


// async function fetchBitcoinNewsz() {
//     const apiKey = '547e165ed01c47268afcbce48b0d806c'; // Replace with your actual News API key
//     // const apiUrl = `https://newsapi.org/v2/everything?sources=bbc-news&apiKey=${apiKey}`;
//     const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=547e165ed01c47268afcbce48b0d806c`

//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data);

//         // Clear existing news items
//         const newsSliderImg = document.getElementById('news-slider-img');
//         newsSliderImg.innerHTML = '';

//         // Display fetched articles as news items
//         data.articles.forEach(article => {
//             const newsImgItem = document.createElement('div');
//             newsImgItem.classList.add('news-img-item');

//             const newsContentImg = `
//                 <img src="${article.urlToImage}" alt="News Image" class="news-image"/>
//                 <p>${article.description}</p>
//                 <p><strong>Published At:</strong> ${new Date(article.publishedAt).toLocaleString()}</p>
//                 <a href="${article.url}" target="_blank">Read more</a>
//             `;

//             newsImgItem.innerHTML = newsContentImg;
//             newsSliderImg.appendChild(newsImgItem);
//         });

//         // Start sliding news items
//         let currentNewsIndex = 0;
//         const newsItems = document.querySelectorAll('.news-img-item');
//         const newsCount = newsItems.length;

//         function slideNews() {
//             newsSliderImg.style.transition = 'transform 0.5s ease';
//             newsSliderImg.style.transform = `translateX(-${currentNewsIndex * 100}%)`;
//             currentNewsIndex = (currentNewsIndex + 1) % newsCount;
//         }

//         setInterval(slideNews, 5000); // Change news every 5 seconds
//     } catch (error) {
//         console.error('Error fetching Bitcoin news:', error);
//     }
// }

// // Initial call to fetch and display news
// fetchBitcoinNewsz();



// document.addEventListener('DOMContentLoaded', function () {
//     const video = document.getElementById('promo-video');
//     video.play().catch(error => {
//         console.error('Error attempting to play video:', error);
//     });
// });




// document.addEventListener('DOMContentLoaded', async function () {
//     try {
//         const response = await fetch('/fetch_bitcoin_news_images/');
//         if (!response.ok) {
//             throw new Error(`Network response was not ok: ${response.statusText}`);
//         }
//         const data = await response.json();

//         const newsSliderImg = document.getElementById('news-slider-img');
//         newsSliderImg.innerHTML = '';

//         data.forEach(article => {
//             const newsImgItem = document.createElement('div');
//             newsImgItem.classList.add('news-img-item');

//             const newsContentImg = `
//                 <img src="${article.urlToImage}" alt="News Image" class="news-image"/>
//                 <p>${article.description}</p>
//                 <p><strong>Published At:</strong> ${article.published_at}</p>
//                 <a href="${article.url}" target="_blank">Read more</a>
//             `;

//             newsImgItem.innerHTML = newsContentImg;
//             newsSliderImg.appendChild(newsImgItem);
//         });

//         let currentNewsIndex = 0;
//         const newsItems = document.querySelectorAll('.news-img-item');
//         const newsCount = newsItems.length;

//         function slideNews() {
//             newsSliderImg.style.transition = 'transform 0.5s ease';
//             newsSliderImg.style.transform = `translateX(-${currentNewsIndex * 100}%)`;
//             currentNewsIndex = (currentNewsIndex + 1) % newsCount;
//         }

//         setInterval(slideNews, 5000); // Change news every 5 seconds

//     } catch (error) {
//         console.error('Error fetching Bitcoin news:', error);
//     }
// });


document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('promo-video');
    if (video) {
        const playVideo = () => {
            video.play().catch(error => {
                console.error('Error attempting to play video:', error);
            });
        };

        // Play video on the first user interaction
        document.addEventListener('click', playVideo, { once: true });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    async function fetchBitcoinNewsImages() {
        try {
            const response = await fetch('/fetch_bitcoin_news_images/');
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const data = await response.json();

            const newsSliderImg = document.getElementById('news-slider-img');
            newsSliderImg.innerHTML = '';

            data.forEach(article => {
                const newsImgItem = document.createElement('div');
                newsImgItem.classList.add('news-img-item');

                const newsContentImg = `
                    <img src="${article.urlToImage}" alt="News Image" class="news-image"/>
                    <p>${article.description}</p>
                    <p><strong>Published At:</strong> ${article.published_at}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;

                newsImgItem.innerHTML = newsContentImg;
                newsSliderImg.appendChild(newsImgItem);
            });

            let currentNewsIndex = 0;
            const newsItems = document.querySelectorAll('.news-img-item');
            const newsCount = newsItems.length;

            function slideNews() {
                newsSliderImg.style.transition = 'transform 0.5s ease';
                newsSliderImg.style.transform = `translateX(-${currentNewsIndex * 100}%)`;
                currentNewsIndex = (currentNewsIndex + 1) % newsCount;
            }

            setInterval(slideNews, 5000); // Change news every 5 seconds

        } catch (error) {
            console.error('Error fetching Bitcoin news images:', error);
        }
    }

    fetchBitcoinNewsImages();
});

document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('/fetch_bitcoin_news/');
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();

        const newsSlider = document.getElementById('news-slider');
        newsSlider.innerHTML = '';

        data.forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');

            const newsContent = `
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <p><strong>Published At:</strong> ${article.published_at}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;

            newsItem.innerHTML = newsContent;
            newsSlider.appendChild(newsItem);
        });

        // Start sliding news items
        let currentNewsIndex = 0;
        const newsItems = document.querySelectorAll('.news-item');
        const newsCount = newsItems.length;

        function slideNews() {
            newsItems.forEach((item, index) => {
                item.style.transform = `translateX(${(index - currentNewsIndex) * 100}%)`;
            });
            currentNewsIndex = (currentNewsIndex + 1) % newsCount;
        }

        setInterval(slideNews, 5000); // Change news every 5 seconds

    } catch (error) {
        console.error('Error fetching Bitcoin news:', error);
    }
});


// document.addEventListener('DOMContentLoaded', function () {
//     async function fetchBitcoinNewsImages() {
//         try {
//             const response = await fetch('/fetch_bitcoin_news_images/');
//             if (!response.ok) {
//                 throw new Error(`Network response was not ok: ${response.statusText}`);
//             }
//             const data = await response.json();

//             const newsSliderImg = document.getElementById('news-slider-img');
//             newsSliderImg.innerHTML = '';

//             data.forEach(article => {
//                 const newsImgItem = document.createElement('div');
//                 newsImgItem.classList.add('news-img-item');

//                 const newsContentImg = `
//                     <img src="${article.urlToImage}" alt="News Image" class="news-image" onerror="this.src='default-image.jpg'"/>
//                     <p>${article.description}</p>
//                     <p><strong>Published At:</strong> ${article.published_at}</p>
//                     <a href="${article.url}" target="_blank">Read more</a>
//                 `;

//                 newsImgItem.innerHTML = newsContentImg;
//                 newsSliderImg.appendChild(newsImgItem);
//             });

//             let currentNewsIndex = 0;
//             const newsItems = document.querySelectorAll('.news-img-item');
//             const newsCount = newsItems.length;

//             function slideNews() {
//                 newsSliderImg.style.transition = 'transform 0.5s ease';
//                 newsSliderImg.style.transform = `translateX(-${currentNewsIndex * 100}%)`;
//                 currentNewsIndex = (currentNewsIndex + 1) % newsCount;
//             }

//             setInterval(slideNews, 5000); // Change news every 5 seconds

//         } catch (error) {
//             console.error('Error fetching Bitcoin news images:', error);
//         }
//     }

//     fetchBitcoinNewsImages();
// });
