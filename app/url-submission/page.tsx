"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, ChevronDown, ExternalLink, Filter, Search, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function UrlSubmission() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      setShowResults(true)
    }, 3000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Merlin%20Logo%20-%20Purple-uD7AIErn6VziugKtpbwIjrOBUqsDi8.png"
                alt="Merlin Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
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
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">URL Submission</h1>
                <p className="text-muted-foreground">
                  Extract impact intelligence from any URL with our AI-powered platform.
                </p>
              </div>

              <Card className="border-2 border-[#7B3FF2]/20 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <Tabs defaultValue="url" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger value="url">URL</TabsTrigger>
                      <TabsTrigger value="upload">Upload File</TabsTrigger>
                      <TabsTrigger value="text">Text Input</TabsTrigger>
                    </TabsList>
                    <TabsContent value="url" className="space-y-4">
                      <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="url" className="text-lg">
                              Enter URL
                            </Label>
                            <div className="flex">
                              <Input
                                id="url"
                                placeholder="https://example.com/sustainability-report"
                                className="rounded-r-none py-6 text-base"
                              />
                              <Button
                                type="submit"
                                className="rounded-l-none bg-[#7B3FF2] hover:bg-[#6930c3] px-6 py-6 text-base h-auto"
                                disabled={isProcessing}
                              >
                                {isProcessing ? "Processing..." : "Extract"}
                              </Button>
                            </div>
                          </div>

                          <Collapsible>
                            <CollapsibleTrigger asChild>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1 p-0">
                                <Settings className="h-4 w-4" />
                                <span>Advanced Options</span>
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="space-y-4 pt-4">
                              <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                  <Label>Extraction Depth</Label>
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm">Standard</span>
                                    <Switch />
                                    <span className="text-sm">Deep</span>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label>Focus Areas</Label>
                                  <div className="flex flex-wrap gap-2">
                                    <Button variant="outline" size="sm" className="rounded-full">
                                      Environmental
                                    </Button>
                                    <Button variant="outline" size="sm" className="rounded-full">
                                      Social
                                    </Button>
                                    <Button variant="outline" size="sm" className="rounded-full">
                                      Governance
                                    </Button>
                                    <Button variant="outline" size="sm" className="rounded-full">
                                      Innovation
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                  <Label>Batch Processing</Label>
                                  <div className="flex items-center gap-2">
                                    <Switch />
                                    <span className="text-sm">Enable multiple URL processing</span>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label>Export Format</Label>
                                  <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="rounded-full">
                                      JSON
                                    </Button>
                                    <Button variant="outline" size="sm" className="rounded-full">
                                      CSV
                                    </Button>
                                    <Button variant="outline" size="sm" className="rounded-full">
                                      PDF
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        </div>
                      </form>
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
                        <Label htmlFor="text-input" className="text-lg">
                          Enter Text
                        </Label>
                        <textarea
                          id="text-input"
                          placeholder="Paste your text content here..."
                          className="w-full h-32 px-4 py-3 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]"
                        />
                        <Button
                          className="bg-[#7B3FF2] hover:bg-[#6930c3] px-6 py-3 text-base"
                          onClick={() => {
                            setIsProcessing(true)
                            setTimeout(() => {
                              setIsProcessing(false)
                              setShowResults(true)
                            }, 3000)
                          }}
                        >
                          Extract
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {isProcessing && (
                    <div className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Processing Status</div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-[#7B3FF2]" />
                            <span className="text-sm">URL validation complete</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-[#7B3FF2]" />
                            <span className="text-sm">Content retrieval complete</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded-full border-2 border-[#7B3FF2] border-t-transparent animate-spin" />
                            <span className="text-sm">AI analysis in progress...</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded-full border-2 border-[#7B3FF2] opacity-30" />
                            <span className="text-sm text-muted-foreground">Generating Data Stories</span>
                          </div>
                        </div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-2 w-1/2 rounded-full bg-[#7B3FF2] animate-pulse" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {showResults && (
                <div className="space-y-6 pt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Extraction Results</h2>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Filter className="h-4 w-4" />
                        <span>Filter</span>
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <span>Export</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Tabs defaultValue="cards">
                    <TabsList>
                      <TabsTrigger value="cards">Card View</TabsTrigger>
                      <TabsTrigger value="table">Table View</TabsTrigger>
                    </TabsList>
                    <TabsContent value="cards" className="pt-4">
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="overflow-hidden transition-all hover:shadow-md">
                          <CardContent className="p-0">
                            <div className="bg-[#7B3FF2]/10 p-4">
                              <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-[#7B3FF2] flex items-center justify-center">
                                  <Search className="h-4 w-4 text-white" />
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
                                  <Search className="h-4 w-4 text-white" />
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
                                  <Search className="h-4 w-4 text-white" />
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
                    </TabsContent>
                    <TabsContent value="table" className="pt-4">
                      <div className="rounded-md border">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-muted/50">
                                <th className="p-3 text-left text-sm font-medium">Domain</th>
                                <th className="p-3 text-left text-sm font-medium">Metric</th>
                                <th className="p-3 text-left text-sm font-medium">Context</th>
                                <th className="p-3 text-left text-sm font-medium">Credibility</th>
                                <th className="p-3 text-left text-sm font-medium">Impact Score</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="p-3 text-sm">Clean Energy</td>
                                <td className="p-3 text-sm font-medium">45% reduction in carbon emissions</td>
                                <td className="p-3 text-sm">Compared to traditional energy sources over 5 years</td>
                                <td className="p-3">
                                  <div className="flex">
                                    <div className="h-2 w-2 rounded-full bg-[#7B3FF2] mt-1 mr-1" />
                                    <div className="h-2 w-2 rounded-full bg-[#7B3FF2] mt-1 mr-1" />
                                    <div className="h-2 w-2 rounded-full bg-[#7B3FF2] mt-1 mr-1" />
                                  </div>
                                </td>
                                <td className="p-3 text-sm font-medium">87/100</td>
                              </tr>
                              <tr className="border-t">
                                <td className="p-3 text-sm">Education</td>
                                <td className="p-3 text-sm font-medium">10,000+ students reached</td>
                                <td className="p-3 text-sm">In underserved communities during 2023</td>
                                <td className="p-3">
                                  <div className="flex">
                                    <div className="h-2 w-2 rounded-full bg-[#9d4edd] mt-1 mr-1" />
                                    <div className="h-2 w-2 rounded-full bg-[#9d4edd] mt-1 mr-1" />
                                    <div className="h-2 w-2 rounded-full bg-gray-200 mt-1 mr-1" />
                                  </div>
                                </td>
                                <td className="p-3 text-sm font-medium">78/100</td>
                              </tr>
                              <tr className="border-t">
                                <td className="p-3 text-sm">Water Conservation</td>
                                <td className="p-3 text-sm font-medium">2.5M gallons saved</td>
                                <td className="p-3 text-sm">Through innovative irrigation technology in 2023</td>
                                <td className="p-3">
                                  <div className="flex">
                                    <div className="h-2 w-2 rounded-full bg-[#c77dff] mt-1 mr-1" />
                                    <div className="h-2 w-2 rounded-full bg-[#c77dff] mt-1 mr-1" />
                                    <div className="h-2 w-2 rounded-full bg-[#c77dff] mt-1 mr-1" />
                                  </div>
                                </td>
                                <td className="p-3 text-sm font-medium">92/100</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              )}
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
