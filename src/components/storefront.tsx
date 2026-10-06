import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Menu, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
//import { events, imageSources, products, type Crop, type Product } from "@/lib/store-data";
import { events, imageSources, type Crop } from "@/lib/store-data";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/luxury-motion";
import logoImage from "@/assets/f9d34bf4-ed6d-4bfc-bb86-dfb536640d86.png";

type CartLine = { product: Product; quantity: number };
type StoreContextValue = { cart: CartLine[]; add: (product: Product, quantity?: number) => void; update: (id: string, change: number) => void; remove: (id: string) => void };
const StoreContext = createContext<StoreContextValue | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  useEffect(() => {
    const saved = sessionStorage.getItem("lmab-cart");
    if (saved) setCart(JSON.parse(saved) as CartLine[]);
  }, []);
  useEffect(() => { sessionStorage.setItem("lmab-cart", JSON.stringify(cart)); }, [cart]);
  const value = useMemo(() => ({
    cart,
    add(product: Product, quantity = 1) { setCart((current) => current.some((line) => line.product.id === product.id) ? current.map((line) => line.product.id === product.id ? { ...line, quantity: line.quantity + quantity } : line) : [...current, { product, quantity }]); toast.success(`${product.name} added to your bag`); },
    update(id: string, change: number) { setCart((current) => current.map((line) => line.product.id === id ? { ...line, quantity: Math.max(1, line.quantity + change) } : line)); },
    remove(id: string) { setCart((current) => current.filter((line) => line.product.id !== id)); },
  }), [cart]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const store = useContext(StoreContext);
  if (!store) throw new Error("useStore must be used within StoreProvider");
  return store;
}

export function CropImage({ crop, alt, className }: { crop: Crop; alt: string; className?: string }) {
  const group = crop.split("-")[0] as keyof typeof imageSources;
  return <div className={cn("crop-image", className)}><img src={imageSources[group]} alt={alt} loading="lazy" className={crop} /></div>;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [["/", "Home"], ["/about", "About"], ["/collection", "Collection"], ["/events", "Events"], ["/contact", "Contact"]] as const;
  return <header className="sticky top-0 z-40 border-b border-border/50 bg-background/90 backdrop-blur-md">
    <div className="mx-auto grid h-20 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 md:px-10">
      <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Let's Make a Buy home"><BrandMark /></Link>
      <nav className="hidden items-center gap-8 lg:flex">
  {links.map(([to, label]) => (
    <Link
      key={to}
      to={to}
      activeOptions={{ exact: to === "/" }}
      className="nav-link font-['Modern_Sans']"
      activeProps={{
        className: "nav-link font-['Modern_Sans'] text-primary",
      }}
    >
      {label}
    </Link>
  ))}
  <CartDrawer />
</nav>      <div className="flex items-center gap-1 lg:hidden"><CartDrawer /><Button variant="ghost" size="icon" aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)}><Menu /></Button></div>
    </div>
    <nav
  className={cn(
    "overflow-hidden border-t border-border lg:hidden",
    "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
    menuOpen
      ? "max-h-[400px] translate-y-0 opacity-100"
      : "pointer-events-none max-h-0 -translate-y-2 opacity-0",
  )}
>
  <div className="grid px-5 py-4">
    {links.map(([to, label]) => (
      <Link
        key={to}
        to={to}
        className="py-3 text-lg font-['Modern_Sans']"
        onClick={() => setMenuOpen(false)}
      >
        {label}
      </Link>
    ))}
  </div>
</nav>
  </header>;
}

function BrandMark() {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center">
      <img
        src={logoImage}
        alt=""
        className="h-12 w-auto object-contain"
      />
    </span>
  );
}
export function CartDrawer() {
  const { cart, update, remove } = useStore();
  const count = cart.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = cart.reduce((sum, line) => sum + line.quantity * line.product.price, 0);
  return <Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="relative" aria-label={`Shopping bag with ${count} items`}><ShoppingBag />{count > 0 && <span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] text-primary-foreground">{count}</span>}</Button></SheetTrigger>
    <SheetContent className="w-full sm:max-w-md"><SheetHeader><SheetTitle className="font-display text-4xl font-normal">Your bag</SheetTitle><SheetDescription>{count ? `${count} handmade piece${count === 1 ? "" : "s"}` : "Your bag is waiting for something beautiful."}</SheetDescription></SheetHeader>
      <div className="mt-8 flex h-[calc(100vh-15rem)] flex-col"><div className="flex-1 space-y-5 overflow-auto">{cart.map((line) => <div key={line.product.id} className="grid grid-cols-[80px_minmax(0,1fr)_auto] gap-4 border-b border-border pb-5"><div className="crop-image aspect-square">
  {line.product.images[0]?.image_url ? (
    <img
      src={line.product.images[0].image_url}
      alt={line.product.name}
      loading="lazy"
      className="h-full w-full object-cover"
    />
  ) : (
    <div className="h-full w-full bg-secondary" />
  )}
</div><div className="min-w-0"><p className="font-display text-xl">{line.product.name}</p><p className="text-sm text-muted-foreground">₹{line.product.price}</p><div className="mt-3 inline-flex items-center border border-border"><Button variant="ghost" size="icon" onClick={() => update(line.product.id, -1)}><Minus /></Button><span className="w-8 text-center text-sm">{line.quantity}</span><Button variant="ghost" size="icon" onClick={() => update(line.product.id, 1)}><Plus /></Button></div></div><Button variant="ghost" size="icon" aria-label={`Remove ${line.product.name}`} onClick={() => remove(line.product.id)}><Trash2 /></Button></div>)}{!cart.length && <div className="grid h-full place-items-center text-center"><div><ShoppingBag className="mx-auto mb-4 size-8 text-muted-foreground"/><p className="font-display text-2xl">Made to be held</p><Link to="/collection" className="mt-3 inline-block text-sm underline underline-offset-4">Explore the collection</Link></div></div>}</div>
      {cart.length > 0 && <div className="border-t border-border pt-5"><div className="mb-5 flex justify-between"><span>Subtotal</span><strong>₹{subtotal}</strong></div><Button className="h-12 w-full rounded-none" onClick={() => toast.success("Demo checkout complete", { description: "No payment was taken." })}>Checkout <ArrowRight /></Button></div>}</div>
    </SheetContent></Sheet>;
}

//export function ProductCard({ product }: { product: Product }) {
  //const { add } = useStore();
  //return <article className="group min-w-0"><Link to="/products/$productId" params={{ productId: product.id }}><CropImage crop={product.crop} alt={product.name} className="aspect-square"/><h3 className="mt-3 font-display text-xl leading-tight md:mt-4 md:text-2xl">{product.name}</h3></Link><div className="mt-1 flex items-center justify-between gap-2 md:gap-3"><div className="min-w-0"><p className="truncate text-xs text-muted-foreground md:text-sm">{product.type}</p><p className="mt-1 text-sm font-medium md:text-base">₹{product.price}</p></div><Button variant="outline" size="icon" className="size-8 shrink-0 rounded-none opacity-100 transition-opacity md:size-9 md:opacity-0 md:group-hover:opacity-100" aria-label={`Add ${product.name} to bag`} onClick={() => add(product)}><Plus /></Button></div><p className="mt-2 text-[10px] md:text-xs" aria-label={`${product.rating} out of 5 stars`}>★★★★☆ <span className="text-muted-foreground">({product.reviews})</span></p></article>;
//}


export function ProductCard({ product }: { product: Product }) {
  const { add } = useStore();

  const image = product.images[0]?.image_url;

  return (
    <article className="group min-w-0">
      <Link
        to="/products/$productId"
        params={{ productId: product.id }}
      >
        <div className="crop-image aspect-square">
          {image ? (
            <img
              src={image}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-secondary" />
          )}
        </div>

        <h3 className="mt-3 font-display text-xl leading-tight md:mt-4 md:text-2xl">
          {product.name}
        </h3>
      </Link>

      <div className="mt-1 flex items-center justify-between gap-2 md:gap-3">
        <div className="min-w-0">
          <p className="truncate text-xs text-muted-foreground md:text-sm">
            {product.category}
          </p>

          <p className="mt-1 text-sm font-medium md:text-base">
            ₹{product.price}
          </p>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="size-8 shrink-0 rounded-none opacity-100 transition-opacity md:size-9 md:opacity-0 md:group-hover:opacity-100"
          aria-label={`Add ${product.name} to bag`}
          onClick={() => add(product)}
        >
          <Plus />
        </Button>
      </div>
    </article>
  );
}


export function BookingDialog({ eventId, children }: { eventId: string; children: ReactNode }) {
  const fallbackEvent = events[0];
  const event = events.find((item) => item.id === eventId) ?? fallbackEvent;
  if (!event) return null;
  const [date, setDate] = useState("2026-10-17"); const [time, setTime] = useState("10:00"); const [seats, setSeats] = useState(1); const [confirmed, setConfirmed] = useState(false);
  return <Dialog onOpenChange={(open) => { if (!open) setConfirmed(false); }}><DialogTrigger asChild><Button variant="outline" className="rounded-none bg-[#E0E0E0] text-black hover:bg-[#ffffff]">{children}</Button></DialogTrigger><DialogContent className="max-w-xl rounded-none border-border p-7 md:p-10"><DialogHeader><DialogTitle className="font-display text-4xl font-normal">{confirmed ? "Your seats are held" : event.title}</DialogTitle><DialogDescription>{confirmed ? "A demo confirmation has been created for this session." : "Choose a date, time, and the number of makers joining you."}</DialogDescription></DialogHeader>{confirmed ? <div className="py-8 text-center"><span className="mx-auto grid size-14 place-items-center rounded-full bg-primary text-primary-foreground"><Check /></span><p className="mt-5">{seats} seat{seats > 1 ? "s" : ""} · {date} at {time}</p><p className="mt-2 font-display text-3xl">₹{event.price * seats}</p></div> : <div className="space-y-5 pt-4"><label className="grid gap-2 text-sm">Date<Input type="date" value={date} min="2026-10-01" onChange={(e) => setDate(e.target.value)} className="h-12 rounded-none bg-card" /></label><label className="grid gap-2 text-sm">Time<Select value={time} onValueChange={setTime}><SelectTrigger className="h-12 rounded-none bg-card"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="10:00">10:00 AM</SelectItem><SelectItem value="14:00">2:00 PM</SelectItem><SelectItem value="16:30">4:30 PM</SelectItem></SelectContent></Select></label><div className="flex items-center justify-between border-y border-border py-4"><span>Seats</span><div className="inline-flex items-center"><Button variant="ghost" size="icon" onClick={() => setSeats(Math.max(1, seats - 1))}><Minus /></Button><span className="w-10 text-center">{seats}</span><Button variant="ghost" size="icon" onClick={() => setSeats(Math.min(8, seats + 1))}><Plus /></Button></div></div><div className="flex items-center justify-between font-display text-2xl"><span>Total</span><span>₹{event.price * seats}</span></div><Button className="h-12 w-full rounded-none" onClick={() => setConfirmed(true)}>Confirm seats <ArrowRight /></Button></div>}</DialogContent></Dialog>;
}

export function Newsletter() { const [email,setEmail]=useState(""); return <section className="bg-[#DED5BF] px-5 py-12 md:px-10"><div className="mx-auto grid max-w-[1400px] items-center gap-8 md:grid-cols-2"><Reveal direction="left"><h2 className="font-display text-4xl md:text-5xl">Subscribe to get 10% off your first order</h2></Reveal><Reveal direction="right"><form className="flex border-b border-foreground" onSubmit={(e) => { e.preventDefault(); if (email) { toast.success("Welcome to the studio notes"); setEmail(""); } }}><Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Drop your email here" className="h-14 rounded-none border-0 bg-card px-5 shadow-none focus-visible:ring-0"/><Button type="submit" variant="ghost" size="icon" className="h-14 w-14 rounded-none bg-card"><ArrowRight /></Button></form></Reveal></div></section>; }

export function SiteFooter() {
  return (
    <footer className="px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">

        {/* BLOCK 1 */}
        <Reveal direction="up">
          <p className="font-sans text-[12px] font-normal md:text-[27px]">
            Let’s Make a Buy
          </p>

          <h2
            className="
              mt-4
              text-center
              whitespace-nowrap
              font-display
              font-light
              text-[clamp(4.25rem,19vw,6rem)]
              leading-[.8]
              md:mt-5
              md:text-[234px]
            "
          >
            Contact Us
          </h2>

          {/* Mobile collaboration */}
          <p className="mt-20 text-right font-sans text-[12px] font-normal md:hidden">
            For collaborations, events, makers, or simply to say hello.
          </p>

          {/* Desktop collaboration */}
          <p className="hidden font-sans text-[16px] font-normal md:mt-8 md:block md:text-right">
            For collaborations, events, makers, or simply to say hello.
          </p>
        </Reveal>

        {/* BLOCK 2 */}
        <Reveal direction="up" delay={0.15}>
          <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-8 px-5 text-center text-xs md:mt-24 md:gap-10 md:px-20 md:text-sm">
            <div className="grid gap-7">
              <p>
                KALGA, PARVATI VALLEY
                <br />
                Himachal Pradesh, India
              </p>

              <a
                className="underline-offset-4 hover:underline"
                href="mailto:hello@letsmakeabuy.com"
              >
                hello@letsmakeabuy.com
              </a>
            </div>

            <div className="grid gap-7 md:block md:text-right">
              <a
                className="underline-offset-4 hover:underline md:mt-6 md:inline-block"
                href="https://instagram.com/letsmakeabuy"
              >
                Instagram
                <br className="md:hidden" /> @letsmakeabuy
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </footer>
  );
}