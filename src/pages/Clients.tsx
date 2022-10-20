import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
import { clients, fetchClients } from '../stores/clients';
import { Title } from '../components/Title';
import { Loading } from '../components/Loading';
import { ClientsList } from '../components/ClientsList';

export const Clients = () => {
  const clientsStore = useStore(clients);

  useEffect(() => {
    fetchClients();
  }, []);
  return (
    <>
      <Title titleName="Клиенты" />
      {clientsStore.isLoading ? (
        <Loading />
      ) : (
        <ClientsList clients={clientsStore.clients} />
      )}
    </>
  );
};
