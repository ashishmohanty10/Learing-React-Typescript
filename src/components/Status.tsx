type StatusProp = {
  status: string;
};

export const Status = (props: StatusProp) => {
  let message;

  if (props.status === "loading") {
    message = "loading";
  } else if (props.status === "Data Fetched") {
    message = "Data Fetched";
  } else if (props.status === "Error") {
    message = "Error";
  }

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};
