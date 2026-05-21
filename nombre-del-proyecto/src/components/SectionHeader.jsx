export default function SectionHeader({ label, title }) {
  return (
    <div className="section-header-wrapper">
      <div className="section-header">
        <span className="section-label">{label}</span>
        <h2>{title}</h2>
      </div>
      <div className="section-divider" />
    </div>
  )
}
