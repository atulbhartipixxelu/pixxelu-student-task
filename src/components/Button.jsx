function Arrow() {
  return (
    <svg className="btn-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h9.2M8.8 4.2 13 8l-4.2 3.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Button({
  href,
  type = "button",
  variant = "fill",
  className = "",
  children,
  ...rest
}) {
  const classes = ["pixxelu_button", variant === "outline" ? "white_bg_btn" : "", className]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      <span className="text">
        {children}
        <Arrow />
      </span>
      <span className="item_flex">
        {children}
        <Arrow />
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {inner}
    </button>
  );
}
