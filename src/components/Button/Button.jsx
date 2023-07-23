export const Button = ({ children, ...props }) => {
  return (
    <button type='button' {...props}>
      {children}
    </button>
  );
};
