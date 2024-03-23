import {
  View,
  Provider,
  defaultTheme,
  Picker,
  Item,
  Heading,
  Button,
  TextField,
  TextArea,
  Flex,
} from "@adobe/react-spectrum";
import ShoppingCart from "@spectrum-icons/workflow/ShoppingCart";
import Edit from "@spectrum-icons/workflow/Edit";
import CreditCard from "@spectrum-icons/workflow/CreditCard";
import { useState, useCallback } from "react";
import "./App.css";

const products = [
  {
    sku: "SHOES123",
    name: "Red canvas shoes",
    price: 34.76,
    currencyCode: "USD",
  },
  {
    sku: "SHOES456",
    name: "Brown leather shoes",
    price: 52.81,
    currencyCode: "USD",
  },
  { sku: "HAT567", name: "Wool Hat", price: 25.15, currencyCode: "USD" },
  { sku: "HAT089", name: "Straw Hat", price: 11.85, currencyCode: "USD" },
  { sku: "HAT090", name: "Monkey Hat", price: 14.85, currencyCode: "USD" },
];

const ratingOptions = [
  {
    rating: 1,
    reviewText: "Rubbish",
  },
  {
    rating: 2,
    reviewText: "Okay",
  },
  {
    rating: 3,
    reviewText: "Good",
  },
  {
    rating: 4,
    reviewText: "Great",
  },
  {
    rating: 5,
    reviewText: "Fantastic!",
  },
];

const getProductBySku = (sku) => {
  return products.find((product) => {
    return product.sku === sku;
  });
};

function App() {
  const [selectedProductSku, setSelectedProductSku] = useState("");
  const [reviewerId, setReviewerId] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  window.getProductListItems = useCallback(() => {
    const selectedProduct = getProductBySku(selectedProductSku);

    return selectedProduct
      ? [
          {
            quantity: 1,
            currencyCode: selectedProduct.currencyCode,
            SKU: selectedProduct.sku,
            name: selectedProduct.name,
            priceTotal: selectedProduct.price,
          },
        ]
      : undefined;
  }, [selectedProductSku]);

  window.getOrder = useCallback(() => {
    const selectedProduct = getProductBySku(selectedProductSku);

    return selectedProduct
      ? {
          currencyCode: selectedProduct.currencyCode,
          priceTotal: selectedProduct.price,
          payments: [
            {
              paymentAmount: selectedProduct.price,
              paymentType: "Credit Card",
            },
          ],
        }
      : undefined;
  }, [selectedProductSku]);

  window.getReview = useCallback(() => {
    const selectedProduct = getProductBySku(selectedProductSku);
    return selectedProduct
      ? {
          productSku: selectedProduct.sku,
          reviewerId,
          rating: parseInt(selectedRating, 10),
          reviewText,
        }
      : undefined;
  }, [selectedProductSku, reviewerId, selectedRating, reviewText]);

  return (
    <Provider theme={defaultTheme} colorScheme="light" minHeight="100vh">
      <View padding="size-250">
        <Picker
          label="Product"
          items={products}
          selectedKey={selectedProductSku}
          onSelectionChange={setSelectedProductSku}
          placeholder="Select a product..."
        >
          {(product) => <Item key={product.sku}>{product.name}</Item>}
        </Picker>
        <Heading level="1">XDM Commerce Example</Heading>
        <Flex direction="column" alignItems="flex-start" gap="size-100">
          <Button
            id="addToCartButton"
            variant="primary"
            isDisabled={!selectedProductSku}
          >
            <ShoppingCart marginEnd="size-65" />
            Add to cart
          </Button>
          <Button
            id="purchaseButton"
            variant="primary"
            isDisabled={!selectedProductSku}
          >
            <CreditCard marginEnd="size-65" />
            Purchase
          </Button>
        </Flex>
        <Heading level="1">XDM Product Review Example</Heading>
        <Flex direction="column" alignItems="flex-start" gap="size-100">
          <TextField
            label="Email Address"
            value={reviewerId}
            onChange={setReviewerId}
            isDisabled={!selectedProductSku}
          />
          <Picker
            label="Rating"
            placeholder="Select a rating..."
            items={ratingOptions}
            selectedKey={selectedRating}
            onSelectionChange={setSelectedRating}
            isDisabled={!selectedProductSku}
          >
            {(ratingOption) => (
              <Item key={ratingOption.rating}>{ratingOption.reviewText}</Item>
            )}
          </Picker>
          <TextArea
            label="Comment"
            value={reviewText}
            onChange={setReviewText}
            isDisabled={!selectedProductSku}
            minWidth="size-4600"
          />
          <Button
            id="submitReviewButton"
            variant="primary"
            isDisabled={!selectedProductSku || !reviewerId || !selectedRating}
          >
            <Edit marginEnd="size-65" />
            Submit Review
          </Button>
        </Flex>
      </View>
    </Provider>
  );
}

export default App;
