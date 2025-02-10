# Tasteology Webpage - HTML, TS, Tailwind and Webpack 

# Build
Steps to build and start app

1. Run command ``` npm install ```
2. Run command ``` npm run build ```

# Build (Static Site Generation)
Steps to build and start app

1. Run command ``` npm install ```
2. Run command ``` npm run build:static ```

# Dev
Steps to start dev app

1. Run command ``` npm install ```
2. Run command ``` npm start ```

# Folder Structure:

based on DDD:

webpack_tasteology/    
├── src/    
│   ├── core/   
│   │   ├── models/                          
│   ├── infrastructure/      
│   │   ├── services/     
│   ├── mock/            
│   ├── presentation/       
│   │   ├── assets/       
│   │   │   ├── css/      
│   │   │   ├── js/      
│   │   │   └── images/      
│   │   ├── pages     
│   │   ├── components          
│   ├── utils/      
├── .gitignore      
├── webpack.config.js
├── webpack.static.config.js                 
├── postcss.config.js      
├── package.json        
├── tailwind.config.js       
├── tsconfig.json      
└── README.md   

# Reasoning Behind My Decisions

## Webpack  
I chose to use Webpack because it is a robust and widely adopted build tool in the industry. Its extensive documentation and active community make it easy to find resources and solutions when needed.  

## Tailwind  
Tailwind is one of my preferred tools for quickly styling applications. It offers flexibility and speed in development, along with a vast selection of free-to-use components available online. While its utility-first approach can sometimes reduce component readability, this can be mitigated by structuring styles in separate CSS files and using variables to improve clarity without cluttering the component’s XML elements.  

## TypeScript  
TypeScript is a powerful tool for preventing errors, improving logic readability, and ensuring that the correct data is used consistently throughout the application. Additionally, it enables the implementation of clean code architectures and best practices such as SOLID and DRY principles.  

## Folder Structure and Architecture Based on DDD  
For me, modularity is one of the most important aspects of my code. With this architecture, I aimed to separate logic, components, and visual elements to enhance readability, reusability, and error handling. Furthermore, this structure simplifies unit testing by allowing both logic and UI components to be tested independently. If a framework change were needed in the future, the existing TypeScript logic and styles could be reused seamlessly.  

## Mock Fake API  
Since the final goal is to dynamically update the document based on data retrieved from a CMS, I decided to create a fake API. Additionally, I implemented a service and a model as if interacting with a real API, ensuring a structured and scalable approach.  
