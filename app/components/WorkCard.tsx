import Image from "next/image";
import Link from "next/link";

interface WorkCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  imageAlt?: string;
}

export default function WorkCard({ title, description, tags, imageUrl, imageAlt }: WorkCardProps) {
  return (
    <div
      className="bg-white rounded-2xl p-4 shadow-sm flex flex-col lg:flex-row gap-8 lg:gap-20 justify-end overflow-hidden"
      style={{
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
      }}
    >
      {/* Left Section - Content */}
      <div className="flex-1 flex flex-col justify-between px-2">
        {/* Title */}
        <h2
          className="mb-4 lg:mb-0"
          style={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 600,
            fontSize: '26px',
            lineHeight: '31px',
            letterSpacing: '0%',
            color: 'rgba(64, 64, 64, 1)',
          }}
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className="lg:-mt-8 mb-6 lg:mb-0"
          style={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 500,
            fontSize: '15px',
            lineHeight: '24px',
            letterSpacing: '0%',
            color: 'rgba(104, 104, 104, 1)',
          }}
        >
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6 lg:-mt-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full"
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0%',
                color: 'rgba(0, 0, 0, 1)',
                background: 'rgba(225, 239, 249, 1)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Case Study Button */}
        <Link href="/flow" className="self-start">
          <div
            className="rounded-full p-[2px]"
            style={{
              background: 'linear-gradient(90deg, #9CC6FF 0%, #00D0FF 100%)',
            }}
          >
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white"
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0%',
                color: 'rgba(0, 0, 0, 1)',
              }}
            >
              View Case Study
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12L12 4M12 4H8M12 4V8" stroke="rgba(0, 0, 0, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </Link>
      </div>

      {/* Right Section - Image Placeholder */}
      <div className="flex-1 lg:-mr-60">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            width={500}
            height={400}
            className="w-full h-full min-h-[317px] object-cover rounded-xl shadow-lg"
            style={{
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
          />
        ) : (
          <div
            className="w-full max-w-[500px] h-full min-h-[317px] rounded-xl z-40 shadow-lg"
            style={{
              background: 'rgba(255, 255, 255, 1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
          ></div>
        )}
      </div>
    </div>
  );
}

