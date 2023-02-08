import TodoList from "./todoList/todoList.js";
import Footer from "./footer/footer.js";

const SectionMain = () => {
    const todoData = [ 
        { label: 'Drinck coffe', important: false, id: 1},
        { label: 'run', important: true, id: 2},
        { label: 'song', important: false, id: 3},
    ];

    return (
        <section className="main">
            <TodoList todos={ todoData }/>
            <Footer />
        </section>
    );
};

export default SectionMain;