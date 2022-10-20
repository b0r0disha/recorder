import { useState, useMemo } from 'react';
import { Client } from '../storages/clients';
import { isMatch } from '../utils/isMatch';

type ClientsListProps = { clients: Client[] };

export const ClientsList = ({ clients }: ClientsListProps) => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  const filteredClients = useMemo(
    () =>
      clients.filter(
        ({ name, description }) =>
          isMatch(name, searchValue) || isMatch(description, searchValue)
      ),
    [searchValue, clients]
  );

  return (
    <>
      <input
        onChange={onChangeSearchValue}
        type="text"
        value={searchValue}
        required
        placeholder="Поиск"
      />
      <div>Список клиентов ({filteredClients.length})</div>
      {filteredClients.map(client => (
        <ul key={client.id}>
          <li>{client.name}</li>
          <li>{client.description}</li>
        </ul>
      ))}
    </>
  );
};
