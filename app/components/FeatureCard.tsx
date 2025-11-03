import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function FeatureCard({ title, description, imageSrc }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col w-full flex-shrink-0"
         style={{ boxShadow: '0 2px 21px 0 rgba(0, 0, 0, 0.05)' }}>
      {/* Main content area with image */}
      <div className="flex items-center justify-center p-2">
        <div className="w-[365px] h-[260px] rounded-xl relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            width={365}
            height={260}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Footer section */}
      <div className="bg-white px-4 py-4 flex flex-col gap-2 items-center">
        <h3 className="text-gray-900 text-center" style={{
          fontFamily: 'Plus Jakarta Sans',
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '31px',
          letterSpacing: '0%',
        }}>{title}</h3>
        <p className="text-gray-600 text-center whitespace-pre-line" style={{
          fontFamily: 'Plus Jakarta Sans',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '25px',
          letterSpacing: '0%',
        }}>{description}</p>
      </div>
    </div>
  );
}

