import { telLink, whatsappLink } from "@/data/siteConfig";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current">
          <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.64 4.53 1.755 6.41L4 29l7.78-1.71A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.68c-1.94 0-3.75-.52-5.32-1.44l-.38-.22-4.62 1.02 1.03-4.5-.25-.4A9.63 9.63 0 0 1 5.34 15c0-5.87 4.79-10.66 10.66-10.66S26.66 9.13 26.66 15 21.87 24.68 16.004 24.68Zm5.86-7.98c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.51-.16-.73.16-.21.32-.83 1.04-1.02 1.25-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.58-1.6-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.14 3.09 1.3 3.3c.16.21 2.24 3.42 5.43 4.79.76.33 1.35.53 1.82.68.76.24 1.46.2 2 .12.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>
      <a
        href={telLink()}
        aria-label="Call us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-sand shadow-lg shadow-black/20 transition hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
        </svg>
      </a>
    </div>
  );
}
