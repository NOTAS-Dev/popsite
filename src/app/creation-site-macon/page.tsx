import { buildMetierMetadata, MetierPageShell } from '@/lib/metierPage';

export const metadata = buildMetierMetadata('macon');

export default function Page() {
  return <MetierPageShell slug="macon" />;
}
