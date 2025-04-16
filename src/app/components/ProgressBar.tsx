// components/ProgressBar.tsx
export default function ProgressBar({ progress }: { progress: number }) {
    return (
      <div className="progress-container">
        <div className="progress-bar" style={{ height: `${progress}%` }} />
      </div>
    );
  }
  