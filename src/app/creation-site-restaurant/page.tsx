import { buildMetierMetadata, MetierPageShell } from '@/lib/metierPage';

export const metadata = buildMetierMetadata('restaurant');

export default function Page() {
  return <MetierPageShell slug="restaurant" />;
}
