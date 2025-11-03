import Link from "next/link";

interface CardProps {
  title: string;
  color?: string;
}

export default function Card({ title, color = 'rgba(185, 221, 251, 1)' }: CardProps) {
  return (
    <div className="bg-white w-[381px] h-[316px] rounded-2xl border border-gray-200 overflow-hidden flex flex-col flex-shrink-0" 
         style={{ boxShadow: '0 2px 21px 0 rgba(0, 0, 0, 0.05)' }}>
      {/* Main content area with light blue background */}
      <div className="flex items-center justify-center p-2">
        <div className="w-[365px] h-[258px] rounded-xl" style={{ backgroundColor: 'rgba(185, 221, 251, 1)' }}>
        </div>
      </div>
      
      {/* Footer section */}
      <div className="bg-white px-4 flex items-center justify-between">
        <h3 className="text-base font-medium text-gray-900">{title}</h3>
        <Link href="/work" className="w-5 h-5 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 15L15 5M15 5V15M15 5H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}