import { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { Section } from '../components/styled/UI.styled';
import styled from 'styled-components';
import { getData } from '../helper';
import SingleUserPage from './SingleUserPage';

const UserLink = styled(Link)`
  padding: 0.5em 1em;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  margin-bottom: 4px;
  &:hover {
    background-color: #fff;
  }
`;

function UsersPage(props) {
  // susikurti usersArr state
  const [usersArr, setUsersArr] = useState([]);
  // su useEffect supildyti state su duomenimis is https://dummyjson.com/users
  useEffect(() => {
    getData(setUsersArr);
  }, []);

  return (
    <Section>
      <h1>UsersPage</h1>
      <p>This is our users</p>

      <Route path={'/users/:userId'}>
        <SingleUserPage />
      </Route>

      <ol>
        {/* is usersArr pagaminti li elementus su vardu ir pavarde */}
        {usersArr.map((uObj) => (
          <li key={uObj.id}>
            <UserLink to={`/users/${uObj.id}`}>
              {uObj.firstName} {uObj.lastName} (id:{uObj.id})
            </UserLink>
          </li>
        ))}
      </ol>
    </Section>
  );
}
export default UsersPage;

// const usersWithNameAndId = dataInJs.users.map((uOb) => ({
//   id: uOb.id,
//   firstName: uOb.firstName,
//   lastName: uOb.lastName,
//   age: uOb.age,
// }));
// console.log(JSON.stringify(usersWithNameAndId));
