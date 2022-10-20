type TitleProps = {
  titleName: string;
};

export const Title = ({ titleName }: TitleProps) => {
  return <div>{titleName}</div>;
};
