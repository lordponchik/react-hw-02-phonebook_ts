interface Props {
  filter: string;
  handleFilter(evt: React.ChangeEvent<HTMLInputElement>): void;
}

const Filter = ({ filter, handleFilter }: Props) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleFilter} value={filter} />
    </div>
  );
};

export default Filter;
