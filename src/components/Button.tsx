type ButtonProps = {
  children: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
};

export const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};
