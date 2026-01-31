import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { removeFromPastes } from "../redux/Features/pasteSlice";
import {
  FiEdit,
  FiEye,
  FiCopy,
  FiShare2,
  FiTrash2,
} from "react-icons/fi";

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const filtered = pastes.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4">
      <input
        className="w-full p-3 rounded-xl bg-zinc-900 text-white outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="🔍 Search paste..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="mt-6 grid gap-6">
        {filtered.map((paste) => (
          <div
            key={paste._id}
            className="bg-zinc-900/80 rounded-2xl p-5 border border-zinc-700"
          >
            <h2 className="text-xl font-semibold text-purple-400">
              {paste.title}
            </h2>

            <p className="text-zinc-300 mt-2 line-clamp-3">
              {paste.content}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <NavLink
                to={`/?pasteId=${paste._id}`}
                className="icon-btn text-purple-400"
              >
                <FiEdit size={18} />
              </NavLink>

              <NavLink
                to={`/pastes/${paste._id}`}
                className="icon-btn text-blue-400"
              >
                <FiEye size={18} />
              </NavLink>

              <button
                className="icon-btn text-green-400"
                onClick={() => {
                  navigator.clipboard.writeText(paste.content);
                  toast.success("Copied 📋");
                }}
              >
                <FiCopy size={18} />
              </button>

              <button
                className="icon-btn text-yellow-400"
                onClick={() =>
                  navigator.share?.({
                    title: paste.title,
                    text: paste.content,
                  })
                }
              >
                <FiShare2 size={18} />
              </button>

              <button
                className="icon-btn text-red-400"
                onClick={() => dispatch(removeFromPastes(paste._id))}
              >
                <FiTrash2 size={18} />
              </button>
            </div>

            <p className="text-xs text-zinc-500 mt-3">
              {new Date(paste.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pastes;
