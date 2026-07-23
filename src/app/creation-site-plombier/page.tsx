import { buildMetierMetadata, MetierPageShell } from '@/lib/metierPage';

export const metadata = buildMetierMetadata('plombier');

export default function Page() {
  return <MetierPageShell slug="plombier" />;
}
