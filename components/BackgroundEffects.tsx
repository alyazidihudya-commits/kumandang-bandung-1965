export default function BackgroundEffects() {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        {/* Blob gradient oranye - kiri atas */}
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-orange-500/20 to-red-600/10 blur-3xl bg-grid-pattern" />
  
        {/* Blob gradient ungu - kanan tengah */}
        <div className="absolute top-1/3 -right-32 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-purple-600/15 to-blue-600/10 blur-3xl bg-grid-pattern" />
  
        {/* Blob gradient oranye kecil - kiri bawah */}
        <div className="absolute bottom-0 left-1/4 h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-orange-600/10 to-transparent blur-3xl bg-grid-pattern" />
  
        {/* Noise texture tipis di atas semua blob */}
        <div className="absolute inset-0 opacity-[0.04] [background-image:url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22200%22%20height=%22200%22%3E%3Cfilter%20id=%22n%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%224%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23n)%22/%3E%3C/svg%3E')] bg-grid-pattern" />
      </div>
    );
  }