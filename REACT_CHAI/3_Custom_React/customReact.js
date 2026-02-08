function customRender(reactElement, container){
    /*
    const domElement=document.createElement(reactElement.type)

    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href', reactElement.props.href) // element to set is href and value of href will be  reactElement.props.href
    domElement.setAttribute('target', reactElement.props.target) // element to set is target and value of href will be  reactElement.props.target
    
    // Now will add this to container we created

    container.appendChild(domElement)
    */

    // Now version 2 using loop if we have multiple attributes and making code modular
    
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children

    for(const prop in reactElement.props){        // key is written as prop as we have object as props
        if(prop === 'children') continue;
        // domElement.setAttribute(prop, reactElement.props.prop); wrong as Because props.prop looks for a key literally named "prop".
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement)

}

const reactElement={
    type: 'a',
    props: { // props is an object in which we can add as much property as possible
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google' // children is 
}

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer)        // What to inject, where to inject