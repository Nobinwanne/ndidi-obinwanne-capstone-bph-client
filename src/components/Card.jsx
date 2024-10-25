export default function Card({ content }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6"> {content}</div>
    </div>
  );
}
