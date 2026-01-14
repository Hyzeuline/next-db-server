import Form from "../components/Form";
import List from "../components/List";

export const dynamic = "force-dynamic";

const ListPage = () => {
  return (
    <div>
      <h2>TodoList</h2>
      <List />
      <Form />
    </div>
  );
};

export default ListPage;
