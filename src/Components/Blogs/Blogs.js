import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>Context API</h1>
            <p>Generally we pass data using props in react. If we need to pass data to grand child component we have to first pass data to the first child component.then the child component pass data to it's child component using props.Then the grand child component get the data and use the data. But using context api we can get rid of the fact. Using context api a component can pass data to it's all child and grand child component.that's why we can use data in any child component using context api.</p>
            <h1>Semantic Tag</h1>
            <p>Semantic tag describe the purpose of the element and the type of content indisde that element. In modern web browser
semantic tag is very important. Browser can understant what type of this element to be shown . 
By adding semantic tags to our document, we provide additional information about that document.
That clarity is also communicated with search engines, ensuring that the right pages are delivered for the right queries.
Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.</p>
        </div>
    );
};

export default Blogs;