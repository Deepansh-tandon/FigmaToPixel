import OurWorkButton from "./OurWorkButton";
import FeatureCard from "./FeatureCard";

export default function WhyLaunchPadSection() {
  const features = [
    {
      title: "MVP Package",
      description: "Everything you need\n SaaS, web app, or landing page\n build and launch-ready in 2 weeks.",
      imageSrc: "/Untitled (2)/Frame 633.svg"
    },
    {
      title: "Integrations",
      description: "Payments, logins, emails & more.\nWe connect everything so you're ready to\nonboard users from day one.",
      imageSrc: "/Untitled (2)/Frame 633 (1).svg"
    },
    {
      title: "Modern Stack",
      description: "Built with the latest tech and AI\n delivering speed, stability, and scalability for real\n growth.",
      imageSrc: "/Untitled (2)/Frame 633 (2).svg"
    }
  ];

  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Top section with button */}
        <div className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-12">
          <OurWorkButton text="Why LaunchPad Labs" />
          <h2 className="text-center text-gray-900 px-4" style={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 600,
            fontSize: 'clamp(22px, 5vw, 28px)',
            lineHeight: '31px',
            letterSpacing: '0%',
          }}>
            Built faster Built smarter Built by founders
          </h2>
          <p className="text-center text-gray-600 max-w-3xl px-4" style={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 500,
            fontSize: 'clamp(14px, 3vw, 16px)',
            lineHeight: '31px',
            letterSpacing: '0%',
          }}>
            MVPs built faster, smarter, and better - by founders who&apos;ve done it before. We turn your idea into a launch-ready product in just <strong>2 weeks</strong>, using modern tech and proven systems trusted by <strong>50+ funded startups</strong>.
          </p>
        </div>
        
        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1275px] mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} imageSrc={feature.imageSrc} />
          ))}
        </div>
      </div>
    </section>
  );
}

