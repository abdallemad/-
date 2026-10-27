"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

// ← أضف الفيديو بطريقة من طريقتين:
//   1) ملف mp4 محلي:   localSrc: "/media/videos/video-01.mp4"
//   2) embed يوتيوب:   embedUrl: "https://www.youtube.com/embed/VIDEO_ID"
//   3) embed فيسبوك:   embedUrl: "https://www.facebook.com/plugins/video.php?href=PAGE_VIDEO_URL"
// اتركهم null لإظهار حالة "قريباً"
// poster: صورة معاينة — ضعها في /public/media/videos/poster-01.jpg
const videoItems = [
  {
    id: 1,
    title: "عملية الغسيل من أول لآخر",
    localSrc: null as string | null,
    embedUrl: null as string | null,
    poster: null as string | null,
  },
  {
    id: 2,
    title: "استلام وتوصيل من الباب",
    localSrc: null as string | null,
    embedUrl: null as string | null,
    poster: null as string | null,
  },
  {
    id: 3,
    title: "نتائج مذهلة — قبل وبعد",
    localSrc: null as string | null,
    embedUrl: null as string | null,
    poster: null as string | null,
  },
];

function VideoCard({
  title,
  localSrc,
  embedUrl,
  poster,
}: {
  title: string;
  localSrc: string | null;
  embedUrl: string | null;
  poster: string | null;
}) {
  const [playing, setPlaying] = useState(false);
  const hasVideo = localSrc !== null || embedUrl !== null;

  if (!hasVideo) {
    // Coming soon card
    return (
      <div className="flex aspect-video flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-secondary text-center p-6">
        <span className="rounded-full bg-primary/10 px-4 py-1.5 font-heading text-base font-bold text-primary">
          قريباً
        </span>
        <p className="text-base font-medium text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">الفيديو هيظهر هنا قريباً</p>
      </div>
    );
  }

  if (playing && embedUrl) {
    return (
      <div className="aspect-video overflow-hidden rounded-2xl">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="size-full border-0"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="group relative aspect-video overflow-hidden rounded-2xl bg-secondary">
      {/* Poster image */}
      {poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt={`معاينة فيديو ${title}`}
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
        />
      )}

      {/* Overlay + Play button — triggers the actual video */}
      <button
        onClick={() => {
          if (localSrc) {
            // For local mp4, reveal the <video> element directly
            setPlaying(true);
          } else if (embedUrl) {
            setPlaying(true);
          }
        }}
        aria-label={`شغّلي فيديو ${title}`}
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 transition-colors hover:bg-black/55"
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform group-hover:scale-110">
          <Play className="size-7 translate-x-0.5" fill="currentColor" aria-hidden="true" />
        </span>
        <span className="px-4 text-center font-heading text-base font-bold text-white drop-shadow">
          {title}
        </span>
      </button>

      {/* Local video — hidden until play is pressed */}
      {playing && localSrc && (
        <video
          src={localSrc}
          autoPlay
          controls
          playsInline
          className="absolute inset-0 size-full object-cover"
          // Lazy: the video element is only mounted after the user clicks play
        />
      )}
    </div>
  );
}

export function VideosSection() {
  return (
    <section id="videos" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="شغلنا"
          title="شوف شغلنا بعينيك"
          subtitle="فيديوهات من المغسلة ومن عند العملاء."
        />

        <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-3">
          {videoItems.map((item) => (
            <StaggerItem key={item.id}>
              <VideoCard
                title={item.title}
                localSrc={item.localSrc}
                embedUrl={item.embedUrl}
                poster={item.poster}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
