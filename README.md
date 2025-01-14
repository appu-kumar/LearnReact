# LearnReact

# parcel

- npm install -D parcel
- npx parcel index.html(any file you want to build)
- parcel is the build tool
- parcel execute the file on local server
- Generates cache file
- It compresses the file
- It creates server

-  npm is a package manager it is a reservior
- npm scan package.json and install the dependencies of the projects that's it
- npm init to make project npm understandable
- npm install -D parcel (It is development package ) Parcel is a web application bundler that can be used to build React applications:

# We use two approach in react to render UI   Second approach is best approach 
- Loads --> API ----> Render
- Loads -->Render(UI) --->API ---->Render (useEffect,  after rendering the component it calls a method)

# React Life cylce method diagram
- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# custom hook
- Custom hook is simple js function ok, in custom hook we use inbuilt hook and segregate from the compoenent logic see useOnlineStatus hook
- It follows single responsiblity principle
- Increase Readablity, testability, maintainability etc. 

# Higher Order Component
- A HOC is a function that takes a component as an argument and returns a new component with additional props or functionality.

# State Lifting
- State lifting is a design pattern in React where you move the state from a child component to a common parent component. This approach is used when two or more child components need to share or synchronize data. By lifting the state to the nearest common ancestor, the parent can manage the state and pass it down as props to the child components. , eg. accordions 


# Controlled and Uncontrolled component
- If parent is controlling its children component through props it means children is controlled component, and A component having its own state it is uncontrolled component.


# Context API in react.js
- Create the Context and Give some default value eg.   Mycontext
- Wrap the component or component tree with  < Mycontext.Provider  value={{change the default value MyContext}}> 
- We can Wrap the Component with different values provider just change the value 
- It helps to remove the props drilling somehow 


# Redux or Zustand (Both are Optional, Context API of react is enough for the small and mid-size application okay for large also )
- Redux is state management Library.
- Redux manages state globally.


