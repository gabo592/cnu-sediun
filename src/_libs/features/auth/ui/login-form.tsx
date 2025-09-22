'use client';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/_libs/shared/components/ui/form';
import { useLoginForm } from '../hooks/login-form';
import { Input } from '@/_libs/shared/components/ui/input';
import { Button } from '@/_libs/shared/components/ui/button';
import Link from 'next/link';

export const LoginForm = () => {
  const { form, isPending, onSubmit } = useLoginForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-4 w-full max-w-md"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Escriba aquí..." {...field} />
              </FormControl>
              <FormDescription>
                Ingrese el correo electrónico con el que crearon su cuenta.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Escriba aquí..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Ingrese la contraseña con la que crearon su cuenta.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button>Iniciar Sesión</Button>
        <Button asChild variant="outline">
          <Link href="/auth/register">Crear Cuenta</Link>
        </Button>
      </form>
    </Form>
  );
};
