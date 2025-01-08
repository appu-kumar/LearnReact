import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ReactDOM from 'react-dom/client'


const Main = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<Main />);          // it compares virtual dom and real dom   basically it converts React Element into HTML Element