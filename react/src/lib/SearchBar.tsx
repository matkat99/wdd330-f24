interface SearchbarProps {
  label: string;
  searchHandler: React.FormEventHandler<HTMLFormElement>;
}

export default function Searchbar({ label, searchHandler }: SearchbarProps) {
  return (
    <form onSubmit={searchHandler}>
      <label htmlFor="query">{label}</label>
      <input type="text" id="query" name="query" />
      <button>Search</button>
    </form>
  );
}
