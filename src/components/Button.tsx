type Buttonprops = {
  handleClick: () => void;
};

export const Button = (props: Buttonprops) => {
  return <button onClick={props.handleClick}>CLick</button>;
};
