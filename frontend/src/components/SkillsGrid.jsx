const SkillsGrid = () => {
  const skills = [
    { title: "MERN Stack", level: "Expert" },
    { title: "LLM APIs", level: "Intermediate" },
    { title: "Python/DSA", level: "Advanced" },
    { title: "REST APIs", level: "Expert" },
    { title: "Cloudinary", level: "Expert" },
    { title: "Tailwind", level: "Expert" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-10">
      <p className="text-[#7d2ae8] font-black tracking-[0.5em] mb-4 uppercase text-[10px]">Capabilities</p>
      <h2 className="text-6xl font-black mb-20 italic">The Toolkit.</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skills.map((s, i) => (
          <div key={i} className="p-12 bg-zinc-900 border border-white/5 rounded-[2.5rem] hover:bg-zinc-800 transition-all group">
            <h4 className="text-3xl font-bold mb-2">{s.title}</h4>
            <p className="text-gray-500 uppercase tracking-widest text-[10px] font-black group-hover:text-[#00c4cc]">{s.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;