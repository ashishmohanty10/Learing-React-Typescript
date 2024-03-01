type PeronProp = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (props: PeronProp) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};
