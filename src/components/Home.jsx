import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/Features/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId && allPastes.length > 0) {
      const paste = allPastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  const createPaste = () => {
    if (!title.trim() || !value.trim()) return;

    const paste = {
      _id: pasteId || Date.now().toString(36),
      title,
      content: value,
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <input
        className="w-full p-3 rounded-xl bg-zinc-900 text-white outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Paste title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full mt-4 p-4 rounded-xl bg-zinc-900 text-white outline-none focus:ring-2 focus:ring-purple-500"
        rows={15}
        placeholder="Write your paste..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        onClick={createPaste}
        className="mt-4 px-6 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
      >
        {pasteId ? "Update Paste ✨" : "Create Paste 🚀"}
      </button>
    </div>
  );
};

export default Home;
