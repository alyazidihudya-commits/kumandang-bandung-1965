export default function BackgroundEffects() {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0a0a14]"
      >
        {/* Blob keemasan - kiri atas, seperti cahaya matahari */}
        <div className="absolute -top-40 -left-40 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-amber-400/25 via-orange-500/15 to-transparent blur-3xl" />
  
        {/* Blob pink/magenta - kanan tengah, transisi senja */}
        <div className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-pink-500/20 via-rose-600/15 to-transparent blur-3xl" />
  
        {/* Blob ungu tua - bawah, seperti langit malam menyusul senja */}
        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-purple-700/20 via-indigo-800/15 to-transparent blur-3xl" />
  
        {/* Blob magenta kecil tambahan - tengah, biar transisi lebih kaya */}
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-500/10 via-fuchsia-600/10 to-transparent blur-3xl" />
  
        {/* Noise texture tipis di atas semua blob */}
        <div className="absolute inset-0 opacity-[0.04] [background-image:url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22200%22%20height=%22200%22%3E%3Cfilter%20id=%22n%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%224%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
      </div>
    );
  }