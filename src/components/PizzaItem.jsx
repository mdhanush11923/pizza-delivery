import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Tooltip,
  AccordionItem,
  Accordion,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownCircleSharpIcon from "@mui/icons-material/ArrowDropDownCircleSharp";
import pizzas from "./pizzaData";
import { useCart } from "./Cart";

export default function PizzaItem({ id, color }) {
  const [selectedSize, setSelectedSize] = React.useState("medium"); // Default size
  const pizza = pizzas[id];

  const { cartCount, setCartCount } = useCart();

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  function DemoDropDown() {
    return (
      <Dropdown>
        <DropdownTrigger>
          <Button
            fullWidth
            className="capitalize bg-background font-poppins text-forground"
            radius="sm"
            color="warning"
            size="sm"
          >
            {selectedSize}
            <ArrowDropDownCircleSharpIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={new Set([selectedSize])}
          onSelectionChange={(keys) =>
            setSelectedSize(Array.from(keys).join(", "))
          }
        >
          <DropdownItem key="small">Small (8 Inches)</DropdownItem>
          <DropdownItem key="medium">Medium (10 Inches)</DropdownItem>
          <DropdownItem key="large">Large (12 Inches)</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  return (
    <Card className="w-[275px] flex flex-col justify-evenly bg-foreground pb-4 gap-2 rounded-b-[10px] shadow-sm">
      <Card
        isPressable
        style={{ backgroundColor: color }}
        className={`w-[275px] justify-center self-start text-center rounded-b-[30px] ${color} p-5 shadow-sm`}
      >
        <div className="flex gap-4 flex-col items-center p-5">
          <Image
            className="w-full object-cover"
            width="100%"
            radius="full"
            src={pizza.image}
            isBlurred
          />
          <div>
            <h1 className="scroll-m-20 text-black font-poppins text-2xl font-extrabold tracking-tight">
              {pizza.name}
            </h1>
          </div>
          <div className="flex flex-col w-full gap-4 px-5">
            <DemoDropDown />

            <Button color="danger" radius="full" size="lg" onClick={addToCart}>
              <AddIcon />
            </Button>
          </div>
        </div>
      </Card>
      <Accordion isCompact variant="bordered">
        <AccordionItem
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
          classNames={{
            title: "font-normal font-semibold text-background",
            content: "text-background text-left  opacity-85",
          }}
          key="1"
          aria-label="Accordion 1"
          title="Description"
        >
          {pizza.description}
        </AccordionItem>
      </Accordion>
      <div className="flex px-5 justify-between">
        <h2 className="scroll-m-20 text-background text-xl font-extrabold tracking-tight first:mt-0">
          ₹ {pizza.prices[selectedSize]}
        </h2>
        <h2 className="scroll-m-20 ml-4 text-background text-sm opacity-85 tracking-tight first:mt-0">
          In Stock: {pizza.availableQuantity}
        </h2>
      </div>
    </Card>
  );
}
