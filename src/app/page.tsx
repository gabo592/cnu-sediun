import { ModeToggle } from '@/_libs/shared/components/common/mode-toggle';
import { Button } from '@libs/shared/components/ui/button';

export default function Home() {
  return (
    <>
      <header>
        <ModeToggle />
      </header>
      <main>
        <Button>Click</Button>
      </main>
    </>
  );
}
