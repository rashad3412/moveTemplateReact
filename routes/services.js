import express from "express";
const router = express.Router();

// Sample data
const services = [
  {
    id: 1,
    name: "Local Moving",
    description:
      "Reliable and efficient local moving services to get you settled into your new home quickly. We handle everything from packing to unloading, ensuring a stress-free move within your area.",
  },
  {
    id: 2,
    name: "Long Distance",
    description:
      "Seamless long-distance moving services to transport your belongings safely and securely across state lines. We offer comprehensive planning and tracking for a worry-free relocation.",
  },
  {
    id: 3,
    name: "Office Relocation",
    description:
      "Minimize downtime with our professional office relocation services. We handle the efficient transfer of your equipment and furniture, ensuring a smooth transition for your business.",
  },
  {
    id: 4,
    name: "Box Delivery",
    description:
      "Convenient box delivery solutions to streamline your packing process. We provide sturdy boxes and timely delivery, so you can focus on organizing your move.",
  },
  {
    id: 5,
    name: "Loading and Unloading",
    description:
      "Let us handle the heavy lifting! Our team is equipped to safely move even the largest and most challenging items.",
  },
];

// GET all services
router.get("/", (req, res) => {
  res.json(services);
});

// GET a single service by ID
router.get("/:id", (req, res) => {
  const service = services.find((s) => s.id === parseInt(req.params.id));
  if (!service) return res.status(404).json({ message: "Service not found" });
  res.json(service);
});

export default router;
