import UserClass from './UserClass'
import User from './User';
import { useEffect } from 'react';
const About = () => {
    
   
    useEffect(()=>{
      console.log('it is didMount function in class component')
      // this is used to call an api
    },[])

    console.log('render parent')
    return (
      <>
        <h1>About</h1>
        <UserClass title={"class wala hai ye ok"} />
        <User    title={"function wala hai ye ok"}/>
        <p>
          Appu Kumar
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          voluptate cupiditate aut aliquid culpa assumenda! Hic nobis dolor
          molestias neque in alias, facere porro harum, debitis eveniet ullam
          tempore voluptate. Rerum numquam accusamus doloremque et officia? Id
          quis, repellendus ducimus temporibus veniam animi accusamus architecto
          voluptatibus vitae reprehenderit exercitationem culpa laboriosam
          voluptate error, odio nihil eaque laborum! Consectetur, debitis iure.
        </p>
      </>
    );
  };
  
  export default About;
  