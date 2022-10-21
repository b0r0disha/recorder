import { Title } from '../components/Title';
import { Form, TextInput } from '../components/Form';
import { Button } from '../components/Button';
import { AddClientProps } from '../storages/clients';
import { createClient } from '../stores/clients';
import { useNavigate } from 'react-router-dom';

export const ClientForm = () => {
  const navigate = useNavigate();
  const onCreateClient = (
    event: React.FormEvent<HTMLFormElement> & {
      currentTarget: HTMLFormElement;
    }
  ) => {
    const data = Object.fromEntries([
      ...new FormData(event.currentTarget).entries(),
    ]) as AddClientProps;

    createClient(data);

    navigate('/');
  };

  return (
    <Form onSubmit={onCreateClient}>
      <Title titleName="Создание клиента" />
      <TextInput type="text" placeholder="Имя Фамилия" required name="name" />
      <TextInput type="text" placeholder="Описание" name="description" />
      <Button type="submit">Создать клиента</Button>
    </Form>
  );
};
