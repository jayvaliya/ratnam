import Image from 'next/image';

export default function BrandLogo({ company, size = 'md' }) {
  const sizeClasses = {
    sm: { container: 'w-20 h-16', logo: 'w-16 h-12' },
    md: { container: 'w-28 h-20', logo: 'w-20 h-16' },
    lg: { container: 'w-36 h-28', logo: 'w-28 h-24' }
  };

  return (
    <div className={`${sizeClasses[size].container} bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center p-2`}>
      <div className={`${sizeClasses[size].logo} relative`}>
        <Image
          src={company.logo}
        //   src={"https://1000logos.net/wp-content/uploads/2020/04/Tata-Logo-1988-768x432.png"}
          alt={`${company.name} logo`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
