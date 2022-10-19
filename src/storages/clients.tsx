import { v4 as uuidv4 } from 'uuid';

const asyncDelay = async (delay: number) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(''), delay);
  });
};

export type Client = {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  deletedAt: Date | null;
};

export async function getAllClients() {
  await asyncDelay(800);
  const clients: Client[] = localStorage.clients
    ? JSON.parse(localStorage.clients)
    : [];
  return clients.map(client => ({
    ...client,
    createdAt: new Date(client.createdAt),
    deletedAt: client.deletedAt ? new Date(client.deletedAt) : null,
  }));
}

export async function saveClients(clients: Client[]) {
  localStorage.clients = JSON.stringify(clients);
}

export type AddClientProps = Pick<Client, 'name' | 'description'>;

export async function addClient({ name, description }: AddClientProps) {
  const client: Client = {
    id: uuidv4(),
    name,
    description,
    createdAt: new Date(),
    deletedAt: null,
  };

  const clients = await getAllClients();
  clients.push(client);
  await saveClients(clients);
  return client;
}
