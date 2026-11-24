// Decorative strip between the Services and Stats sections (the dark
// wedge + light-blue "paper fold" flap seen in the Figma design).
export function SectionTransition() {
  return (
    <div className="section-transition" aria-hidden="true">
      <div className="section-transition__flap" />
    </div>
  );
}
