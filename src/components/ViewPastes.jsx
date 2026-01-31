import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewPastes = () => {
  const { id } = useParams();
  const pastes = useSelector((state) => state.paste.pastes);

  const paste = pastes.find((p) => p._id === id);

  if (!paste) {
    return (
      <div className="text-center text-red-400 mt-10">
        Paste not found ❌
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <input
        disabled
        value={paste.title}
        className="w-full p-3 rounded-xl bg-zinc-900 text-white opacity-80"
      />

      <textarea
        disabled
        value={paste.content}
        rows={15}
        className="w-full mt-4 p-4 rounded-xl bg-zinc-900 text-white opacity-80"
      />
    </div>
  );
};

export default ViewPastes;
