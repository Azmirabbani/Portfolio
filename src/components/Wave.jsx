// Garis gelombang ungu untuk latar hero (dibuat dari rumus, bukan gambar).
export default function Wave() {
  const lines = Array.from({ length: 26 }, (_, i) => {
    const t = i / 25;
    return `M 1500 ${30 + t * 120} C 1100 ${90 + t * 70}, 980 ${470 - t * 30}, 640 ${450 + t * 70} S 220 ${560 + t * 20}, -120 ${470 + t * 110}`;
  });
  return (
    <svg className="wave" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      {lines.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="var(--wave)" strokeWidth="1.2" opacity={0.35 + (i % 5) * 0.08} />
      ))}
    </svg>
  );
}
