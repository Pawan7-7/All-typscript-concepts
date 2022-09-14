type nameListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
export const PersonList = (props: nameListProps) => {
  return (
    <div>
      {props.names.map((value) => {
        return <div>{value.first}</div>;
      })}
    </div>
  );
};
