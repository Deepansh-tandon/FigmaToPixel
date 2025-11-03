interface OurWorkButtonProps {
  text: string;
}

export default function OurWorkButton({ text }: OurWorkButtonProps) {
  return (
    <button className="h-[44px] px-[4px] rounded-[31px] relative cursor-pointer overflow-hidden inline-flex items-center justify-center"
            style={{
              background: '#f2f2f2',
              border: '1px solid #cee3ff',
              boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.06)',
            }}>
      {/* Gradient border using pseudo-element */}
      <div 
        className="absolute inset-0 rounded-[31px] pointer-events-none"
        style={{
          background: 'linear-gradient(rgba(206, 227, 255, 1), rgba(197, 244, 255, 1))',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />
      
      {/* Inner white frame with content */}
      <div className="flex items-center gap-3 px-[16px] py-[4px] bg-white rounded-[83px] h-[36px]">
        {/* Blue icon with 3 concentric circles from Figma - larger */}
        <div className="relative w-[24px] h-[24px] flex-shrink-0">
          {/* Outermost circle (24px) */}
          <div className="absolute inset-0 rounded-full"
               style={{
                 background: 'radial-gradient(circle, rgba(173, 216, 230, 0.6) 0%, rgba(173, 216, 230, 0.3) 50%, transparent 80%)',
               }}
          />
          {/* Middle ring (16px) */}
          <div className="absolute left-[4px] top-[4px] w-[16px] h-[16px] rounded-full bg-blue-400 opacity-50" />
          {/* Inner circle (10px) */}
          <div className="absolute left-[7px] top-[7px] w-[10px] h-[10px] rounded-full bg-blue-600" />
        </div>
        
        {/* Text */}
        <span className="text-black text-[14px]" style={{
          fontFamily: 'Plus Jakarta Sans',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '100%',
          letterSpacing: '0%',
        }}>{text}</span>
      </div>
    </button>
  );
}

