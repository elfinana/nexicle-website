import { Link, useParams, Navigate } from "react-router-dom";
import { updates } from "../data/updates";
import { img } from "../lib/images";

export default function UpdateDetail() {
  const { id } = useParams();
  const update = updates.find((u) => u.id === id);
  const related = updates.filter((u) => u.id !== id).slice(0, 3);

  if (!update) return <Navigate to="/updates" replace />;

  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-16 pb-16">
        <Link to="/updates" className="text-[#362FFA] font-bold text-sm">← Back to Updates</Link>
        <p className="text-[#362FFA] font-semibold tracking-wide mt-8 mb-2">{update.category}</p>
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-3 leading-tight max-w-3xl">{update.title}</h1>
        <p className="text-gray-400 mb-10">{update.date}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-6 text-lg text-gray-700 leading-relaxed">
            {update.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div>
            <img src={img[update.image]} alt="" className="w-full rounded-2xl border border-gray-200" />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">Related Updates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((u) => (
                <Link
                  key={u.id}
                  to={`/updates/${u.id}`}
                  className="block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#362FFA] transition-all"
                >
                  <div className="h-40 bg-gray-50 flex items-center justify-center p-4">
                    <img src={img[u.image]} alt="" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-black leading-snug">{u.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
