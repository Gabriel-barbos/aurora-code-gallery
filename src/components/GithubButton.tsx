import { Github } from "lucide-react";

const GitHubButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group/github relative px-4 py-2 h-12 w-36 bg-gradient-to-r from-[#24292e] to-[#1c2027] text-white rounded-[1.75rem] border border-[#30363d] overflow-hidden flex items-center justify-center font-medium text-sm transition-all duration-300 hover:border-[#404950] hover:shadow-lg hover:shadow-[#24292e]/30 hover:scale-[1.02] active:scale-[0.98]"
  >
    {/* Brilho animado */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/github:translate-x-full transition-transform duration-700" />

    {/* Conteúdo do botão */}
    <div className="relative flex items-center justify-center gap-2">
      <Github className="h-4 w-4 transition-transform duration-300 group-hover/github:rotate-12" />
      {children}
    </div>

    {/* Pulse no hover */}
    <div className="absolute inset-0 rounded-[1.75rem] bg-white/5 scale-0 group-hover/github:scale-100 transition-transform duration-300 opacity-0 group-hover/github:opacity-100" />
  </a>
);

export default GitHubButton;
