import { FaDocker, FaCloudflare, FaReact } from "react-icons/fa6";
import { SiNginx, SiTypescript } from "react-icons/si";
import { ThemeToggle } from "@/components/theme-toggle";
import { VersionBadge } from "@/components/version-badge";

export default function App() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden py-20 md:py-32">
      <div className="absolute top-4 left-4 z-50">
        <VersionBadge />
      </div>
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      {/* Layer 1: Grid Pattern - Light Mode */}
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
          backgroundSize: "6rem 4rem",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 70%)",
          opacity: 0.85,
        }}
      />

      {/* Layer 1: Grid Pattern - Dark Mode */}
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "6rem 4rem",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 70%)",
          opacity: 0.8,
        }}
      />

      <div className="z-10 flex flex-col items-center justify-center text-center max-w-2xl px-4">
        <div className="mb-6 flex justify-center gap-5">
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
            <FaCloudflare className="h-10 w-10 text-primary" />
          </div>
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
            <FaReact className="h-10 w-10 text-primary" />
          </div>
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
            <SiTypescript className="h-10 w-10 text-primary" />
          </div>
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
            <SiNginx className="h-10 w-10 text-primary" />
          </div>
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
            <FaDocker className="h-10 w-10 text-primary" />
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Welcome Page</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          If you're seeing this page access through your domain that tunneling with Cloudflare, it means that your Docker container is running and the Nginx server is up and running.
        </p>
      </div>
    </div>
  )
}