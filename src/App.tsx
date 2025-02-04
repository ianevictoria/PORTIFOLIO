import { useState } from 'react';
import { Brain, Sparkles, Notebook as Robot, Network, Github, Linkedin, BookText as TikTok, Mail, MessageCircle, Code, Database, Cpu, Sun, Moon } from 'lucide-react';

const stats = {
  experience: 3,
  projects: 20,
  clients: 15
};

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`neural-bg theme-${theme} min-h-screen text-[color:var(--text-primary)] overflow-hidden relative`}>
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 animate-blob mix-blend-multiply filter blur-xl opacity-70 bg-gradient-to-r from-purple-300 via-pink-500 to-blue-400 rounded-full" 
             style={{ animation: 'blob 25s infinite', left: '20%', top: '20%' }} />
        <div className="absolute inset-0 animate-blob animation-delay-2000 mix-blend-multiply filter blur-xl opacity-70 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full"
             style={{ animation: 'blob 30s infinite', right: '20%', top: '30%' }} />
        <div className="absolute inset-0 animate-blob animation-delay-4000 mix-blend-multiply filter blur-xl opacity-70 bg-gradient-to-r from-pink-400 via-blue-500 to-purple-400 rounded-full"
             style={{ animation: 'blob 35s infinite', left: '30%', bottom: '20%' }} />
      </div>

      {/* Right Navigation */}
      <nav className="fixed bottom-8 right-8 bg-[color:var(--card-bg)] backdrop-blur-lg p-6 rounded-2xl border border-[color:var(--border-color)] z-50">
        <div className="flex gap-8">
          <a href="#" className="p-4 rounded-lg transition-all hover:scale-110 hover:bg-purple-500/20 bg-purple-500/30">
            <Brain size={48} className="animate-pulse" />
          </a>
          <a href="#" className="p-4 rounded-lg transition-all hover:scale-110 hover:bg-purple-500/20">
            <Robot size={48} />
          </a>
          <a href="#" className="p-4 rounded-lg transition-all hover:scale-110 hover:bg-purple-500/20">
            <Network size={48} />
          </a>
          <a href="#" className="p-4 rounded-lg transition-all hover:scale-110 hover:bg-purple-500/20">
            <Sparkles size={48} />
          </a>
        </div>
      </nav>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-8 right-8 z-50 p-4 rounded-full bg-[color:var(--card-bg)] backdrop-blur-lg border border-[color:var(--border-color)] hover:scale-110 transition-transform"
      >
        {theme === 'dark' ? <Sun size={36} /> : <Moon size={36} />}
      </button>

      <main className="flex flex-col lg:flex-row gap-12 lg:gap-24 p-8 lg:p-12 pt-32 max-w-[1920px] mx-auto relative z-10">
        <div className="w-full lg:w-[600px] bg-[color:var(--card-bg)] backdrop-blur-lg p-12 rounded-3xl border border-[color:var(--border-color)] relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop"
            alt="Profile"
            className="w-[300px] h-[300px] rounded-full mx-auto mb-8 border-4 border-purple-500/50 hover:border-purple-400 transition-colors"
          />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center mb-4">Iane Victória</h2>
          <p className="text-2xl text-center font-medium mt-2">AI Engineering e Data Science</p>
          <p className="text-xl text-center opacity-80 mt-2">Brasil</p>
          
          <div className="flex justify-center gap-8 my-12">
            <a href="#" className="hover:text-purple-400 transition-colors hover:scale-110 transform">
              <Github size={48} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors hover:scale-110 transform">
              <Linkedin size={48} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors hover:scale-110 transform">
              <TikTok size={48} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors hover:scale-110 transform">
              <Mail size={48} />
            </a>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-12 py-4 rounded-xl text-xl font-medium hover:from-purple-600 hover:to-blue-600 transition-all hover:scale-105 shadow-lg shadow-purple-500/20">
            Vamos conversar
          </button>
        </div>

        <div className="flex-1 space-y-12 lg:space-y-16">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight max-w-4xl">
              Transformando dados em 
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                inteligência artificial
              </span>
            </h1>
            
            <p className="opacity-80 text-xl lg:text-2xl max-w-3xl leading-relaxed">
              Especialista em desenvolvimento de soluções de IA, com foco em machine learning,
              deep learning e processamento de linguagem natural. Transformando complexidade
              em simplicidade através da tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-[color:var(--card-bg)] backdrop-blur-lg p-8 rounded-2xl border border-[color:var(--border-color)] hover:border-purple-500/50 transition-colors">
              <Cpu className="w-24 h-24 text-purple-400 mb-6" />
              <h3 className="text-6xl font-bold text-purple-400">+{stats.experience}</h3>
              <p className="text-lg opacity-80 uppercase tracking-wider mt-2">
                Anos de<br />Experiência
              </p>
            </div>
            <div className="bg-[color:var(--card-bg)] backdrop-blur-lg p-8 rounded-2xl border border-[color:var(--border-color)] hover:border-purple-500/50 transition-colors">
              <Code className="w-24 h-24 text-purple-400 mb-6" />
              <h3 className="text-6xl font-bold text-purple-400">+{stats.projects}</h3>
              <p className="text-lg opacity-80 uppercase tracking-wider mt-2">
                Projetos<br />Concluídos
              </p>
            </div>
            <div className="bg-[color:var(--card-bg)] backdrop-blur-lg p-8 rounded-2xl border border-[color:var(--border-color)] hover:border-purple-500/50 transition-colors sm:col-span-2 md:col-span-1">
              <Database className="w-24 h-24 text-purple-400 mb-6" />
              <h3 className="text-6xl font-bold text-purple-400">+{stats.clients}</h3>
              <p className="text-lg opacity-80 uppercase tracking-wider mt-2">
                Clientes<br />Satisfeitos
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            <button className="bg-[color:var(--card-bg)] backdrop-blur-lg px-12 py-6 rounded-xl text-xl font-medium border border-[color:var(--border-color)] hover:border-purple-500/50 transition-all hover:scale-105">
              Explorar projetos de IA 🧠
            </button>
            <div className="flex gap-8 items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-20 h-20" alt="Python" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" className="w-20 h-20" alt="R" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" className="w-20 h-20" alt="AWS" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-20 h-20" alt="Docker" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-20 h-20" alt="MySQL" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-20 h-20" alt="MongoDB" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;