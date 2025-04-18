import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HowItWorks() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-md bg-[#6c63ff] flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </span>
              <span className="font-bold text-xl">Merlin</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </Link>
              <Link href="/how-it-works" className="text-sm font-medium transition-colors hover:text-foreground">
                How It Works
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Pricing
              </Link>
              <Link
                href="/testimonials"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Testimonials
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Log in
            </Link>
            <Button className="bg-[#6c63ff] hover:bg-[#5a52e0]">Start for free</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Merlin Works</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover how our AI-powered platform extracts, categorizes, and stores structured impact data from
                  URLs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">The Extraction Process</h2>
                <p className="text-muted-foreground">
                  Merlin uses advanced AI to transform unstructured text into actionable impact intelligence in seconds.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#6c63ff]/10 text-[#6c63ff]">
                      1
                    </div>
                    <h3 className="text-xl font-bold">URL Submission</h3>
                    <p className="text-muted-foreground">
                      Submit any URL containing impact data - company reports, press releases, or web pages.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#63c5ff]/10 text-[#63c5ff]">
                      2
                    </div>
                    <h3 className="text-xl font-bold">AI Processing</h3>
                    <p className="text-muted-foreground">
                      Our AI analyzes the content, identifying impact claims, metrics, and contextual information.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#00e4c6]/10 text-[#00e4c6]">
                      3
                    </div>
                    <h3 className="text-xl font-bold">Structured Output</h3>
                    <p className="text-muted-foreground">
                      Receive organized Data Stories with categorized impact claims, credibility scores, and metrics.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-8 flex justify-center">
                <div className="w-full max-w-3xl rounded-lg overflow-hidden border shadow-sm">
                  <div className="bg-[#6c63ff] text-white p-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-white/30" />
                      <div className="h-3 w-3 rounded-full bg-white/30" />
                      <div className="h-3 w-3 rounded-full bg-white/30" />
                      <div className="ml-2 text-sm font-medium">merlin.ai/extract</div>
                    </div>
                  </div>
                  <div className="bg-white p-6 space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Enter URL to extract impact data</label>
                      <div className="flex">
                        <input
                          type="text"
                          placeholder="https://example.com/sustainability-report"
                          className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#6c63ff]"
                        />
                        <Button className="rounded-l-none bg-[#6c63ff] hover:bg-[#5a52e0]">Extract</Button>
                      </div>
                    </div>
                    <div className="space-y-2 pt-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#00e4c6]" />
                        <span className="text-sm">Processing URL</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#00e4c6]" />
                        <span className="text-sm">Analyzing content</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full border-2 border-[#6c63ff] border-t-transparent animate-spin" />
                        <span className="text-sm">Extracting impact data...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Data Story Anatomy</h2>
                <p className="text-muted-foreground">Understanding the components of a Merlin Data Story.</p>
              </div>

              <div className="relative">
                <Card className="max-w-lg mx-auto overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-[#6c63ff]/10 p-4">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full bg-[#6c63ff] flex items-center justify-center">
                            <span className="text-white font-bold">1</span>
                          </div>
                          <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-white border-2 border-[#6c63ff] flex items-center justify-center text-xs font-bold">
                            I
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Innovation Type</div>
                          <div className="text-xs text-muted-foreground">Clean Energy Domain</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="relative">
                        <div className="absolute -left-10 top-0 h-6 w-6 rounded-full bg-white border-2 border-[#63c5ff] flex items-center justify-center text-xs font-bold">
                          2
                        </div>
                        <div>
                          <div className="text-sm font-medium">Metric</div>
                          <div className="flex items-center gap-1">
                            <span className="text-lg font-bold">45% reduction in carbon emissions</span>
                            <ArrowRight className="h-4 w-4 text-[#00e4c6]" />
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-10 top-0 h-6 w-6 rounded-full bg-white border-2 border-[#00e4c6] flex items-center justify-center text-xs font-bold">
                          3
                        </div>
                        <div>
                          <div className="text-sm font-medium">Context & Timeframe</div>
                          <div className="text-sm">Compared to traditional energy sources over 5 years</div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-10 top-0 h-6 w-6 rounded-full bg-white border-2 border-[#6c63ff] flex items-center justify-center text-xs font-bold">
                          4
                        </div>
                        <div>
                          <div className="text-sm font-medium">Source</div>
                          <div className="text-sm flex items-center gap-1">
                            <span>Annual Sustainability Report 2023</span>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2 border-t relative">
                        <div className="absolute -left-10 top-2 h-6 w-6 rounded-full bg-white border-2 border-[#63c5ff] flex items-center justify-center text-xs font-bold">
                          5
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <div className="text-xs text-muted-foreground">Credibility Score</div>
                            <div className="flex">
                              <div className="h-2 w-2 rounded-full bg-[#00e4c6] mt-1 mr-1" />
                              <div className="h-2 w-2 rounded-full bg-[#00e4c6] mt-1 mr-1" />
                              <div className="h-2 w-2 rounded-full bg-[#00e4c6] mt-1 mr-1" />
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">Impact Score</div>
                            <div className="text-sm font-bold">87/100</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-[#6c63ff]">1. Innovation Type</div>
                    <p className="text-sm text-muted-foreground">Categorizes the type of innovation and its domain.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-[#63c5ff]">2. Impact Metric</div>
                    <p className="text-sm text-muted-foreground">Quantifiable measurement of the impact claim.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-[#00e4c6]">3. Context</div>
                    <p className="text-sm text-muted-foreground">Provides timeframe and comparison context.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-[#6c63ff]">4. Source</div>
                    <p className="text-sm text-muted-foreground">Original source of the impact claim.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-[#63c5ff]">5. Scoring</div>
                    <p className="text-sm text-muted-foreground">Credibility and overall impact scores.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Try Merlin?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Start extracting impact intelligence from your sources today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-[#6c63ff] hover:bg-[#5a52e0] text-lg py-6">Try Merlin Free</Button>
                <Button variant="outline" className="text-lg py-6">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row justify-between gap-4 md:h-24 items-center">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-md bg-[#6c63ff] flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </span>
            <span className="font-bold">Merlin</span>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">© 2023 Merlin. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
