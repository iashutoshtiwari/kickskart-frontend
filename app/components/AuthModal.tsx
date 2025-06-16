'use client';

import type React from 'react';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { closeAuthModal, toggleAuthMode, setAuthError, loginUser } from '../store/authSlice';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AuthModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const { isModalOpen, isSignUp, error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      dispatch(setAuthError('Please fill in all fields'));
      return;
    }

    if (isSignUp) {
      if (!name) {
        dispatch(setAuthError('Please enter your name'));
        return;
      }
      if (password !== confirmPassword) {
        dispatch(setAuthError('Passwords do not match'));
        return;
      }
      if (password.length < 6) {
        dispatch(setAuthError('Password must be at least 6 characters'));
        return;
      }
    }

    // Simulate login/signup
    if (isSignUp) {
      // Simulate successful signup
      dispatch(loginUser({ email, name }));
    } else {
      // Simulate login validation
      if (email === 'test@example.com' && password === 'password') {
        dispatch(loginUser({ email, name: 'Test User' }));
      } else {
        dispatch(setAuthError('Invalid email or password'));
        return;
      }
    }

    // Reset form
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
  };

  const handleClose = () => {
    dispatch(closeAuthModal());
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isSignUp ? 'Create Account' : 'Sign In'}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
          )}

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          {isSignUp && (
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
            </div>
          )}

          {error && <div className="text-sm text-red-500">{error}</div>}

          <Button type="submit" className="w-full bg-black hover:bg-gray-800">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </Button>
        </form>

        <div className="text-center">
          <button
            type="button"
            onClick={() => dispatch(toggleAuthMode())}
            className="text-sm text-gray-600 underline hover:text-black"
          >
            {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
          </button>
        </div>

        {!isSignUp && (
          <div className="text-center text-xs text-gray-500">
            Demo: Use email "test@example.com" and password "password"
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
