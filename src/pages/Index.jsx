import { Container, VStack, Text, Input, Button, List, ListItem, ListIcon } from '@chakra-ui/react';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" mb="8">Todo App</Text>
        <Input
          placeholder="Add a new task"
          value={inputValue}
          onChange={handleInputChange}
          size="md"
          width="100%"
        />
        <Button onClick={handleAddTodo} colorScheme="blue" width="100%">Add Task</Button>
        <List spacing={3} width="100%" mt="4">
          {todos.map((todo, index) => (
            <ListItem key={index} display="flex" alignItems="center">
              <ListIcon as={FaCheckCircle} color="green.500" />
              <Text ml="2">{todo}</Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;