export function AcaJuris() {
  return (
    <>
      <span style={{ fontWeight: 600 }}>ACA</span>
      <span style={{ fontWeight: 400 }}>Juris</span>
    </>
  );
}

export function formatAcaJuris(text) {
  if (typeof text !== "string" || !text.includes("ACAJuris")) {
    return text;
  }

  return text.split("ACAJuris").map((part, index, parts) => (
    <span key={index}>
      {part}
      {index < parts.length - 1 && <AcaJuris />}
    </span>
  ));
}
