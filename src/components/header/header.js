import { FaAddressBook } from 'react-icons/fa';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: yellowgreen;
  }
`;

const Header = () => {
  return (
    <>
      <h1>
        <Link href="/">
          PHONEBOOK <FaAddressBook />
        </Link>
      </h1>
    </>
  );
};

export default Header;
