import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList.jsx';
import Filter from './components/Filter/Filter';
import Header from './components/header/header';
import Wrapper from './wrapper.styled';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <ContactForm />
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

export default App;
