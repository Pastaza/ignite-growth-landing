'use client';

export default function SocialProof() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            TRUSTED BY THOUSANDS OF USERS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold">$2M+</p>
              <p className="text-sm text-muted-foreground">Total Value Tracked</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">10K+</p>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">50K+</p>
              <p className="text-sm text-muted-foreground">Gift Cards Managed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">4.9/5</p>
              <p className="text-sm text-muted-foreground">User Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
