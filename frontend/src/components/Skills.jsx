const Skills = () => {
  return (
    <section className="py-20 px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Skill Card */}
      <div className="group p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/[0.08] transition-all cursor-pointer">
        <div className="w-12 h-12 bg-[#00c4cc] rounded-2xl mb-6 shadow-[0_8px_20px_rgba(0,196,204,0.3)]" />
        <h3 className="text-2xl font-bold mb-3 text-white">Frontend</h3>
        <p className="text-gray-400 font-medium">React, Tailwind & Magic.</p>
      </div>

      <div className="group p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/[0.08] transition-all cursor-pointer">
        <div className="w-12 h-12 bg-[#7d2ae8] rounded-2xl mb-6 shadow-[0_8px_20px_rgba(125,42,232,0.3)]" />
        <h3 className="text-2xl font-bold mb-3 text-white">Backend</h3>
        <p className="text-gray-400 font-medium">Node.js & Deep Logic.</p>
      </div>
    </section>
  );
};