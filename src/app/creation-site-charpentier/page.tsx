import { buildMetierMetadata, MetierPageShell } from '@/lib/metierPage';

export const metadata = buildMetierMetadata('charpentier');

export default function Page() {
  return <MetierPageShell slug="charpentier" />;
}
