import { atom } from 'nanostores';

import {
  addClient,
  AddClientProps,
  Client,
  getAllClients,
} from '../storages/clients';

export type ClientsStore = {
  clients: Client[];
  isLoading: boolean;
};

export const clients = atom<ClientsStore>({
  clients: [],
  isLoading: true,
});

export const fetchClients = () => {
  const onFetch = (allClients: Client[]) => {
    clients.set({
      ...clients.get(),
      clients: [...clients.get().clients, ...allClients],
    });
  };
  getAllClients()
    .then(onFetch, () => [])
    .finally(() => clients.set({ ...clients.get(), isLoading: false }));
};

export const createClient = (props: AddClientProps) => {
  const onCreate = (client: Client) => {
    clients.set({
      ...clients.get(),
      clients: [client, ...clients.get().clients],
    });
  };
  addClient(props).then(onCreate);
};
