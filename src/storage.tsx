import { atom } from 'nanostores';
import uuid4 from 'uuid4';

export type Client = {
  name: string;
  id?: string;
};

export const clients = atom<Client[]>([]);

const asyncDelay = async (delay: number) => {
  new Promise(resolve => {
    setTimeout(() => resolve(''), delay);
  });
};

export const getClients = async () => {
  try {
    await asyncDelay(2700);
    return JSON.parse(localStorage.clients);
  } catch {
    return [];
  }
};

export const saveAllClients = (allClients: Client[]) => {
  localStorage.clients = JSON.stringify(allClients);
};

export const updateClient = async (client: Client) => {
  const clients = await getClients();
  const updClients = clients.map((c: Client) =>
    c.id === client.id ? client : c
  );
  saveAllClients(updClients);
};

export const loadClientsToStore = async () => {
  clients.set(await getClients());
};

export const createClient = async (client: Client) => {
  client.id = uuid4();
  const allClients = [...(await getClients()), client];
  saveAllClients(allClients);
  clients.set([...clients.get(), client]);
};
