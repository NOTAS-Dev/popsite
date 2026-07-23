import { buildMetierMetadata, MetierPageShell } from '@/lib/metierPage';

export const metadata = buildMetierMetadata('electricien');

export default function Page() {
  return <MetierPageShell slug="electricien" />;
}
