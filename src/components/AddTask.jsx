import { useState } from "react";
import Input from "./props";

function AddTask({ onTaskSumit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Digite o titulo da tarefa"
      />
      <Input
        type="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Digite a descrição da tarefa"
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha os campos vazios.");
          }
          onTaskSumit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
