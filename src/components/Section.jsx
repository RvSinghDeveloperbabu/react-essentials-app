export default function Section({ title, children, ...tags }) {
  return (
    <section {...tags}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
