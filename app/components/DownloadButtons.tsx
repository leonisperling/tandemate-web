const AppleIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.18 23.76c.3.16.64.19.96.08L15.38 12 3.18.16C2.86.05 2.52.08 2.22.24 1.62.57 1.25 1.2 1.25 1.9v20.2c0 .7.37 1.33.93 1.66zm16.63-9.19-3.23-3.23-2.63 2.63 5.86 3.38c.18.1.37.15.57.15.26 0 .51-.09.72-.25.4-.29.62-.75.6-1.22-.02-.48-.27-.92-.7-1.16l-.19-.1zM4.18 1.86l11.08 11.08-2.82 2.82L4.18 7.55v-5.7zm13.65 7.88-2.59-2.59 2.71-1.56c.43-.25.67-.68.69-1.13.02-.45-.19-.89-.57-1.17-.2-.15-.44-.24-.7-.24-.2 0-.39.05-.57.15l-5.86 3.38 2.63 2.63 3.23-3.23.19-.11c.43-.24.68-.67.7-1.14z" />
  </svg>
);

interface DownloadButtonsProps {
  size?: "sm" | "lg";
  className?: string;
}

export default function DownloadButtons({ size = "sm", className = "" }: DownloadButtonsProps) {
  const iconSize = size === "lg" ? 22 : 20;
  const padding = size === "lg" ? "px-7 py-4" : "px-6 py-3.5";

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <a
        href="https://apps.apple.com/de/app/tandemate/id6761124795?l=en-GB"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-3 ${padding} rounded-2xl bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-colors`}
      >
        <AppleIcon size={iconSize} />
        {size === "lg" ? "Download on App Store" : "App Store"}
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.tandem.mate&pcampaignid=web_share"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-3 ${padding} rounded-2xl bg-[#8FC93A] text-black font-semibold text-sm hover:bg-[#a0df42] transition-colors`}
      >
        <PlayIcon size={iconSize} />
        {size === "lg" ? "Get it on Google Play" : "Google Play"}
      </a>
    </div>
  );
}
