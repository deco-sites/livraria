import { PageProps } from "$fresh/server.ts";
import { context } from "$live/live.ts";
import { LivePageData } from "$live/types.ts";
import LiveAnalytics from "$live/components/LiveAnalytics.tsx";
import LiveControls from "$live/components/LiveControls.tsx";
import NotFound from "$store/components/search/NotFound.tsx";
import HeaderSection from "$store/sections/Header.tsx";
import FooterSection from "$store/sections/Footer.tsx";

export default function LivePage({
  data,
}: PageProps<LivePageData | undefined>) {
  const { page, flags } = data ?? {};

  return (
    <>
      <LiveControls
        site={{ id: context.siteId, name: context.site }}
        page={page}
        flags={flags}
      />

      <LiveAnalytics {...page} flags={flags!} />

      <HeaderSection />

      <NotFound />

      <FooterSection />
    </>
  );
}
