import { useStore } from '@nanostores/react';
import React, { useEffect, useMemo, useState } from 'react';
import uuid4 from 'uuid4';
import {
  getClients,
  createClient,
  saveAllClients,
  loadClientsToStore,
  Client,
  clients,
} from '../storage';

export const Test = () => {
  useEffect(() => {
    loadClientsToStore();
  }, []);

  const allClients = useStore(clients);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          const data = new FormData(e.currentTarget).get('client') as string;

          createClient({ name: data });
        }}
      >
        <input type="text" required={true} name="client" />

        <button type="submit">+</button>
      </form>
      {allClients.map(c => (
        <div>{c.name}</div>
      ))}
    </>
  );
};
