#### 1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add. 

Answer: About 8 hours. I would add pagination to make API calls more efficient. However, the API has limitation of 100 items per request and it can not refine address, name, and area at the same time. Area can not be refined at all using the API. In order to make pagination and refine work, I would make multiple requests when submitting to get the whole list of restaurants first then refine them within the store, or make a new request when clicking on pagination and make multiple requests to get the whole list when refining. They are both inefficient way making API calls so a better solution would be making backend changes to the API to have the capability searching multiple queries at the same time. 

#### 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Answer: React.lazy() was added into ReactJS not long ago and I used it to lazy load some components with animation that will only play once when user scroll to it's location. 
```
const lazyChart = React.lazy(() => import('./lazyChart));
```

#### 3. How would you track down a performance issue in production? Have you ever had to do this? 

Answer: I use google Page Speed Insights to find potential optimization options. I also use Ghost Inspector to monitor any visual issues can be seen by user and any error message on the site caused by vendors. On the server side, we use stale cache alert to monitor server performance, use AWS Route53 health check to detect if the server is not reachable, use pm2 list and pm2 logs to check application status, use nginx logs to track NodeJS API issues and use supervisorctl to track GoLang API issues. I’m part of 24/7 support team for our main client to fix any performance issue on their production site. We created a checklist to identify the cause of the issue and either fix it from our end or communicate with our vendors to fix the issue. 

#### 4. How would you improve the API that you just used? 

Answer: Similar to the point I mentioned in the first answer, it would be more helpful if the API can refine multiple queries at the same time to make the API more efficient to use.

#### 5. Please describe yourself using JSON.
Answer:
```json
{
	"name": "Walden Wang",
	"age": 30,
    "gender": "male",
    "email": "waldenwangyayi@gmail.com",
	"phone": "6474720808",
	"hobby": ["boating", "skiing", "gaming"],
	"skils": [{
		"languages": ["English", "Mandarin"],
		"programming languages": ["JS", "NodeJS", "GoLang", "PHP", "Java", "C++"],
		"years of experience": "6"
	}],
	"education": "bechelor dgree of information system",
	"school": "Saint Francis Xavier University"
}
```