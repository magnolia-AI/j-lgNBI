'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useToast } from "@/hooks/use-toast"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs"

export default function Home() {
  const { toast } = useToast()

  const showToast = () => {
    toast({
      title: "Welcome!",
      description: "Thanks for checking out our awesome website!",
    })
  }

  return (
    <div className="min-h-full bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section with Animated Gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]"></div>
        <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
          <div className="max-w-[800px] mx-auto text-center">
            <Badge className="mb-4 px-3 py-1 text-sm animate-bounce" variant="outline">
              ✨ Welcome to the future
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Discover Amazing Experiences
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
              Unlock a world of possibilities with our cutting-edge platform designed to elevate your digital journey.
            </p>
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="px-8 rounded-full bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-all duration-300">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="px-8 rounded-full border-primary/50 hover:border-primary transition-all duration-300" onClick={showToast}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Featured Carousel Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Highlights</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Explore our most popular offerings and discover what makes us special.
          </p>
        </div>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {[1, 2, 3, 4, 5].map((item) => (
              <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <div className="h-48 bg-muted rounded-t-lg flex items-center justify-center">
                    <span className="text-4xl">🌟</span>
                  </div>
                  <CardContent className="pt-6">
                    <Badge className="mb-2" variant="secondary">Featured</Badge>
                    <h3 className="text-xl font-semibold mb-2">Amazing Feature {item}</h3>
                    <p className="text-muted-foreground">
                      Discover how this incredible feature can transform your experience.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">Learn more</Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </section>

      {/* Tabbed Content Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="features" className="w-full">
            <div className="text-center mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="features" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: "🚀", title: "Lightning Fast", desc: "Experience unparalleled speed and performance." },
                  { icon: "🛡️", title: "Ultra Secure", desc: "Your data is protected with enterprise-grade security." },
                  { icon: "🔄", title: "Seamless Sync", desc: "Work across all your devices with perfect synchronization." },
                  { icon: "🎨", title: "Beautiful Design", desc: "Enjoy an intuitive and visually stunning interface." }
                ].map((item, i) => (
                  <Card key={i} className="overflow-hidden border-0 shadow-md">
                    <CardContent className="p-6 flex gap-4 items-start">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="benefits" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Save Time", desc: "Reduce your workload by up to 50% with our automation tools." },
                  { title: "Increase ROI", desc: "Our customers report an average 3x return on investment." },
                  { title: "Scale Easily", desc: "Grow your operations without growing your overhead." }
                ].map((item, i) => (
                  <Card key={i} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="testimonials">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: "Alex Johnson", role: "CEO, TechCorp", quote: "This platform has completely transformed how we operate. I can't imagine running our business without it now." },
                  { name: "Sarah Williams", role: "Marketing Director", quote: "The results we've seen since implementing this solution have exceeded all our expectations." }
                ].map((item, i) => (
                  <Card key={i} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="text-3xl mb-4">"</div>
                      <p className="text-muted-foreground italic mb-4">{item.quote}</p>
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-[800px] mx-auto text-center bg-card/50 backdrop-blur-sm p-12 rounded-2xl shadow-xl border border-primary/10">
          <h2 className="text-4xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-[600px] mx-auto">
            Join thousands of satisfied users who have already transformed their digital experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="px-8 rounded-full bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-all duration-300">
              Sign Up Now
            </Button>
            <Button size="lg" variant="outline" className="px-8 rounded-full">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
