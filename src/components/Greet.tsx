type GreetProp = {
  name: string;
  time: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProp) => {
  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? `Alright lets learn typescript {props.name} within {props.time} days`
          : `Welcome guest`}
      </h1>
    </div>
  );
};

export default Greet;
