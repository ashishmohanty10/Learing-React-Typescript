type PassingListProps = {
  name: {
    id: number;
    full_name: string;
  }[];
};

export const PassingList = (props: PassingListProps) => {
  return (
    <>
      {props.name.map((data, index) => (
        <div key={index}>
          <span>{data.id}</span>
          <span>{data.full_name}</span>
        </div>
      ))}
    </>
  );
};
