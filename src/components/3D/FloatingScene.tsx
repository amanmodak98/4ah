'use client';

export default function FloatingScene() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Animated gradient blobs */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FF6B35]/30 to-[#F97316]/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#3B82F6]/20 to-[#1E40AF]/10 blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#F97316]/15 to-transparent blur-2xl animate-pulse" />
    </div>
  );
}
