import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Συλλογές δεδομένων για την Ελλάδα</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="max-w-md mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Επενδύσεις ΟΣΕΚΑ (UCITS)</CardTitle>
              <CardDescription>
                Διαχρονική εξέλιξη των επενδύσεων σε ΟΣΕΚΑ (UCITS) από φορολογικούς κατοίκους Ελλάδας
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="https://oseka.datasets.gr/" target="_blank" rel="noopener noreferrer">
                  Επισκεφθείτε <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Εργατικά ατυχήματα</CardTitle>
              <CardDescription>
                Διαδραστική απεικόνιση των ιστορικών δεδομένων εργατικών ατυχημάτων στην Ελλάδα
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="https://ergatika.datasets.gr/" target="_blank" rel="noopener noreferrer">
                  Επισκεφθείτε <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      </main>

      <footer className="w-full border-t bg-background py-6 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <span>
                © {new Date().getFullYear()} - Άδεια{" "}
                <Link
                  href="https://creativecommons.org/licenses/by-sa/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  CC-BY-SA 4.0
                </Link>
              </span>
            </div>
            <div>
              <span>
                Αναπτύχθηκε με{" "}
                <Link
                  href="https://v0.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  v0.dev
                </Link>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
