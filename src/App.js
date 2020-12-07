import "./App.css";
import { TaskList } from "./components/TaskList";
import TaskListContextProvider from "./context/TaskListContext";
import { TaskForm } from "./components/TaskForm";
import { Header } from "./components/Header";

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="add-task-wrapper">
          <Header />
          <TaskForm />
        </div>
        <div className="main">
          <TaskList />
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
