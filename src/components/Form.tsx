type TextInputProps = {
  type: string;
  required?: boolean;
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
};

export const TextInput = ({
  type,
  required,
  name,
  label,
  placeholder,
  value,
}: TextInputProps) => {
  return (
    <label>
      <span>{label}</span>
      <input
        type={type}
        required={required}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
};

type FormProps = {
  children: JSX.Element[];
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = ({ children, onSubmit }: FormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(event);
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};
