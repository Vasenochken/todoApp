import Title from "./title/title";
import NewTaskForm from "./newTaskForm/newTaskForm.js";

const Header = () => {
    return (
        <header>
            <Title />
            <NewTaskForm />
        </header>
    );
};

export default Header;