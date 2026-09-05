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

export function LocationIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c-3.7 0-6.7 3-6.7 6.7 0 5 6.7 12.9 6.7 12.9s6.7-7.9 6.7-12.9c0-3.7-3-6.7-6.7-6.7Zm0 9.1a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Z" />
    </svg>
  );
}

export function PhoneIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8.2 3.6c.3-.3.8-.4 1.2-.2l2.2 1c.4.2.7.6.7 1.1l-.2 2.3c0 .3-.2.6-.4.8l-1.1 1.1a12.2 12.2 0 0 0 5.7 5.7l1.1-1.1c.2-.2.5-.4.8-.4l2.3-.2c.5 0 .9.3 1.1.7l1 2.2c.2.4.1.9-.2 1.2l-1.5 1.5c-.4.4-1 .6-1.6.5-3.3-.5-6.4-2.3-8.8-4.7S4.6 9.9 4.1 6.6c-.1-.6.1-1.2.5-1.6L8.2 3.6Z" />
    </svg>
  );
}

export function YouTubeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.8 15.6V8.4L15.8 12l-6 3.6Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1ZM17 6.9a1.1 1.1 0 1 0 1.1 1.1A1.1 1.1 0 0 0 17 6.9Z" />
      <path d="M12 4.4c2.7 0 3 0 4.1.1a4 4 0 0 1 2.7 1.5 4 4 0 0 1 .7 2.3c.1 1.1.1 1.4.1 4.1s0 3-.1 4.1a4 4 0 0 1-1.5 2.7 4 4 0 0 1-2.3.7c-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1a4 4 0 0 1-2.7-1.5 4 4 0 0 1-.7-2.3C4.4 15 4.4 14.7 4.4 12s0-3 .1-4.1a4 4 0 0 1 1.5-2.7 4 4 0 0 1 2.3-.7C9 4.4 9.3 4.4 12 4.4Zm0-1.8c-2.7 0-3.1 0-4.2.1A5.8 5.8 0 0 0 3.9 4 5.8 5.8 0 0 0 2.7 7.8C2.6 8.9 2.6 9.3 2.6 12s0 3.1.1 4.2A5.8 5.8 0 0 0 4 20.1a5.8 5.8 0 0 0 3.8 1.2c1.1.1 1.5.1 4.2.1s3.1 0 4.2-.1A5.8 5.8 0 0 0 20.1 20a5.8 5.8 0 0 0 1.2-3.8c.1-1.1.1-1.5.1-4.2s0-3.1-.1-4.2A5.8 5.8 0 0 0 20 3.9 5.8 5.8 0 0 0 16.2 2.7C15.1 2.6 14.7 2.6 12 2.6Z" />
    </svg>
  );
}

export function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.4 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H8.2v3.2h2.8V22h3.4Z" />
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
