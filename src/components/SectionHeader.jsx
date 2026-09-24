import AnimateIn from './AnimateIn';

export default function SectionHeader({ label, title, subtitle, align = 'center', light = false, warmTag = false }) {
  const isCenter = align === 'center';

  return (
    <div className={`section-header ${isCenter ? 'section-header--center' : 'section-header--left'}`}>
      {label && (
        <AnimateIn delay={0}>
          <span
            className={`section-tag ${
              light
                ? 'section-tag--light'
                : warmTag
                ? 'section-tag--warm'
                : ''
            }`}
          >
            {label}
          </span>
        </AnimateIn>
      )}
      <AnimateIn delay={0.08}>
        <h2 className={`section-title ${light ? 'section-title--light' : ''}`}>
          {title}
        </h2>
      </AnimateIn>
      {subtitle && (
        <AnimateIn delay={0.16}>
          <p className={`section-subtitle ${light ? 'section-subtitle--light' : ''}`}>
            {subtitle}
          </p>
        </AnimateIn>
      )}
    </div>
  );
}
