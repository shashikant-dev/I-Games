export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-theme-bg-primary via-theme-bg-primary/95 to-theme-bg-primary z-10" />

      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] animate-[grid-flow_20s_linear_infinite]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233B82F6' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Animated Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 animate-pulse-slow">
        <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-[100px] animate-float" />
      </div>

      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] animate-pulse-slower">
        <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-[120px] animate-float-delayed" />
      </div>

      {/* Additional Subtle Patterns */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
}