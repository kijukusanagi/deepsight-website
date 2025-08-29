'use client';

export default function NavButton({ 
  href, 
  children, 
  variant = 'primary' 
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const handleClick = () => {
    window.location.href = href;
  };

  if (variant === 'secondary') {
    return (
      <button 
        onClick={handleClick}
        className="px-10 py-5 rounded-xl border border-white/20 text-white hover:bg-white/5 transition text-xl"
        style={{fontFamily: 'Poppins'}}
      >
        {children}
      </button>
    );
  }

  return (
    <button 
      onClick={handleClick}
      className="px-10 py-5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-black font-semibold transition text-xl"
      style={{fontFamily: 'Poppins'}}
    >
      {children}
    </button>
  );
}