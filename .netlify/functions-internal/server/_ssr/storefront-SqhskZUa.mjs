import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime, r as Slot } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Minus, c as ChevronDown, i as Plus, l as Check, n as Trash2, o as Menu, r as ShoppingBag, s as ChevronUp, t as X, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/storefront-SqhskZUa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-button-color text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2 font-display text-[17px] font-medium",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Sheet = Dialog$1;
var SheetTrigger = DialogTrigger$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription$1.displayName;
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var dreamcathcer_default = "/assets/dreamcathcer-DE9BrFsQ.jpeg";
var jwellry_default = "/assets/jwellry-BOBYzKBe.jpeg";
var pottery_default = "/assets/pottery-CfHMMAgE.jpeg";
var crocet_default = "/assets/crocet-Xcq_oKbQ.jpeg";
var eventpottery_default = "/assets/eventpottery-qX0wmKBb.jpeg";
var outside_seating_default = "/assets/outside-seating-BlUCwLAt.jpeg";
var marketablee_default = "/assets/marketablee-_Ci9-i8p.jpeg";
var crafts = [
	{
		name: "Weaving",
		note: "Tradition woven into something new.",
		image: dreamcathcer_default
	},
	{
		name: "Jewellery",
		note: "Handcrafted pieces made to be worn.",
		image: jwellry_default
	},
	{
		name: "Pottery",
		note: "Earth, shaped and fired into form.",
		image: pottery_default
	},
	{
		name: "Crochet",
		note: "Thread transformed into texture and form.",
		image: crocet_default
	}
];
var events = [
	{
		id: "earth-hands",
		title: "The Earth in Our Hands",
		description: "Discover the beauty of natural materials through slow, hands-on making with local artisans.",
		image: eventpottery_default,
		price: 1200
	},
	{
		id: "mountain-stories",
		title: "Stories from the Mountains",
		description: "Meet local makers and discover the stories, traditions, and creativity woven into mountain life.",
		image: outside_seating_default,
		price: 900
	},
	{
		id: "makers-table",
		title: "The Maker’s Table",
		description: "Spend a day making, learning, and creating alongside artisans in an intimate mountain setting.",
		image: marketablee_default,
		price: 1500
	}
];
var luxuryEase = [
	.25,
	.1,
	.25,
	1
];
var viewport = {
	once: true,
	amount: .2
};
var offsets = {
	left: { x: -40 },
	right: { x: 40 },
	up: { y: 30 }
};
function Reveal({ children, direction = "up", className, delay = 0, duration = .7 }) {
	const initial = {
		opacity: 0,
		...offsets[direction]
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial,
		whileInView: {
			opacity: 1,
			x: 0,
			y: 0
		},
		viewport,
		transition: {
			duration,
			delay,
			ease: luxuryEase
		},
		children
	});
}
function StaggerReveal({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		variants: {
			hidden: {},
			visible: { transition: { staggerChildren: .15 } }
		},
		initial: "hidden",
		whileInView: "visible",
		viewport,
		children
	});
}
function StaggerItem({ children, direction = "up", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: cn("min-w-0", className),
		initial: {
			opacity: 0,
			...offsets[direction]
		},
		whileInView: {
			opacity: 1,
			x: 0,
			y: 0
		},
		viewport: {
			once: true,
			amount: .2
		},
		transition: {
			duration: .7,
			ease: luxuryEase
		},
		children
	});
}
var f9d34bf4_ed6d_4bfc_bb86_dfb536640d86_default = "/assets/f9d34bf4-ed6d-4bfc-bb86-dfb536640d86-C6V-pEBn.png";
var StoreContext = (0, import_react.createContext)(void 0);
function StoreProvider({ children }) {
	const [cart, setCart] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const saved = sessionStorage.getItem("lmab-cart");
		if (saved) setCart(JSON.parse(saved));
	}, []);
	(0, import_react.useEffect)(() => {
		sessionStorage.setItem("lmab-cart", JSON.stringify(cart));
	}, [cart]);
	const value = (0, import_react.useMemo)(() => ({
		cart,
		add(product, quantity = 1) {
			setCart((current) => current.some((line) => line.product.id === product.id) ? current.map((line) => line.product.id === product.id ? {
				...line,
				quantity: line.quantity + quantity
			} : line) : [...current, {
				product,
				quantity
			}]);
			toast.success(`${product.name} added to your bag`);
		},
		update(id, change) {
			setCart((current) => current.map((line) => line.product.id === id ? {
				...line,
				quantity: Math.max(1, line.quantity + change)
			} : line));
		},
		remove(id) {
			setCart((current) => current.filter((line) => line.product.id !== id));
		}
	}), [cart]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreContext.Provider, {
		value,
		children
	});
}
function useStore() {
	const store = (0, import_react.useContext)(StoreContext);
	if (!store) throw new Error("useStore must be used within StoreProvider");
	return store;
}
function SiteHeader() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const links = [
		["/", "Home"],
		["/about", "About"],
		["/collection", "Collection"],
		["/events", "Events"],
		["/contact", "Contact"]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/50 bg-background/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid h-20 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-3",
					"aria-label": "Let's Make a Buy home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					children: [links.map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						activeOptions: { exact: to === "/" },
						className: "nav-link font-['Modern_Sans']",
						activeProps: { className: "nav-link font-['Modern_Sans'] text-primary" },
						children: label
					}, to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {})]
				}),
				"      ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "Open navigation",
						onClick: () => setMenuOpen(!menuOpen),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: cn("overflow-hidden border-t border-border lg:hidden", "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]", menuOpen ? "max-h-[400px] translate-y-0 opacity-100" : "pointer-events-none max-h-0 -translate-y-2 opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid px-5 py-4",
				children: links.map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to,
					className: "py-3 text-lg font-['Modern_Sans']",
					onClick: () => setMenuOpen(false),
					children: label
				}, to))
			})
		})]
	});
}
function BrandMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "flex h-12 w-12 shrink-0 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: f9d34bf4_ed6d_4bfc_bb86_dfb536640d86_default,
			alt: "",
			className: "h-12 w-auto object-contain"
		})
	});
}
function CartDrawer() {
	const { cart, update, remove } = useStore();
	const count = cart.reduce((sum, line) => sum + line.quantity, 0);
	const subtotal = cart.reduce((sum, line) => sum + line.quantity * line.product.price, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			size: "icon",
			className: "relative",
			"aria-label": `Shopping bag with ${count} items`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {}), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] text-primary-foreground",
				children: count
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
		className: "w-full sm:max-w-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
			className: "font-display text-4xl font-normal",
			children: "Your bag"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: count ? `${count} handmade piece${count === 1 ? "" : "s"}` : "Your bag is waiting for something beautiful." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex h-[calc(100vh-15rem)] flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-5 overflow-auto",
				children: [cart.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[80px_minmax(0,1fr)_auto] gap-4 border-b border-border pb-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "crop-image aspect-square",
							children: line.product.images[0]?.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: line.product.images[0].image_url,
								alt: line.product.name,
								loading: "lazy",
								className: "h-full w-full object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-secondary" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl",
									children: line.product.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground",
									children: ["₹", line.product.price]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 inline-flex items-center border border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon",
											onClick: () => update(line.product.id, -1),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-8 text-center text-sm",
											children: line.quantity
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon",
											onClick: () => update(line.product.id, 1),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": `Remove ${line.product.name}`,
							onClick: () => remove(line.product.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
						})
					]
				}, line.product.id)), !cart.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-full place-items-center text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "mx-auto mb-4 size-8 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: "Made to be held"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/collection",
							className: "mt-3 inline-block text-sm underline underline-offset-4",
							children: "Explore the collection"
						})
					] })
				})]
			}), cart.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5 flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["₹", subtotal] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "h-12 w-full rounded-none",
					onClick: () => toast.success("Demo checkout complete", { description: "No payment was taken." }),
					children: ["Checkout ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				})]
			})]
		})]
	})] });
}
function ProductCard({ product }) {
	const { add } = useStore();
	const image = product.images[0]?.image_url;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/products/$productId",
			params: { productId: product.id },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "crop-image aspect-square",
				children: image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: product.name,
					loading: "lazy",
					className: "h-full w-full object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-secondary" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-xl leading-tight md:mt-4 md:text-2xl",
				children: product.name
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-1 flex items-center justify-between gap-2 md:gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-xs text-muted-foreground md:text-sm",
					children: product.category
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm font-medium md:text-base",
					children: ["₹", product.price]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "icon",
				className: "size-8 shrink-0 rounded-none opacity-100 transition-opacity md:size-9 md:opacity-0 md:group-hover:opacity-100",
				"aria-label": `Add ${product.name} to bag`,
				onClick: () => add(product),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
			})]
		})]
	});
}
function BookingDialog({ eventId, children }) {
	const fallbackEvent = events[0];
	const event = events.find((item) => item.id === eventId) ?? fallbackEvent;
	if (!event) return null;
	const [date, setDate] = (0, import_react.useState)("2026-10-17");
	const [time, setTime] = (0, import_react.useState)("10:00");
	const [seats, setSeats] = (0, import_react.useState)(1);
	const [confirmed, setConfirmed] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		onOpenChange: (open) => {
			if (!open) setConfirmed(false);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: "rounded-none bg-[#E0E0E0] text-black hover:bg-[#ffffff]",
				children
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-xl rounded-none border-border p-7 md:p-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "font-display text-4xl font-normal",
				children: confirmed ? "Your seats are held" : event.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: confirmed ? "A demo confirmation has been created for this session." : "Choose a date, time, and the number of makers joining you." })] }), confirmed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-auto grid size-14 place-items-center rounded-full bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5",
						children: [
							seats,
							" seat",
							seats > 1 ? "s" : "",
							" · ",
							date,
							" at ",
							time
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-display text-3xl",
						children: ["₹", event.price * seats]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5 pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-sm",
						children: ["Date", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "date",
							value: date,
							min: "2026-10-01",
							onChange: (e) => setDate(e.target.value),
							className: "h-12 rounded-none bg-card"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-sm",
						children: ["Time", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: time,
							onValueChange: setTime,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "h-12 rounded-none bg-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "10:00",
									children: "10:00 AM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "14:00",
									children: "2:00 PM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "16:30",
									children: "4:30 PM"
								})
							] })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-y border-border py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Seats" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									onClick: () => setSeats(Math.max(1, seats - 1)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-10 text-center",
									children: seats
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									onClick: () => setSeats(Math.min(8, seats + 1)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between font-display text-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["₹", event.price * seats] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "h-12 w-full rounded-none",
						onClick: () => setConfirmed(true),
						children: ["Confirm seats ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				]
			})]
		})]
	});
}
function Newsletter() {
	const [email, setEmail] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#DED5BF] px-5 py-12 md:px-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] items-center gap-8 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				direction: "left",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl md:text-5xl",
					children: "Subscribe to get 10% off your first order"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				direction: "right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex border-b border-foreground",
					onSubmit: (e) => {
						e.preventDefault();
						if (email) {
							toast.success("Welcome to the studio notes");
							setEmail("");
						}
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "email",
						required: true,
						value: email,
						onChange: (e) => setEmail(e.target.value),
						placeholder: "Drop your email here",
						className: "h-14 rounded-none border-0 bg-card px-5 shadow-none focus-visible:ring-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "ghost",
						size: "icon",
						className: "h-14 w-14 rounded-none bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
					})]
				})
			})]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "px-5 py-16 md:px-10 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				direction: "up",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-[12px] font-normal md:text-[27px]",
						children: "Let’s Make a Buy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "\n              mt-4\n              text-center\n              whitespace-nowrap\n              font-display\n              font-light\n              text-[clamp(4.25rem,19vw,6rem)]\n              leading-[.8]\n              md:mt-5\n              md:text-[234px]\n            ",
						children: "Contact Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-20 text-right font-sans text-[12px] font-normal md:hidden",
						children: "For collaborations, events, makers, or simply to say hello."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden font-sans text-[16px] font-normal md:mt-8 md:block md:text-right",
						children: "For collaborations, events, makers, or simply to say hello."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				direction: "up",
				delay: .15,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid grid-cols-2 gap-x-10 gap-y-8 px-5 text-center text-xs md:mt-24 md:gap-10 md:px-20 md:text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"KALGA, PARVATI VALLEY",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Himachal Pradesh, India"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "underline-offset-4 hover:underline",
							href: "mailto:hello@letsmakeabuy.com",
							children: "hello@letsmakeabuy.com"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-7 md:block md:text-right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "underline-offset-4 hover:underline md:mt-6 md:inline-block",
							href: "https://instagram.com/letsmakeabuy",
							children: [
								"Instagram",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "md:hidden" }),
								" @letsmakeabuy"
							]
						})
					})]
				})
			})]
		})
	});
}
//#endregion
export { Reveal as a, StaggerItem as c, crafts as d, events as f, ProductCard as i, StaggerReveal as l, Button as n, SiteFooter as o, useStore as p, Newsletter as r, SiteHeader as s, BookingDialog as t, StoreProvider as u };
