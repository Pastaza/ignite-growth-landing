import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { supabase } from '../lib/supabaseClient'; // Import supabase client

const JoinWaitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);
    setIsLoading(true);

    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address.');
      setIsError(true);
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('waitlist') // Assuming a table named 'waitlist'
        .insert([{ email: email }]);

      if (error) {
        throw error;
      }

      setMessage('Successfully joined the waitlist! Check your inbox for updates.');
      setIsError(false);
      setEmail('');
    } catch (error: any) {
      console.error('Error joining waitlist:', error.message);
      setMessage(`Failed to join waitlist: ${error.message || 'Please try again.'}`);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Join Our Waitlist</CardTitle>
          <CardDescription className="mt-2 text-muted-foreground">
            Be the first to know when we launch!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email" className="sr-only">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="appearance-none relative block w-full px-3 py-2 border border-input placeholder-muted-foreground text-foreground focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </form>
          {message && (
            <p className={`mt-4 text-center text-sm ${isError ? 'text-destructive' : 'text-green-600'}`}>
              {message}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default JoinWaitlist;
