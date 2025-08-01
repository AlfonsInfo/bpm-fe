'use client';

import { Input } from '@/components/ui/input';
import { useLogin } from '@/hooks/auth.mutate';
import { Button } from 'primereact/button';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoadingLogin } = useLogin();
  
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    login({ email, password }); 
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-md"
      >
        <h1 className="mb-6 text-2xl font-semibold">Login</h1>

        <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="mb-4 w-full rounded border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
        />

        <label htmlFor="password" className="mb-2 block font-medium text-gray-700">
          Password
        </label>
        <Input
          id="password"
          type="password"
          placeholder="*******"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="mb-6 w-full rounded border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
        />

        <Button
          loading={isLoadingLogin}
          type="submit"
         >
          Sign In
        </Button>
      </form>
    </div>
  );
}
