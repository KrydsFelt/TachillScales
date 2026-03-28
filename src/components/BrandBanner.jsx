import './BrandBanner.css';

const brands = [
  'TechStart',
  'GrowthHub',
  'DataFlow',
  'CloudVision',
  'NextGen',
  'PureMotion',
  'BrightScale',
  'InnovateLabs',
  'PeakPerform',
  'VelocityX',
  'DigitalPro',
  'FutureFrame',
];

export function BrandBanner() {
  // Double the array for seamless loop
  const repeatedBrands = [...brands, ...brands];

  return (
    <section className="brand-banner">
      <div className="brand-banner-content">
        <div className="brands-scroll">
          {repeatedBrands.map((brand, index) => (
            <div key={index} className="brand-item">
              <span className="brand-name">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
