import Form from "../components/Form";
import { List } from "../components/List";
import { getTodos } from "../querys/getTodos";

export const dynamic = "force-dynamic";

const ListPage = async () => {
  const data = await getTodos();
  return (
    <div>
      <h2>TodoList</h2>
      <List data={data} />
      <Form />
    </div>
  );
};

export default ListPage;
