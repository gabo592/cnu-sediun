import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginFormSchema } from '../model/types';
import { loginFormSchema } from '../model/schemas';
import { useTransition } from 'react';

export const useLoginForm = () => {
  const [isPending, startTrasition] = useTransition();

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: LoginFormSchema) {
    startTrasition(() => {
      console.log('Login Form Values', values);
    });
  }

  return {
    form,
    onSubmit,
    isPending,
  };
};
