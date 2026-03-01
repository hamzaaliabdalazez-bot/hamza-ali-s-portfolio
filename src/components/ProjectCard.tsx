import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork, Clock } from "lucide-react";
import type { Repo } from "@/lib/github";

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};

interface ProjectCardProps {
  repo: Repo;
  index: number;
}

const ProjectCard = ({ repo, index }: ProjectCardProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass-card rounded-xl p-6 flex flex-col group hover:border-primary/30 transition-all duration-300 hover:glow-red"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-display font-semibold text-base capitalize truncate pr-2 group-hover:text-primary transition-colors">
          {repo.name.replace(/-/g, " ")}
        </h3>
        <div className="flex items-center gap-3 text-muted-foreground text-xs shrink-0">
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1">
              <Star size={12} /> {repo.stargazers_count}
            </span>
          )}
          {repo.forks_count > 0 && (
            <span className="flex items-center gap-1">
              <GitFork size={12} /> {repo.forks_count}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
        {repo.description || "No description available."}
      </p>

      {/* Language + Date */}
      <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
        {repo.language ? (
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span>{repo.language}</span>
          </div>
        ) : (
          <span />
        )}
        <span className="flex items-center gap-1">
          <Clock size={11} /> {formatDate(repo.updated_at)}
        </span>
      </div>

      {/* Topics */}
      {repo.topics?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.topics.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3 mt-auto pt-2 border-t border-border/50">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github size={14} /> Code
        </a>
        {repo.liveUrl && (
          <a
            href={repo.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:brightness-110 transition-all"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
