import { buildMetierMetadata, MetierPageShell } from '@/lib/metierPage';

export const metadata = buildMetierMetadata('couvreur');

export default function Page() {
  return <MetierPageShell slug="couvreur" />;
}
