import { LoginForm } from '@/_libs/features/auth/ui/login-form';
import { ModeToggle } from '@/_libs/shared/components/common/mode-toggle';
import Logo from '@public/images/logo.png';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <>
      <header className="flex justify-between items-center p-4">
        <div className="w-9 h-9" />
        <h1 className="text-2xl font-bold">CNU - SEDIUN</h1>
        <ModeToggle />
      </header>
      <main className="flex flex-col items-center p-4 gap-8">
        <Image src={Logo} alt="logo" className="w-24 h-24" />
        <LoginForm />
      </main>
    </>
  );
}
