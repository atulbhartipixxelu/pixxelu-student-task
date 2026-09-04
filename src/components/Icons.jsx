export function WhatsAppIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function Caret() {
  return <i className="caret" />;
}

function Stroke({ d }) {
  return (
    <path
      d={d}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

export function TeamIcon({ name, size = 28 }) {
  const icons = {
    uiux: (
      <>
        <Stroke d="M4 5h7v7H4V5Zm9 0h7v4h-7V5Zm0 6h7v8h-7v-8ZM4 14h7v5H4v-5Z" />
        <path d="M16.2 16.2 19 19" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="15.2" cy="15.2" r="1.6" fill="currentColor" />
      </>
    ),
    frontend: (
      <>
        <Stroke d="M4 6h16v10H4V6Zm4 13h8M12 16v3" />
        <Stroke d="m8.5 10 2 2-2 2M15.5 10l-2 2 2 2" />
      </>
    ),
    backend: (
      <>
        <Stroke d="M5 5h14v4H5V5Zm0 5h14v4H5v-4Zm0 5h14v4H5v-4Z" />
        <circle cx="8" cy="7" r="0.8" fill="currentColor" />
        <circle cx="8" cy="12" r="0.8" fill="currentColor" />
        <circle cx="8" cy="17" r="0.8" fill="currentColor" />
      </>
    ),
    commerce: (
      <>
        <Stroke d="M6 8h12l-1 11H7L6 8Z" />
        <Stroke d="M9 8V7a3 3 0 0 1 6 0v1" />
        <Stroke d="M9 13h6" />
      </>
    ),
    marketing: (
      <>
        <Stroke d="M4 18V9l6 3v6H4Z" />
        <Stroke d="M10 12l8-4v12l-8-4" />
        <Stroke d="M20 8v2M20 14v2" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="team-svg"
    >
      {icons[name]}
    </svg>
  );
}

export function CalendarIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect x="3.2" y="5" width="17.6" height="15.2" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.2 10h17.6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3.2v3.6M16 3.2v3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="7.2" y="13.2" width="3.2" height="3.2" rx="0.7" fill="currentColor" />
    </svg>
  );
}

export function ArrowIcon({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h12M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
