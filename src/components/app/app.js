import Header from "../header";
import SectionMain from "../main"
import './app.css'

const App = () => {

    return (
        <div className="bdy">
        <section className="todoApp">
            <Header />
            <SectionMain />
        </section>
        </div>
    );
};

export default App;