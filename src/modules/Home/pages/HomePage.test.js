import { HomePage } from "./HomePage";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGetUser } from "@/modules/api";

jest.mock("@/modules/api");

describe(HomePage, () => {
  it("Should get the data and render it", () => {
    useGetUser.mockReturnValue({
      data: {
        data: [
          {
            id: 1,
            first_name: "Aile",
            last_name: "Gatlin",
            code: 104,
            company: "McGlynn Inc",
            status: false,
            access: 1,
          },
        ],
      },
      isLoading: false,
      isError: false,
    });
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    );

    expect(screen.getByText("Aile")).toBeInTheDocument();
  });
});
