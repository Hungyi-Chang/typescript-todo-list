import React from 'react';
import TodoList from './components/TodoList/TodoList';
import Theme from './styles/theme';

const App: React.FC = () => {
  return (
    <>
      <Theme>
        <TodoList />
      </Theme>

    </>
  );
}

export default App;
