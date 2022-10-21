import { useStore } from '@nanostores/react';
import { clients } from '../stores/clients';
import { Title } from '../components/Title';
import { Loading } from '../components/Loading';
import { ClientsList } from '../components/ClientsList';
import { Link } from 'react-router-dom';

export const Clients = () => {
  const clientsStore = useStore(clients);

  return (
    <>
      <Title titleName="Клиенты" />
      <Link to="/create">Добавить</Link>
      {clientsStore.isLoading ? (
        <Loading />
      ) : (
        <ClientsList clients={clientsStore.clients} />
      )}
    </>
  );
};
