import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>Context API</h1>
            <p>Generally we pass data using props in react. If we need to pass data to grand child component we have to first pass data to the first child component.then the child component pass data to it's child component using props.Then the grand child component get the data and use the data. But using context api we can get rid of the fact. Using context api a component can pass data to it's all child and grand child component.All child and grand child component uses that data directly without helping of props.that's why we can use data in any child component using context api.</p>
            <h1 className='text-center'>Semantic Tag</h1>
            <p>Semantic tag describe the purpose of the element and the type of content indisde that element. In modern web browsersemantic tag is very important. Browser can understant what type of this element to be shown . By adding semantic tags to our document, we provide additional information about that document.That clarity is also communicated with search engines, ensuring that the right pages are delivered for the right queries.Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.</p>

            <h1 className='text-center'>Block, Inline, Inline-block</h1>
            <p><span className='fs-4'>Block:</span> A block level element takes full width of the block.It takes extra space with it's element. </p>
            <p><span className='fs-4'>Inline:</span> An inline element takes necessery space of it's element and it doesn't start with a new line.But we can not set height and width</p>
            <p><span className='fs-4'>Inline-Block:</span> An inline-block element behaves like inline but we can set height and widh.</p>
        </div>
    );
};

export default Blogs;