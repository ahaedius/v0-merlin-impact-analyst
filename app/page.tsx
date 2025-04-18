import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart2, Database, ExternalLink, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Merlin%20Logo%20-%20Purple-uD7AIErn6VziugKtpbwIjrOBUqsDi8.png"
                  alt="Merlin Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
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
            <Button className="bg-[#7B3FF2] hover:bg-[#6930c3]">Start for free</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Extract Impact Intelligence Instantly
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                  Transform URLs into structured impact data stories for data-driven decisions with unprecedented speed
                  and accuracy.
                </p>
              </div>

              <div className="w-full max-w-3xl mt-8">
                <Card className="border-2 border-[#7B3FF2]/20 shadow-lg">
                  <CardContent className="p-6">
                    <Tabs defaultValue="url" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 mb-6">
                        <TabsTrigger value="url">URL</TabsTrigger>
                        <TabsTrigger value="upload">Upload File</TabsTrigger>
                        <TabsTrigger value="text">Text Input</TabsTrigger>
                      </TabsList>
                      <TabsContent value="url" className="space-y-4">
                        <div className="flex flex-col space-y-2">
                          <div className="flex">
                            <input
                              type="text"
                              placeholder="https://example.com/sustainability-report"
                              className="flex-1 px-4 py-3 text-base border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]"
                            />
                            <Button className="rounded-l-none bg-[#7B3FF2] hover:bg-[#6930c3] px-6 py-3 text-base">
                              Extract
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Enter any URL containing impact data - company reports, press releases, or web pages.
                          </p>
                        </div>
                      </TabsContent>
                      <TabsContent value="upload" className="space-y-4">
                        <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-md p-10 space-y-4">
                          <div className="rounded-full bg-[#7B3FF2]/10 p-4">
                            <ArrowRight className="h-8 w-8 text-[#7B3FF2]" />
                          </div>
                          <div className="space-y-2 text-center">
                            <p className="text-lg font-medium">Drag & drop your file here</p>
                            <p className="text-sm text-muted-foreground">
                              Support for PDF, DOC, DOCX, and TXT files up to 10MB
                            </p>
                          </div>
                          <Button className="bg-[#7B3FF2] hover:bg-[#6930c3]">Browse Files</Button>
                        </div>
                      </TabsContent>
                      <TabsContent value="text" className="space-y-4">
                        <div className="flex flex-col space-y-2">
                          <textarea
                            placeholder="Paste your text content here..."
                            className="w-full h-32 px-4 py-3 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]"
                          />
                          <Button className="bg-[#7B3FF2] hover:bg-[#6930c3] px-6 py-3 text-base">Extract</Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button variant="outline">See How It Works</Button>
                <Button variant="ghost" className="flex items-center gap-1">
                  <span>Watch Demo</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#7B3FF2] text-white">
                  <Search className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">One-Click Extraction</h3>
                  <p className="text-muted-foreground">
                    Extract structured impact data from any URL with a single click, saving hours of manual research.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#9d4edd] text-white">
                  <Filter className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Intelligent Categorization</h3>
                  <p className="text-muted-foreground">
                    Our AI automatically categorizes impact claims by domain, metrics, and credibility.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#c77dff] text-white">
                  <Database className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Comprehensive Database</h3>
                  <p className="text-muted-foreground">
                    Build your own repository of impact intelligence for better decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Use Cases</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  See how different professionals leverage Merlin to transform their workflow.
                </p>
              </div>
              <Tabs defaultValue="investors" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="investors">Impact Investors</TabsTrigger>
                  <TabsTrigger value="sustainability">Sustainability Professionals</TabsTrigger>
                  <TabsTrigger value="researchers">Researchers</TabsTrigger>
                </TabsList>
                <TabsContent value="investors" className="space-y-4 mt-4">
                  <div className="grid gap-6 lg:grid-cols-2 items-center">
                    <div>
                      <h3 className="text-2xl font-bold">Make Data-Driven Investment Decisions</h3>
                      <p className="mt-2 text-muted-foreground">
                        Quickly assess the impact claims of potential investments and compare them against industry
                        benchmarks.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#7B3FF2]" />
                          <span>Verify impact claims with credibility scoring</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#7B3FF2]" />
                          <span>Compare metrics across similar investments</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#7B3FF2]" />
                          <span>Generate comprehensive impact reports</span>
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-md bg-[#7B3FF2]/10 flex items-center justify-center">
                              <BarChart2 className="h-4 w-4 text-[#7B3FF2]" />
                            </div>
                            <span className="font-medium">Investment Analysis</span>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="space-y-4">
                          <div className="grid gap-1">
                            <div className="text-sm font-medium">Impact Score</div>
                            <div className="h-2 w-full rounded-full bg-gray-100">
                              <div className="h-2 w-3/4 rounded-full bg-[#7B3FF2]" />
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>0</span>
                              <span>75/100</span>
                            </div>
                          </div>
                          <div className="grid gap-1">
                            <div className="text-sm font-medium">Credibility</div>
                            <div className="h-2 w-full rounded-full bg-gray-100">
                              <div className="h-2 w-4/5 rounded-full bg-[#9d4edd]" />
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>0</span>
                              <span>80/100</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="sustainability" className="space-y-4 mt-4">
                  <div className="grid gap-6 lg:grid-cols-2 items-center">
                    <div>
                      <h3 className="text-2xl font-bold">Streamline ESG Reporting</h3>
                      <p className="mt-2 text-muted-foreground">
                        Automatically extract and organize sustainability metrics from company reports and websites.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#9d4edd]" />
                          <span>Track progress against sustainability goals</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#9d4edd]" />
                          <span>Generate compliance-ready reports</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#9d4edd]" />
                          <span>Benchmark against industry standards</span>
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-md bg-[#9d4edd]/10 flex items-center justify-center">
                              <BarChart2 className="h-4 w-4 text-[#9d4edd]" />
                            </div>
                            <span className="font-medium">ESG Dashboard</span>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="space-y-4">
                          <div className="grid gap-1">
                            <div className="text-sm font-medium">Carbon Reduction</div>
                            <div className="h-2 w-full rounded-full bg-gray-100">
                              <div className="h-2 w-2/3 rounded-full bg-[#9d4edd]" />
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>0</span>
                              <span>67%</span>
                            </div>
                          </div>
                          <div className="grid gap-1">
                            <div className="text-sm font-medium">Reporting Compliance</div>
                            <div className="h-2 w-full rounded-full bg-gray-100">
                              <div className="h-2 w-[90%] rounded-full bg-[#c77dff]" />
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>0</span>
                              <span>90%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="researchers" className="space-y-4 mt-4">
                  <div className="grid gap-6 lg:grid-cols-2 items-center">
                    <div>
                      <h3 className="text-2xl font-bold">Accelerate Impact Research</h3>
                      <p className="mt-2 text-muted-foreground">
                        Extract and analyze impact data from multiple sources in minutes instead of days.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#c77dff]" />
                          <span>Process hundreds of sources automatically</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#c77dff]" />
                          <span>Identify trends and patterns in impact data</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-[#c77dff]" />
                          <span>Export structured data for further analysis</span>
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-md bg-[#c77dff]/10 flex items-center justify-center">
                              <BarChart2 className="h-4 w-4 text-[#c77dff]" />
                            </div>
                            <span className="font-medium">Research Analysis</span>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="space-y-4">
                          <div className="grid gap-1">
                            <div className="text-sm font-medium">Sources Analyzed</div>
                            <div className="h-2 w-full rounded-full bg-gray-100">
                              <div className="h-2 w-[85%] rounded-full bg-[#c77dff]" />
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>0</span>
                              <span>850/1000</span>
                            </div>
                          </div>
                          <div className="grid gap-1">
                            <div className="text-sm font-medium">Data Points Extracted</div>
                            <div className="h-2 w-full rounded-full bg-gray-100">
                              <div className="h-2 w-[95%] rounded-full bg-[#7B3FF2]" />
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>0</span>
                              <span>9,500+</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Data Story Showcase</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  See how Merlin transforms raw text into structured, actionable impact data.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="p-0">
                    <div className="bg-[#7B3FF2]/10 p-4">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-[#7B3FF2] flex items-center justify-center">
                          <BarChart2 className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Innovation</div>
                          <div className="text-xs text-muted-foreground">Clean Energy</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 space-y-4">
                      <div>
                        <div className="text-sm font-medium">Metric</div>
                        <div className="flex items-center gap-1">
                          <span className="text-lg font-bold">45% reduction in carbon emissions</span>
                          <ArrowRight className="h-4 w-4 text-[#7B3FF2]" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Context</div>
                        <div className="text-sm">Compared to traditional energy sources over 5 years</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Source</div>
                        <div className="text-sm flex items-center gap-1">
                          <span>Annual Sustainability Report 2023</span>
                          <ExternalLink className="h-3 w-3" />
                        </div>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="flex justify-between">
                          <div>
                            <div className="text-xs text-muted-foreground">Credibility</div>
                            <div className="flex">
                              <div className="h-2 w-2 rounded-full bg-[#7B3FF2] mt-1 mr-1" />
                              <div className="h-2 w-2 rounded-full bg-[#7B3FF2] mt-1 mr-1" />
                              <div className="h-2 w-2 rounded-full bg-[#7B3FF2] mt-1 mr-1" />
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
                <Card className="overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="p-0">
                    <div className="bg-[#9d4edd]/10 p-4">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-[#9d4edd] flex items-center justify-center">
                          <BarChart2 className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Social Impact</div>
                          <div className="text-xs text-muted-foreground">Education</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 space-y-4">
                      <div>
                        <div className="text-sm font-medium">Metric</div>
                        <div className="flex items-center gap-1">
                          <span className="text-lg font-bold">10,000+ students reached</span>
                          <ArrowRight className="h-4 w-4 text-[#9d4edd]" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Context</div>
                        <div className="text-sm">In underserved communities during 2023</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Source</div>
                        <div className="text-sm flex items-center gap-1">
                          <span>Impact Report Q4 2023</span>
                          <ExternalLink className="h-3 w-3" />
                        </div>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="flex justify-between">
                          <div>
                            <div className="text-xs text-muted-foreground">Credibility</div>
                            <div className="flex">
                              <div className="h-2 w-2 rounded-full bg-[#9d4edd] mt-1 mr-1" />
                              <div className="h-2 w-2 rounded-full bg-[#9d4edd] mt-1 mr-1" />
                              <div className="h-2 w-2 rounded-full bg-gray-200 mt-1 mr-1" />
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">Impact Score</div>
                            <div className="text-sm font-bold">78/100</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="p-0">
                    <div className="bg-[#c77dff]/10 p-4">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-[#c77dff] flex items-center justify-center">
                          <BarChart2 className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Environmental</div>
                          <div className="text-xs text-muted-foreground">Water Conservation</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 space-y-4">
                      <div>
                        <div className="text-sm font-medium">Metric</div>
                        <div className="flex items-center gap-1">
                          <span className="text-lg font-bold">2.5M gallons saved</span>
                          <ArrowRight className="h-4 w-4 text-[#c77dff]" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Context</div>
                        <div className="text-sm">Through innovative irrigation technology in 2023</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Source</div>
                        <div className="text-sm flex items-center gap-1">
                          <span>Environmental Impact Statement</span>
                          <ExternalLink className="h-3 w-3" />
                        </div>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="flex justify-between">
                          <div>
                            <div className="text-xs text-muted-foreground">Credibility</div>
                            <div className="flex">
                              <div className="h-2 w-2 rounded-full bg-[#c77dff] mt-1 mr-1" />
                              <div className="h-2 w-2 rounded-full bg-[#c77dff] mt-1 mr-1" />
                              <div className="h-2 w-2 rounded-full bg-[#c77dff] mt-1 mr-1" />
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">Impact Score</div>
                            <div className="text-sm font-bold">92/100</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Transform Your Impact Intelligence?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Join thousands of professionals making data-driven impact decisions with Merlin.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-[#7B3FF2] hover:bg-[#6930c3] text-lg py-6">Try Merlin Free</Button>
                <Button variant="outline" className="text-lg py-6">
                  Schedule a Demo
                </Button>
              </div>
              <div className="flex justify-center">
                <p className="text-sm text-muted-foreground">No credit card required. 14-day free trial.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row justify-between gap-4 md:h-24 items-center">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Merlin%20Logo%20-%20Purple-uD7AIErn6VziugKtpbwIjrOBUqsDi8.png"
              alt="Merlin Logo"
              width={100}
              height={30}
              className="h-6 w-auto"
            />
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
