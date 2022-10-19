import { atom } from 'nanostores';
import uuid4 from 'uuid4';

type Service = {
  serviceName: string;
  id?: string;
};

const services = atom<Service[]>([]);

const asyncDelay = async (delay: number) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(''), delay);
  });
};

export const getServices = async () => {
  try {
    await asyncDelay(700);
    return JSON.parse(localStorage.services);
  } catch (e) {
    return [];
  }
};

export const createService = async (service: Service) => {
  service.id = uuid4();
};
