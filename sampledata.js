import { Db } from "mongodb"

var question = [{
    question_id : "101",
    posted_by: "Pravallika",
    question_title: "Is Java Script single threaded/ multi threaded?",
    question_body: "I would like to know whether Java Script is single threaded/ multi threaded? Please help.",
    tags: [javascript],
    votes: 5,
    views: 50,
    Answers: [
        {
            user: "Raghu",
            answer: "It is a single thread langugae"
        },
        {
            user: "komali",
            answer: "Single threaded"
        }
    ]
},
{
    question_id : "102",
    posted_by: "Raghu",
    question_title: "Is Java Script Asynchronous",
    question_body: "I would like to know whether Java Script is synchronous/Asynchronous? Please help.",
    tags: ["javascript", "reactjs"],
    votes: 2,
    views: 30,
    Answers: [
        {
            user: "Hari",
            answer: "It is Asynhronous"
        }
    ]
}
]



var tags = [
    {
        "tagName" : "javascript",
        "description": "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Note JavaScript is NOT the same as Java! Please include all relevant tags on your question; e.g., [node.js], [jquery], [json], [reactjs], [angular], [ember.js], [vue.js], [typescript], [svelte], etc.",
        "totalQuestions": ""
    },
    {
        "tagName" : "reactjs",
        "description": "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible.",
        "totalQuestions": ""
    },
    {
        "tagName" : "html",
        "description": "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. Questions regarding HTML should include a minimal reproducible example and some idea of what you're trying to achieve. This tag is rarely used alone and is often paired with [CSS] and [JavaScript].",
        "totalQuestions": ""
    },
    {
        "tagName" : "css",
        "description": "CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SVG elements including (but not limited to) colors, layout, fonts, and animations. It also describes how elements should be rendered on screen, on paper, in speech, or on other media.",
        "totalQuestions": ""
    },
    {
        "tagName" : "node.js",
        "description": "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. It is used for developing applications that make heavy use of the ability to run JavaScript both on the client, as well as on server side and therefore benefit from the re-usability of code and the lack of context switching.",
        "totalQuestions": ""
    },
    {
        "tagName" : "arrays",
        "description": "An array is an ordered linear data structure consisting of a collection of elements (values, variables, or references), each identified by one or more indexes. When asking about specific variants of arrays, use these related tags instead: [vector], [arraylist], [matrix]. When using this tag, in a question that is specific to a programming language, tag the question with the programming language being used.",
        "totalQuestions": ""
    },
    {
        "tagName" : "json",
        "description": "JSON (JavaScript Object Notation) is a serializable data interchange format intended to be machine and human readable. Do not use this tag for native JavaScript objects or JavaScript object literals. Before you ask a question, validate your JSON using a JSON validator such as JSONLint (https://jsonlint.com).",
        "totalQuestions": ""
    }
]


