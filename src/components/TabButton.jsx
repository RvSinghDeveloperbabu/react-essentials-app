export default function TabButton({ children }) {
  function handleClick() {
    console.log("I am working");
  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
