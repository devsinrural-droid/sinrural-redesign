// WhatsApp Business é canal dominante no agro (ver docs/01-site-audit.md §14).
// Número institucional do sindicato. Trocar quando houver linha WhatsApp Business mobile dedicada.
const SINRURAL_PHONE = "553535292650";
const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da SinRural e gostaria de mais informações.";

type Props = {
  message?: string;
  className?: string;
};

export function WhatsAppFAB({ message = DEFAULT_MESSAGE, className }: Props) {
  const href = `https://wa.me/${SINRURAL_PHONE}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp com o sindicato"
      className={[
        "group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center",
        "rounded-full bg-whatsapp text-white",
        "transition-transform duration-200 ease-out hover:scale-105 active:scale-95",
        "[box-shadow:var(--shadow-fab)] hover:[box-shadow:0_0_8px_rgba(0,0,0,0.28),0_12px_18px_rgba(0,0,0,0.18)]",
        "[animation:whatsapp-pulse_2.6s_ease-in-out_infinite] hover:[animation-play-state:paused]",
        className ?? "",
      ].join(" ")}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-current"
        aria-hidden="true"
      >
        <path d="M16.003 3C9.374 3 4 8.374 4 15.003c0 2.426.7 4.69 1.916 6.601L4 28l6.553-1.872A11.96 11.96 0 0 0 16.003 27c6.629 0 12.003-5.374 12.003-12.003 0-6.629-5.374-11.997-12.003-11.997Zm0 21.926a9.92 9.92 0 0 1-5.05-1.382l-.362-.215-3.892 1.111 1.137-3.794-.236-.391a9.94 9.94 0 0 1-1.524-5.252c0-5.494 4.45-9.937 9.927-9.937 5.476 0 9.927 4.443 9.927 9.937 0 5.494-4.45 9.923-9.927 9.923Zm5.722-7.426c-.313-.156-1.852-.913-2.139-1.018-.287-.105-.495-.156-.704.157-.21.313-.808 1.018-.99 1.227-.183.21-.365.234-.679.078-.313-.156-1.323-.488-2.521-1.557-.932-.83-1.561-1.856-1.745-2.169-.183-.313-.02-.482.137-.638.142-.142.313-.365.47-.548.156-.183.21-.313.313-.522.105-.21.052-.391-.026-.548-.078-.156-.704-1.7-.965-2.327-.255-.61-.514-.527-.704-.537-.183-.009-.391-.011-.6-.011-.21 0-.548.078-.835.391-.287.313-1.094 1.069-1.094 2.604 0 1.535 1.12 3.018 1.276 3.226.156.21 2.197 3.355 5.323 4.704 2.553 1.103 3.078.835 3.633.782.554-.052 1.852-.756 2.115-1.487.262-.731.262-1.357.183-1.487-.078-.13-.286-.21-.6-.365Z" />
      </svg>
      <span className="sr-only">WhatsApp · SinRural</span>
    </a>
  );
}
