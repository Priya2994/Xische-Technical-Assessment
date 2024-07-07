import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import App from "./App";
import * as api from "./utils/api";

// Mock the API calls
jest.mock("./utils/api");

// Mock the fetch API globally before tests
beforeAll(() => {
  // Mock recentNewsApi function
  const recentNewsApi = jest.fn().mockResolvedValue(mockArticle);

  // Spy on recentNewsApi and replace the original function
  jest.spyOn(api, "recentNewsApi").mockImplementation(recentNewsApi);
});

const mockArticle = [
  {
    id: 1,
    title: "Article 1",
    abstract: "This is the abstract for Article 1.",
    url: "http://example.com/article1",
    media: [
      {
        "media-metadata": [
          { url: "http://example.com/image1-small.jpg" },
          { url: "http://example.com/image1-medium.jpg" },
        ],
      },
    ],
    published_date: "2023-07-07",
  },
  {
    id: 2,
    title: "Article 2",
    abstract: "This is the abstract for Article 2.",
    url: "http://example.com/article2",
    media: [
      {
        "media-metadata": [
          { url: "http://example.com/image2-small.jpg" },
          { url: "http://example.com/image2-medium.jpg" },
        ],
      },
    ],
    published_date: "2023-07-08",
  },
];

test("renders the header and footer", async () => {
  await act(async () => {
    render(<App />);
  });

  // Verify header is rendered
  expect(screen.getByTitle("NewYorkTimes logo")).toBeInTheDocument();

  // Verify footer is rendered
  expect(screen.getByText("The New York Times Company")).toBeInTheDocument();
});

test("renders articles correctly", async () => {
  await act(async () => {
    render(<App />);
  });

  // Wait for articles to be loaded and displayed
  await waitFor(() => {
    expect(screen.getByText("Article 1")).toBeInTheDocument();
    expect(
      screen.getByText("This is the abstract for Article 1.")
    ).toBeInTheDocument();
    expect(screen.getByText("Article 2")).toBeInTheDocument();
    expect(
      screen.getByText("This is the abstract for Article 2.")
    ).toBeInTheDocument();
  });

  // Assert that recentNewsApi was called
  expect(api.recentNewsApi).toHaveBeenCalled();
});
