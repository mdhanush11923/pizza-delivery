import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/select";
import { Button, Checkbox, CheckboxGroup, Input } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import customPizzaImg from "../Images/customPizza.png";

const pizzaBases = [
  { key: "Thin Crust", label: "Thin Crust" },
  { key: "Thick Crust", label: "Thick Crust" },
  { key: "Cheese Burst", label: "Cheese Burst" },
  { key: "Gluten Free", label: "Gluten Free" },
  { key: "Whole Wheat", label: "Whole Wheat" }
];

const sauces = [
  { key: "Tomato Basil", label: "Tomato Basil" },
  { key: "Barbeque", label: "Barbeque" },
  { key: "Pesto", label: "Pesto" },
  { key: "White Garlic", label: "White Garlic" },
  { key: "Spicy Buffalo", label: "Spicy Buffalo" }
];

const cheeses = [
  { key: "Mozzarella", label: "Mozzarella" },
  { key: "Cheddar", label: "Cheddar" },
  { key: "Parmesan", label: "Parmesan" },
  { key: "Feta", label: "Feta" },
  { key: "Gouda", label: "Gouda" }
];

const veggiesOptions = [
  { key: "Bell Peppers", label: "Bell Peppers" },
  { key: "Mushrooms", label: "Mushrooms" },
  { key: "Olives", label: "Olives" },
  { key: "Onions", label: "Onions" },
  { key: "Spinach", label: "Spinach" }
];

const PizzaCustomization = () => {
  const [base, setBase] = useState(new Set([]));
  const [sauce, setSauce] = useState(new Set([]));
  const [cheese, setCheese] = useState(new Set([]));
  const [veggies, setVeggies] = useState([]);

  const handleVeggiesChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setVeggies([...veggies, value]);
    } else {
      setVeggies(veggies.filter((v) => v !== value));
    }
  };

  const handleSubmit = () => {
    const orderData = {
      base: [...base].join(', '),
      sauce: [...sauce].join(', '),
      cheese: [...cheese].join(', '),
      veggies: veggies.join(', ')
    };
    console.log(orderData);
    // Handle submission and payment logic
  };

  return (
    <div className="flex flex-col items-center h-full p-10 pt-4">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-wrap justify-center items-center gap-10">
          <h1 className="scroll-m-20 sm:mb-4 text-4xl text-center font-poppins font-extrabold tracking-tight lg:text-5xl">
            Create Your Own Pizza
          </h1>
          <Image width={230} isBlurred src={customPizzaImg} />
        </div>

        <div className="flex flex-wrap sm:flex-nowrap gap-8 w-full">
          <Select
            variant="faded"
            label="Choose Pizza Base"
            selectedKeys={base}
            onSelectionChange={setBase}
          >
            {pizzaBases.map((item) => (
              <SelectItem key={item.key}>{item.label}</SelectItem>
            ))}
          </Select>

          <Select
            variant="faded"
            label="Choose Sauce"
            selectedKeys={sauce}
            onSelectionChange={setSauce}
          >
            {sauces.map((item) => (
              <SelectItem key={item.key}>{item.label}</SelectItem>
            ))}
          </Select>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap gap-8 w-full">
          <Select
            variant="faded"
            label="Choose Cheese"
            selectedKeys={cheese}
            onSelectionChange={setCheese}
          >
            {cheeses.map((item) => (
              <SelectItem key={item.key}>{item.label}</SelectItem>
            ))}
          </Select>

          <Input
            variant="faded"
            type="number"
            label="Quantity"
            placeholder="0"
            labelPlacement="inside"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">🛒</span>
              </div>
            }
            min={0}
            max={10}
          />
        </div>

        <CheckboxGroup
          classNames={{ label: "text-center" }}
          color="warning"
          label="Choose Veggies"
          orientation="horizontal"
        >
          {veggiesOptions.map((item) => (
            <Checkbox
              key={item.key}
              value={item.key}
              onChange={handleVeggiesChange}
            >
              {item.label}
            </Checkbox>
          ))}
        </CheckboxGroup>

        <Button
          className="w-44 h-14"
          color="danger"
          size="lg"
          radius="sm"
          onClick={handleSubmit}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default PizzaCustomization;
